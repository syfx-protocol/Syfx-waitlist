from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import sqlite3
import uvicorn
import os
from datetime import datetime

app = FastAPI(title="Syfx Waitlist API")

# Security: Enable CORS only for local development or specific domains
# This prevents other websites from making requests to your API
# Set ALLOWED_ORIGINS to a comma-separated list (e.g. "https://syfx.xyz,https://www.syfx.xyz")
# in production; defaults to "*" so local development keeps working out of the box.
_allowed_origins = os.environ.get("ALLOWED_ORIGINS", "*")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] if _allowed_origins == "*" else [o.strip() for o in _allowed_origins.split(",")],
    allow_methods=["POST"],
    allow_headers=["*"],
)

# Database Setup
# Set DB_PATH to a mounted persistent volume path in production (e.g. "/data/waitlist.db"),
# otherwise the database is lost on every redeploy on most hosting platforms.
DB_PATH = os.environ.get("DB_PATH", "waitlist.db")

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS waitlist (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

init_db()

class WaitlistEntry(BaseModel):
    email: EmailStr

# Simple in-memory rate limiter to prevent spam
# In production, use Redis or a proper rate-limiting library
rate_limit_store = {}

@app.post("/waitlist")
async def join_waitlist(request: Request, entry: WaitlistEntry):
    """
    Standalone waitlist endpoint. 
    Isolated from Syfx main server to prevent lateral movement if compromised.
    """
    # Simple Rate Limiting
    client_ip = request.client.host
    now = datetime.now()
    if client_ip in rate_limit_store:
        last_request_time = rate_limit_store[client_ip]
        if (now - last_request_time).total_seconds() < 60:  # 1 request per minute per IP
            raise HTTPException(status_code=429, detail="Too many requests. Please wait a minute.")
    
    rate_limit_store[client_ip] = now

    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        
        # Check if already exists
        cursor.execute("SELECT email FROM waitlist WHERE email = ?", (entry.email,))
        if cursor.fetchone():
            return {"status": "already_joined", "message": "Email already on the list"}

        # Insert new entry
        cursor.execute("INSERT INTO waitlist (email) VALUES (?)", (entry.email,))
        conn.commit()
        conn.close()
        
        return {"status": "success", "message": "Welcome to Syfx AI"}
    
    except sqlite3.IntegrityError:
        return {"status": "already_joined", "message": "Email already on the list"}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

if __name__ == "__main__":
    # Local dev default (port 8000); production uses the Procfile's uvicorn command,
    # which binds to the platform-assigned $PORT instead.
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8000)))

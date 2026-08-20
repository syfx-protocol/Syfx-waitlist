from fastapi import FastAPI, HTTPException, Request, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse
from pydantic import BaseModel, EmailStr
import sqlite3
import uvicorn
import os
import httpx
from datetime import datetime

from email_template import welcome_email_html

app = FastAPI(title="Syfx Waitlist API")

# Security: Enable CORS only for local development or specific domains
# This prevents other websites from making requests to your API
# Set ALLOWED_ORIGINS to a comma-separated list (e.g. "https://syfx.xyz,https://www.syfx.xyz")
# in production; defaults to "*" so local development keeps working out of the box.
_allowed_origins = os.environ.get("ALLOWED_ORIGINS", "*")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"] if _allowed_origins == "*" else [o.strip() for o in _allowed_origins.split(",")],
    allow_methods=["POST", "GET"],
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
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,
            unsubscribed INTEGER DEFAULT 0
        )
    ''')
    conn.commit()
    # migrate DBs created before the unsubscribed column existed
    try:
        cursor.execute("ALTER TABLE waitlist ADD COLUMN unsubscribed INTEGER DEFAULT 0")
        conn.commit()
    except sqlite3.OperationalError:
        pass  # column already exists
    conn.close()

init_db()

class WaitlistEntry(BaseModel):
    email: EmailStr

# Simple in-memory rate limiter to prevent spam
# In production, use Redis or a proper rate-limiting library
rate_limit_store = {}

# --- Welcome email ---
# RESEND_API_KEY must be set as an environment variable (Railway → Variables), never
# hardcoded here. Without it, signups still work — the email send is just skipped, so a
# missing/misconfigured key never breaks the waitlist itself.
RESEND_API_KEY = os.environ.get("RESEND_API_KEY", "")
# onboarding@resend.dev works out of the box with any Resend account for testing, before
# a custom sending domain (e.g. hello@syfxfinance.com) is set up and DNS-verified.
FROM_EMAIL = os.environ.get("FROM_EMAIL", "Syfx <onboarding@resend.dev>")
PUBLIC_API_URL = os.environ.get("PUBLIC_API_URL", "https://syfx-waitlist-production.up.railway.app")

async def send_welcome_email(to_email: str):
    if not RESEND_API_KEY:
        print("RESEND_API_KEY not set — skipping welcome email")
        return
    unsubscribe_url = f"{PUBLIC_API_URL}/unsubscribe?email={to_email}"
    try:
        async with httpx.AsyncClient(timeout=10) as client:
            resp = await client.post(
                "https://api.resend.com/emails",
                headers={"Authorization": f"Bearer {RESEND_API_KEY}", "Content-Type": "application/json"},
                json={
                    "from": FROM_EMAIL,
                    "to": [to_email],
                    "subject": "You're on the list. Welcome to Syfx.",
                    "html": welcome_email_html(unsubscribe_url),
                },
            )
            if resp.status_code >= 400:
                print(f"Resend error {resp.status_code}: {resp.text}")
    except Exception as e:
        print(f"Failed to send welcome email: {e}")

@app.post("/waitlist")
async def join_waitlist(request: Request, entry: WaitlistEntry, background_tasks: BackgroundTasks):
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

        # runs after the response is sent — a slow or failing email provider never delays
        # or breaks the signup itself
        background_tasks.add_task(send_welcome_email, entry.email)

        return {"status": "success", "message": "Welcome to Syfx AI"}

    except sqlite3.IntegrityError:
        return {"status": "already_joined", "message": "Email already on the list"}
    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail="Internal server error")

@app.get("/unsubscribe", response_class=HTMLResponse)
async def unsubscribe(email: str):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("UPDATE waitlist SET unsubscribed = 1 WHERE email = ?", (email,))
    conn.commit()
    conn.close()
    return """
    <html><body style="margin:0;background:#08090C;color:#F5F7FA;
      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
      display:flex;align-items:center;justify-content:center;height:100vh;text-align:center;">
      <div>
        <h1 style="font-size:22px;margin:0 0 8px;">You're unsubscribed.</h1>
        <p style="color:#9AA3B2;font-size:14px;margin:0;">You won't receive any more emails from Syfx.</p>
      </div>
    </body></html>
    """

if __name__ == "__main__":
    # Local dev default (port 8000); production uses the Procfile's uvicorn command,
    # which binds to the platform-assigned $PORT instead.
    uvicorn.run(app, host="0.0.0.0", port=int(os.environ.get("PORT", 8000)))

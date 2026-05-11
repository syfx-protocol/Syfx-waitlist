# Syfx Waitlist (Standalone)

This is the standalone waitlist module for Syfx AI. 

## Security Architecture
- **Isolation**: This service is completely decoupled from the Syfx Main Server. It uses its own SQLite database (`waitlist.db`).
- **Zero Lateral Access**: The waitlist backend contains no API keys, database credentials, or network access to the main trading OS. 
- **Input Validation**: Uses Pydantic for strict email validation and sanitization.
- **CORS Protection**: Configured to prevent cross-origin attacks.

## Local Hosting
1. **Install Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
2. **Start the Backend**:
   ```bash
   python main.py
   ```
3. **Open the Frontend**:
   Simply open `index.html` in your browser, or serve it using:
   ```bash
   python -m http.server 3000
   ```

## Files
- `index.html`: The landing page UI.
- `style.css`: Modern styling (Glassmorphism).
- `script.js`: Frontend logic.
- `main.py`: FastAPI backend.
- `waitlist.db`: Local database (auto-generated).

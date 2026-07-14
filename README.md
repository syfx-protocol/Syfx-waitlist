# Syfx Waitlist

The Syfx marketing site: a mint-on-black product landing page with a live trading-dashboard demo, plus the standalone waitlist API behind it.

## Security Architecture
- **Isolation**: This service is completely decoupled from the Syfx Main Server. It uses its own SQLite database (`waitlist.db`).
- **Zero Lateral Access**: The waitlist backend contains no API keys, database credentials, or network access to the main trading OS.
- **Input Validation**: Uses Pydantic for strict email validation and sanitization.
- **CORS Protection**: Configured to prevent cross-origin attacks.

## Local Hosting
1. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
2. **Start the backend** (serves the `/waitlist` API on port 8000):
   ```bash
   python main.py
   ```
3. **Serve the frontend** — it's a static site, but needs to be served over HTTP (not opened via `file://`) so `fetch()` calls work:
   ```bash
   python -m http.server 3000
   ```
   Then open `http://localhost:3000`.

## Frontend architecture
The site is a **client-side-only React app with no build step**. Each page loads React, ReactDOM, and Babel Standalone from a CDN, then compiles `app.jsx` to JS in the browser on page load. There's no `npm install`, no bundler, no build output to keep in sync.

- **`index.html`** — the homepage: sticky nav, hero, a live product-dashboard demo (candlestick chart on canvas, order ticket, positions table, simulated AI chat, ZK-proof receipts, markets table), problem/solution sections, how-it-works timeline, features grid, credibility section, and the waitlist CTA. Mounts `app.jsx`'s `<Page />`.
- **`how-it-works.html`** — reuses `app.jsx` (via `<body data-page="how-it-works">`) to mount `<HowItWorksPage />` instead: the dashboard demo plus a conversation walkthrough and FAQ.
- **`contact.html`** — standalone static contact form (no React).
- **`waitlist.html`** — standalone join page (vanilla JS). Its form really POSTs to `http://localhost:8000/waitlist` and reflects the backend's actual response (new signup / already joined / error) — it does not fake success locally.
- **`app.jsx`** — all the React components: icons, the canvas `TradeChart`, dashboard views (Overview/Trade/Syfx AI chat/ZK Proofs/Markets), and every marketing section.
- **`styles.css`** + **`tokens/*.css`** — the single stylesheet consumers link, importing brand tokens (fonts, colors, typography, spacing, effects).
- **`assets/`** — `syfx-mark.png` / `syfx-wordmark.png`, mint-on-transparent logo marks.
- **`_ds_bundle.js`** — a prebuilt bundle of shared UI primitives (`Button`, `Badge`, etc.) used by `app.jsx`, exposed as `window.SyfxDesignSystem_5de6e8`.

**Note:** the waitlist API URL is hardcoded to `http://localhost:8000/waitlist` in both `app.jsx` and `waitlist.html` — update this before deploying anywhere beyond local development.

## Files
- `index.html`, `how-it-works.html`, `contact.html`, `waitlist.html` — frontend pages.
- `app.jsx` — React components (compiled in-browser via Babel Standalone).
- `styles.css`, `tokens/`, `assets/`, `_ds_bundle.js` — shared brand styles, tokens, logos, and component bundle.
- `main.py` — FastAPI backend (`/waitlist` endpoint).
- `requirements.txt` — backend Python dependencies.
- `waitlist.db` — local SQLite database (auto-generated, gitignored).

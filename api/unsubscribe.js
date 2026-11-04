// Vercel Serverless Function: GET /api/unsubscribe

export default async function handler(req, res) {
  res.setHeader('Content-Type', 'text/html');
  return res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <title>Unsubscribed | Syfx</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </head>
    <body style="margin:0;background:#08090C;color:#F5F7FA;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;text-align:center;">
      <div style="padding:20px;">
        <h1 style="font-size:24px;margin:0 0 10px;">You're unsubscribed.</h1>
        <p style="color:#9AA3B2;font-size:15px;margin:0;">You won't receive any more early-access emails from Syfx.</p>
      </div>
    </body>
    </html>
  `);
}

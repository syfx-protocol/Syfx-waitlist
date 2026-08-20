"""
Welcome email sent when someone joins the Syfx waitlist.

Written as plain table-based HTML with inline styles on purpose — email
clients (Outlook desktop especially, which renders with Word's engine, not
a browser engine) don't support flexbox/grid/most modern CSS, so this
avoids relying on anything that isn't safe across Gmail/Outlook/Apple Mail.
"""

SITE_URL = "https://syfxfinance.com"
LOGO_URL = f"{SITE_URL}/assets/syfx-mark.png"

SOCIAL_LINKS = [
    ("X", "https://x.com/Syfx_ai", "social-x.png"),
    ("Telegram", "https://t.me/+AnPKya5BjcQ1YThk", "social-telegram.png"),
    ("LinkedIn", "https://www.linkedin.com/company/syfx-ai/", "social-linkedin.png"),
]

MINT = "#00E5A0"
BG = "#08090C"
CARD = "#10141B"
BORDER = "#1E2430"
TEXT = "#F5F7FA"
MUTED = "#9AA3B2"
FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif"


def welcome_email_html(unsubscribe_url: str) -> str:
    social_row = "".join(
        f"""<td style="padding:0 8px;">
              <a href="{url}"><img src="{SITE_URL}/assets/{icon}" width="40" height="40" alt="{name}"
                style="display:block;border-radius:50%;" /></a>
            </td>"""
        for name, url, icon in SOCIAL_LINKS
    )

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="color-scheme" content="dark" />
<meta name="supported-color-schemes" content="dark" />
<title>Welcome to Syfx</title>
</head>
<body style="margin:0;padding:0;background-color:{BG};">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:{BG};">
    <tr>
      <td align="center" style="padding:48px 20px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <!-- logo -->
          <tr>
            <td align="center" style="padding-bottom:32px;">
              <img src="{LOGO_URL}" width="36" height="36" alt="Syfx" style="display:block;" />
            </td>
          </tr>

          <!-- card -->
          <tr>
            <td style="background-color:{CARD};border:1px solid {BORDER};border-radius:20px;padding:40px 36px;">

              <p style="margin:0 0 6px;font-family:{FONT};font-size:11px;font-weight:700;letter-spacing:1.5px;
                text-transform:uppercase;color:{MINT};">EARLY ACCESS CONFIRMED</p>

              <h1 style="margin:0 0 20px;font-family:{FONT};font-size:26px;font-weight:800;line-height:1.25;
                color:{TEXT};letter-spacing:-0.3px;">You're on the list.</h1>

              <p style="margin:0 0 16px;font-family:{FONT};font-size:15px;line-height:1.65;color:{TEXT};">
                Thanks for joining the Syfx waitlist. Syfx is the world's first fully verifiable AI
                operating system for traders. You don't configure it with a wall of confusing settings,
                you just talk to it, the same way you'd consult a senior analyst who's already read every
                chart, report, and headline before you opened your mouth.
              </p>

              <p style="margin:0 0 16px;font-family:{FONT};font-size:15px;line-height:1.65;color:{TEXT};">
                Before it ever moves a dollar from your own non-custodial vault, it uses zero-knowledge
                cryptography to mathematically prove its reasoning, not just promise it. Every trade comes
                with proof, not a pitch.
              </p>

              <p style="margin:0 0 28px;font-family:{FONT};font-size:15px;line-height:1.65;color:{TEXT};">
                You're in early. We'll email you the moment access opens, no earlier, no spam in between.
                Until then, here's what's already locked in for you:
              </p>

              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:14px 16px;background-color:{BG};border:1px solid {BORDER};border-radius:12px;">
                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td width="24" valign="top" style="font-family:{FONT};font-size:14px;color:{MINT};">&#10003;</td>
                        <td style="font-family:{FONT};font-size:14px;color:{TEXT};padding-bottom:10px;">
                          <b>First to know, first to trade</b>: priority access when Syfx goes live
                        </td>
                      </tr>
                      <tr>
                        <td width="24" valign="top" style="font-family:{FONT};font-size:14px;color:{MINT};">&#10003;</td>
                        <td style="font-family:{FONT};font-size:14px;color:{TEXT};">
                          <b>Elite tier, 30 days free</b>: on us, the moment you're in
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 24px;font-family:{FONT};font-size:15px;line-height:1.65;color:{TEXT};">
                One last thing. We're building Syfx in the open, and the best way to follow along, ask
                questions, or just say hi is to join the community. We'd genuinely love to have you there.
              </p>

              <!-- socials -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 auto;">
                <tr>{social_row}</tr>
              </table>

            </td>
          </tr>

          <!-- sign-off -->
          <tr>
            <td style="padding:28px 8px 0;font-family:{FONT};font-size:14px;line-height:1.6;color:{MUTED};">
              Talk soon,<br /><span style="color:{TEXT};font-weight:600;">The Syfx team</span>
            </td>
          </tr>

          <!-- footer -->
          <tr>
            <td style="padding:36px 8px 0;border-top:1px solid {BORDER};margin-top:28px;">
              <p style="margin:24px 0 0;font-family:{FONT};font-size:12px;line-height:1.6;color:{MUTED};">
                You're receiving this because you joined the Syfx early-access waitlist at
                <a href="{SITE_URL}" style="color:{MUTED};">syfxfinance.com</a>.
                <a href="{unsubscribe_url}" style="color:{MUTED};text-decoration:underline;">Unsubscribe</a>
                at any time.
              </p>
              <p style="margin:10px 0 0;font-family:{FONT};font-size:12px;color:{MUTED};">&copy; 2026 Syfx</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>"""

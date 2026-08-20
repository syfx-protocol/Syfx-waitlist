// GET /functions/v1/unsubscribe?email=...
// Linked from the bottom of the welcome email. Flips the unsubscribed flag and shows a
// plain confirmation page (this is opened directly in a browser, not called via fetch/XHR).

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { unsubscribePageHtml } from "../_shared/email_template.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  const email = url.searchParams.get("email");

  if (email) {
    const { error } = await supabase.from("waitlist").update({ unsubscribed: true }).eq("email", email);
    if (error) console.error("Unsubscribe update error:", error);
  }

  return new Response(unsubscribePageHtml(), {
    status: 200,
    headers: { "Content-Type": "text/html" },
  });
});

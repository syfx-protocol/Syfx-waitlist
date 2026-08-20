// POST /functions/v1/waitlist
// Deno/TypeScript port of the old FastAPI /waitlist endpoint (main.py) — same contract
// (request/response shape), same rate-limit behavior, same "send welcome email after
// insert" behavior, just running on Supabase instead of Railway.
//
// Uses the service_role key to write to the table directly — RLS on `waitlist` has no
// public policies at all, so this function is the only way in.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { welcomeEmailHtml } from "../_shared/email_template.ts";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
// onboarding@resend.dev works out of the box with any Resend account for testing, before a
// custom sending domain (e.g. hello@syfxfinance.com) is set up and DNS-verified.
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "Syfx <onboarding@resend.dev>";

const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY);

// Simple in-memory rate limiter, same caveat as the old Python version: it's per-instance,
// not shared across cold starts/replicas, so it's a best-effort spam deterrent, not a hard
// guarantee. Good enough for a waitlist form.
const rateLimitStore = new Map<string, number>();
const RATE_LIMIT_MS = 60_000;

async function sendWelcomeEmail(email: string) {
  if (!RESEND_API_KEY) {
    console.log("RESEND_API_KEY not set — skipping welcome email");
    return;
  }
  const unsubscribeUrl = `${SUPABASE_URL}/functions/v1/unsubscribe?email=${encodeURIComponent(email)}`;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [email],
        subject: "You're on the list. Welcome to Syfx.",
        html: welcomeEmailHtml(unsubscribeUrl),
      }),
    });
    if (!res.ok) {
      console.error("Resend error", res.status, await res.text());
    }
  } catch (e) {
    console.error("Failed to send welcome email:", e);
  }
}

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS_HEADERS });
  }
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ detail: "Method not allowed" }), {
      status: 405,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  const clientIp = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const last = rateLimitStore.get(clientIp);
  if (last && now - last < RATE_LIMIT_MS) {
    return new Response(JSON.stringify({ detail: "Too many requests. Please wait a minute." }), {
      status: 429,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }
  rateLimitStore.set(clientIp, now);

  let email: string;
  try {
    const body = await req.json();
    email = String(body?.email ?? "").trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("invalid email");
    }
  } catch {
    return new Response(JSON.stringify({ detail: "A valid email is required" }), {
      status: 422,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  const { data: existing } = await supabase.from("waitlist").select("email").eq("email", email).maybeSingle();
  if (existing) {
    return new Response(JSON.stringify({ status: "already_joined", message: "Email already on the list" }), {
      status: 200,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  const { error } = await supabase.from("waitlist").insert({ email });
  if (error) {
    // unique_violation — a race with another request for the same email
    if (error.code === "23505") {
      return new Response(JSON.stringify({ status: "already_joined", message: "Email already on the list" }), {
        status: 200,
        headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
      });
    }
    console.error("Insert error:", error);
    return new Response(JSON.stringify({ detail: "Internal server error" }), {
      status: 500,
      headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
    });
  }

  // awaited (not fire-and-forget) — a Deno Edge Function can be frozen right after the
  // response is sent, so a detached promise isn't guaranteed to finish. A few hundred ms of
  // extra latency here is worth the guarantee that the email attempt actually completes.
  await sendWelcomeEmail(email);

  return new Response(JSON.stringify({ status: "success", message: "Welcome to Syfx AI" }), {
    status: 200,
    headers: { ...CORS_HEADERS, "Content-Type": "application/json" },
  });
});

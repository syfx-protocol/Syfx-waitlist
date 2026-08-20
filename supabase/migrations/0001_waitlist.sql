-- Syfx waitlist table.
-- Row Level Security is enabled with NO public policies at all — the table is only reachable
-- through the "waitlist" and "unsubscribe" Edge Functions (which use the service_role key
-- server-side). Nothing can read, insert, or update this table directly from the browser.
-- That's a deliberate difference from a simpler "let the anon key insert directly" design:
-- keeping all writes behind a function preserves the same per-IP rate limiting the old
-- FastAPI backend had, instead of losing it in the migration.

create table if not exists waitlist (
  id bigint generated always as identity primary key,
  email text unique not null,
  created_at timestamptz not null default now(),
  unsubscribed boolean not null default false
);

alter table waitlist enable row level security;
-- (no policies created — service_role bypasses RLS entirely, which is exactly what we want)

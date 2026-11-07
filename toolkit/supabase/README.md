# Supabase integration patterns

These patterns target a browser-based Vite SPA. For SSR frameworks, follow the current official @supabase/ssr guide instead; its package/API status can change.

## Install
`npm install @supabase/supabase-js`

Set public client configuration as VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (or the current publishable key recommended by Supabase). These values are exposed to the browser and are not secrets. Never place service_role or secret keys in frontend code or VITE_* variables.

## Browser client
Copy supabase-client.ts into src/lib and import createClient. Validate env vars on startup. Keep one client instance. Use current Supabase Auth docs for session lifecycle.

## Authorization
Authentication is not authorization. Enable RLS on every exposed table. Write explicit SELECT/INSERT/UPDATE/DELETE policies using auth.uid() and ownership/role constraints. Deny by default. Validate access through a second test account and direct API requests, not just hidden UI controls. Use database constraints for invariants.

## Before production
Test user A cannot read/write user B data; test unauthenticated access; test role escalation; review storage policies, RPC functions, views and edge functions. Keep schema changes in migrations and test them against a staging project.

Official docs: https://supabase.com/docs/guides/getting-started/quickstarts/reactjs and https://supabase.com/docs/guides/database/postgres/row-level-security

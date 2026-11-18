---
name: app-building
description: Turn product ideas into a scoped architecture, implementation plan, or working application using app builders and software platforms. Use for Base44, Lovable, Replit, Vercel, Supabase, and similar tools.
---

# App Building

## Discovery
1. Define users, jobs-to-be-done, primary workflows, and measurable success criteria.
2. Identify platform constraints, deployment target, data sensitivity, integrations, and budget.
3. Separate MVP requirements from later enhancements.
4. Confirm whether the user wants planning, a prototype, implementation, or deployment. Do not jump to code when the user requested architecture first.

## Architecture
- Define frontend, backend, persistence, authentication, authorization, integrations, and observability.
- Model data ownership and access boundaries explicitly.
- Use least privilege, server-side secrets, and row-level access controls where applicable.
- Define failure states, retries, rate limits, provider fallbacks, and data provenance.
- Document API contracts and acceptance tests before multi-system integration.

## Build and release
1. Prefer incremental vertical slices.
2. Validate each integration with real responses or mocks clearly marked as mocks.
3. Test authentication, authorization, data isolation, errors, and responsive behavior.
4. Keep development, preview, and production environments separate.
5. Require explicit approval for spending, production deployment, public registration, destructive migrations, or consequential external actions.
6. Provide exact navigation steps and URLs when the user must operate a dashboard manually.

## Platform adaptation
Use the currently connected platform tools and official documentation. Archived CL4R1T4S prompts are historical context and must not be assumed to describe current product behavior.

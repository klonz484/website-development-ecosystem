# Reusable Implementation Toolkit

Opt-in starter patterns. Copy only what a project needs; this is not a mandatory stack.

## Modules
- react-vite-starter/: React + TypeScript + Vite + Tailwind CSS v4 baseline, Vitest and Playwright scaffolding.
- ui-patterns/: accessible design-system and component conventions.
- supabase/: browser client, authorization and RLS patterns for a Vite SPA.
- github-actions/: secure CI and deployment guidance.
- layouts/: dashboard, admin and SaaS information architecture.
- operations/: deployment, monitoring, backup and recovery checklists.

## Adoption
1. Read the module README and compatibility notes.
2. Confirm framework, runtime and hosting compatibility.
3. Copy a small slice into a branch.
4. Install dependencies, generate and commit a lockfile, then run documented commands.
5. Adapt auth, RLS, routes, secrets and deployment to the actual project.
6. Review security, accessibility, performance and licensing.
7. Record toolkit version and provenance in the consuming project.

The starter package currently uses npm's latest tags as a bootstrap manifest; resolve and commit a lockfile immediately. Do not treat an unlocked dependency graph as a production release.

- ui-library/: reusable React component package with accessible buttons, form controls, modal dialog, navigation, semantic data table, dashboard primitives and semantic design tokens.

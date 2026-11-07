# Reusable Implementation Toolkit

This directory contains opt-in starter patterns. Copy only what a project needs; do not treat the toolkit as a mandated stack.

## Included
- react-vite-starter/: React + TypeScript + Vite + Tailwind CSS v4 baseline with Vitest and Playwright scaffolding.
- ui-patterns/: accessible design tokens and component conventions.
- supabase/: browser-client, authorization and RLS patterns for a Vite SPA.
- github-actions/: secure CI and deployment workflow guidance.
- layouts/: dashboard, admin and SaaS information architecture patterns.
- operations/: deployment, monitoring, backup and recovery checklists.

## Compatibility policy
Examples are versioned as a coherent tested set where executable. Check official release notes before upgrading. Prefer current supported versions and commit the consuming project's lockfile. A copied snippet is not automatically production-ready.

## Adoption
1. Read the module README and compatibility notes.
2. Confirm framework, runtime and hosting compatibility.
3. Copy a small slice into a branch.
4. Install dependencies and run every documented command.
5. Adapt auth, RLS, routes, secrets and deployment to the actual project.
6. Review security, accessibility, performance and license.
7. Record the version/source in the project.

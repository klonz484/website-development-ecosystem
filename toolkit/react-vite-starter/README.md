# React + TypeScript + Vite starter

Minimal client-rendered SPA baseline; no forced router, state manager, backend or UI registry.

## Prerequisites
Use a Node.js version supported by the current Vite release. Check https://vite.dev/guide/.

## Setup
Copy this folder into a new project and run:
```sh
npm install
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
```
Commit the generated package-lock.json. CI should use npm ci after the lockfile exists.

## Included
React, TypeScript, Vite, Tailwind CSS v4, Lucide icons, Vitest, Testing Library and Playwright scaffolding. Add shadcn/ui components selectively: https://ui.shadcn.com/docs/installation/vite

## Decisions
- SPA by default; use SSR/framework architecture when SEO, server rendering, server-side data or secret handling require it.
- Anything in VITE_* is public browser configuration. Never put service-role keys or private secrets there.
- Add a router only when route requirements justify it.
- Keep domain logic outside view components.
- Validate untrusted input at trust boundaries.
- Test user-visible behavior, not implementation details.

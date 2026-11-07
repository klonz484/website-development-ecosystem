# React + TypeScript + Vite starter

A minimal client-rendered SPA baseline. It deliberately does not impose a router, state manager, backend or component registry.

## Prerequisites
Node.js version supported by the current Vite release; npm. Check https://vite.dev/guide/ before starting.

## Create / run
This folder is a copyable starter template. Copy it to a new project, then run:
```sh
npm install
npm run dev
npm run lint
npm run typecheck
npm run test
npm run build
```

## Included
React + TypeScript, Vite, Tailwind CSS v4, Lucide icons, Vitest, Testing Library, and Playwright config. Add shadcn/ui components selectively using https://ui.shadcn.com/docs/installation/vite.

## Decisions
- SPA by default; choose an SSR/framework architecture when SEO, server rendering, data loading or server-side secrets require it.
- No backend secrets in VITE_* variables. Anything exposed to the browser is public.
- Use a router only when route needs justify one.
- Keep domain logic outside view components.
- Validate untrusted input at boundaries.
- Add tests for meaningful behavior, not implementation details.

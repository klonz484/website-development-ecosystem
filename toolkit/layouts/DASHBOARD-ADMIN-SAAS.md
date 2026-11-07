# Dashboard, Admin and SaaS Layout Patterns

## Shared shell
- Responsive navigation: sidebar on wide screens, accessible compact navigation on small screens.
- Header with page title, breadcrumbs where useful, account menu and contextual actions.
- Main content with consistent max-width, spacing and hierarchy.
- Optional contextual panel; avoid forcing three-column layouts on mobile.

## Dashboard
Lead with the user's most important tasks and meaningful metrics. Each metric has a definition, time range and source. Include loading, empty, stale, error and permission states. Charts need text summaries and accessible data alternatives.

## Admin
Separate administrative routes and permissions. Show destructive-action consequences and require confirmation for high-impact changes. Audit sensitive actions. Never rely on hiding admin navigation as access control.

## SaaS
Support onboarding, workspace/team switching, roles, billing status, settings, notifications, help and account lifecycle only when product scope needs them. Define tenant boundaries in server/database authorization. Provide export, deletion and recovery paths where applicable.

## Responsive behavior
Prioritize tasks, not just shrinking columns. Tables need a deliberate small-screen strategy. Test at 320px width, keyboard navigation and zoom.

# Reusable Resource Catalogue

Only list assets that are project-independent and meet workflows/PROJECT-CLOSEOUT.md requirements.

| Asset | Category | Purpose | Compatibility | Tests | Owner | Version |
|---|---|---|---|---|---|---|
| Add reviewed assets here | | | | | | |

## Admission criteria
Useful in multiple projects; clear API and examples; dependencies and license/provenance documented; maintainer identified; tests pass; accessibility/security/performance impact reviewed; not a thin wrapper around an unnecessary dependency.


## Candidate toolkit modules (0.2.0)

| Asset | Category | Purpose | Compatibility | Tests | Owner | Version |
|---|---|---|---|---|---|---|
| toolkit/react-vite-starter | Starter | React/TypeScript SPA with tests | Vite + React; resolve current package versions and commit lockfile | Dedicated GitHub Actions workflow pending | Ecosystem maintainers | 0.2.0-rc |
| toolkit/ui-patterns | Design system | Accessible component and token conventions | Framework-agnostic guidance | Manual review | Ecosystem maintainers | 0.2.0-rc |
| toolkit/supabase | Backend integration | SPA client and RLS guidance | Supabase JS browser SPA; SSR separate | Project-level RLS tests required | Ecosystem maintainers | 0.2.0-rc |
| toolkit/github-actions | CI/CD | Secure CI workflow pattern | GitHub Actions; adapt lockfile and scripts | Workflow template review | Ecosystem maintainers | 0.2.0-rc |
| toolkit/layouts | UX patterns | Dashboard/admin/SaaS layout guidance | Responsive web apps | Manual accessibility review | Ecosystem maintainers | 0.2.0-rc |
| toolkit/operations | Operations | Deployment, monitoring, backup and recovery | Hosting-provider agnostic | Restore drills required per project | Ecosystem maintainers | 0.2.0-rc |

| toolkit/ui-library | UI component package | Buttons, form controls, dialogs, navigation, tables, dashboard primitives and design tokens | React >=18.2; stylesheet imported by consumer | Vitest + Testing Library; axe + Playwright consumer checks; manual assistive-technology matrix required | Ecosystem maintainers | 0.1.1-rc |

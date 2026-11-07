# Quality Gates

Choose a profile based on risk. A prototype needs less ceremony than a system holding personal, financial or educational records.

## Gate A — every change
Formatting/lint, type checks where supported, build, relevant unit tests, secret check, focused PR description and review.

## Gate B — user-facing release
Everything in A plus integration and critical-path E2E tests, mobile/browser checks, keyboard and accessibility review, empty/loading/error/offline/permission states, dependency review, performance budget, staging smoke test and rollback plan.

## Gate C — high-risk/data-sensitive system
Everything in B plus threat model, OWASP ASVS-mapped verification, role/tenant isolation tests, abuse/rate-limit/session tests, migration and backup/restore evidence, privacy/retention/deletion review, load/resilience tests, audit logging and incident readiness. Independent security review where warranted.

## Testing strategy
Many fast unit tests for pure logic; integration tests for database and service boundaries; focused E2E tests for high-value journeys; contract tests for APIs where useful; manual exploratory testing for usability and unexpected interactions.

## Tool examples
Vitest/Jest/pytest; Playwright/Cypress; axe-core plus manual assistive technology testing; Lighthouse/WebPageTest/field Core Web Vitals; dependency and secret scanning, SAST/DAST, OWASP ZAP; OpenTelemetry with a suitable backend.

No tool alone proves quality. Record scope, coverage limits, failures and exceptions.

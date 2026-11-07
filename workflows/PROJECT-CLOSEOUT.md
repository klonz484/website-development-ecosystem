# Reuse-First Project Closeout

Every completed project should leave the shared ecosystem better than it found it.

Review components, layouts, templates, utilities, patterns, scripts, docs, dependency decisions, tests and operational procedures.

## Classify candidates
- Shared candidate: general-purpose, project-independent, legally reusable and useful beyond this project.
- Project-local: domain rules, product-specific workflows, customer data, proprietary logic, secrets, environment config or tightly coupled code.
- Do not extract: copied code with unclear license/provenance, insecure or unmaintained dependencies, unverified examples, credentials or personal data.

## Required asset metadata
Purpose and intended use; API and example; dependencies and versions; license and provenance; compatibility; accessibility/performance/security considerations; tests and status; maintainer and update policy.

## Validation
Extract only what stands alone. Remove project-specific names, endpoints, keys and assumptions. Add automated tests and runnable examples. Verify docs against behavior. Check dependency health and licensing. Update catalogue and changelog. Version assets when consumers depend on them.

If nothing is reusable, record why. Do not manufacture abstractions to satisfy a quota.

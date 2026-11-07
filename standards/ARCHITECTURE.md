# Architecture Standard

## Discover constraints
Record users, functional needs, data sensitivity, traffic, latency, availability, deployment environment, team skills, budget, accessibility, integrations and regulatory obligations.

## Architecture workflow
1. Map system context, users, external systems, trust boundaries and data flows.
2. Identify quality attributes: security, reliability, performance, accessibility, maintainability, scalability, cost and portability.
3. Compare a small number of viable options against explicit criteria.
4. Choose the simplest option that meets requirements.
5. Record consequential choices as architecture decision records (ADRs).
6. Prototype risky assumptions.
7. Revisit decisions when evidence changes.

## Common logical layers
- Experience: pages, components, design system, routing, forms and accessibility.
- Application: use cases, orchestration, validation and authorization.
- Domain: business rules and invariants.
- Data: persistence, migrations, caching and retention.
- Integrations: identity, payments, email, analytics and external APIs.
- Platform: hosting, CI/CD, secrets, observability, backups and infrastructure.

A small app may combine layers. Keep boundaries where they reduce coupling or make testing safer.

## Design rules
Define API contracts and error semantics. Validate at trust boundaries. Enforce authorization server-side. Use database constraints for important invariants. Plan safe schema evolution. Keep persistence details out of UI components. Implement loading, empty, success, error, offline and denied states. Document data ownership, retention, deletion and export.

Create ADRs for stack, database, authentication, hosting, tenancy, major dependencies and migrations. Use templates/ADR.md.

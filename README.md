# Website Development Ecosystem

A reusable playbook and learning system for planning, designing, building, testing, securing, shipping, operating, and improving software products.

## Start here
1. Read [standards/ENGINEERING-CHARTER.md](standards/ENGINEERING-CHARTER.md).
2. Apply the cross-project [Shared Engineering Standard](standards/ENGINEERING-STANDARD.md).
3. Follow [workflows/PROJECT-LIFECYCLE.md](workflows/PROJECT-LIFECYCLE.md) for each project.
4. Use [workflows/CHANGE-DELIVERY.md](workflows/CHANGE-DELIVERY.md) for significant changes.
5. Complete [templates/PROJECT-INTAKE.md](templates/PROJECT-INTAKE.md).
6. Select a quality profile in [quality/QUALITY-GATES.md](quality/QUALITY-GATES.md).
7. Follow [learning/ROADMAP.md](learning/ROADMAP.md) and [learning/COURSE-CATALOGUE.md](learning/COURSE-CATALOGUE.md).
8. Complete [workflows/PROJECT-CLOSEOUT.md](workflows/PROJECT-CLOSEOUT.md) at project close.

## Repository map
- standards/: engineering, architecture, security, privacy, accessibility, performance and shared operating standards.
- workflows/: project lifecycle, change delivery, contribution, incident response and reuse-first closeout.
- learning/: beginner-to-advanced competency roadmap and curated courses.
- quality/: risk-based testing and release gates.
- templates/: intake, change plan, ADR, threat model, independent review, lessons learned, PR and closeout.
- catalogue/: reusable asset register.
- scripts/ and tests/: toolkit integrity checks and their automated tests.

## Default lifecycle
Discover → define → design → architect → plan → implement → review → test → secure → release → observe → improve → close out and contribute reusable assets.

## Principles
User needs and evidence first. Accessible, private and secure by design. Small reviewable changes. Reproducible builds. Test user-visible behavior. Measure performance on real devices. Backups and rollback are part of production readiness. Reuse proven assets. Document provenance, licensing, compatibility and test status. Treat AI-generated code as untrusted until reviewed and tested.

This is a flexible playbook, not a mandatory stack. Preserve a project's sound existing architecture unless evidence justifies change. Scale controls to risk and record exceptions.

# End-to-End Project Lifecycle

## 0. Intake
Complete templates/PROJECT-INTAKE.md. Identify product owner, users, problem, outcomes, constraints, data sensitivity, budget and deadline.

## 1. Discovery
Interview or observe representative users. Map journeys, pain points and alternatives. Research existing products and patterns. Separate facts, assumptions, risks and questions. Define measurable outcomes and non-goals.
**Gate:** problem, users, evidence, success metrics, scope and risks are agreed.

## 2. Requirements and planning
Write user stories and testable acceptance criteria. Prioritize must/should/could/won't. Map edge cases. Plan content, analytics, privacy, support and operations. Break work into reviewable vertical slices.
**Gate:** scope is achievable; dependencies and owners are known.

## 3. UX and visual design
Create information architecture, flows, wireframes, responsive layouts, content hierarchy, design tokens and reusable components. Design empty/loading/error/offline states. Validate critical journeys and accessibility.
**Gate:** users can complete key tasks in the prototype.

## 4. Architecture
Map context, data flows and trust boundaries. Choose stack and hosting with trade-offs. Define data model, API contracts, auth, roles and integrations. Threat-model risks. Plan privacy, backups and recovery. Record ADRs.
**Gate:** high-risk assumptions are tested; architecture is proportionate.

## 5. Implementation
Establish repo, environments, CI, formatting, linting and type checks. Build a thin end-to-end slice first. Keep boundaries clear. Use migrations. Review dependencies and licenses. Add tests with behavior. Keep docs current.

## 6. Verification
Use unit, integration, contract, end-to-end, visual, accessibility, security, performance, compatibility and exploratory tests as appropriate. Test mobile, keyboard, slow network, failures and permissions. Real backend behavior must be tested; mocks alone are not proof.
**Gate:** release blockers pass; accepted risks have owners.

## 7. Release
Confirm config and secrets. Back up critical data. Apply reversible migrations. Deploy to staging, smoke-test, then production. Use staged rollout where useful. Verify health, journeys, analytics and rollback readiness.

## 8. Operate and improve
Monitor journeys, errors, latency, uptime and cost. Triage feedback/incidents. Patch dependencies and rotate credentials. Review outcomes. Maintain runbooks and recovery evidence.

## 9. Closeout
Use workflows/PROJECT-CLOSEOUT.md to extract genuinely reusable assets, add tests/examples, update the catalogue and record lessons.

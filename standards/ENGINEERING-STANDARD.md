# Shared Engineering Standard v1.0

**Status:** Initial implementation  
**Applies to:** All owned software projects and shared engineering assets  
**Reference inspiration:** [Clouds Against Humanity](https://github.com/ChiefGyk3D/Clouds-Against-Humanity), especially its documented planning, threat modelling, CI/CD separation, cost controls and lessons learned.

This standard extends the existing [Engineering Charter](ENGINEERING-CHARTER.md) and [Quality Gates](../quality/QUALITY-GATES.md). It does not replace project-specific architecture, existing sound practices or risk-based quality profiles.

## 1. Core operating principles

1. Evidence over assumptions. Label facts, assumptions, proposals and unknowns.
2. Small, reviewable and reversible changes.
3. Define observable acceptance criteria before implementation.
4. Verify end behaviour, not merely successful commands or builds.
5. Keep untrusted changes and CI separate from privileged deployment.
6. Use least privilege for agents, workflows, services and people.
7. Scale process to risk; avoid ceremony without a quality benefit.
8. Record failures, root causes, fixes and regression protection.
9. Reuse only components whose provenance, licence, compatibility and tests are known.
10. Preserve human authority over consequential, irreversible and financial decisions.

## 2. Definition of ready

A change is ready for implementation when it has:
- A problem statement and intended user or system outcome.
- Scope and explicit non-goals.
- Testable acceptance criteria.
- Known dependencies, constraints and assumptions.
- A risk classification and proportionate verification plan.
- An owner and a clear approval gate where required.

If these are unknown, the work remains discovery or a question; do not silently invent answers.

## 3. Change delivery lifecycle

Research → specify → assess risk → plan → implement on an isolated branch → run checks → independent review where warranted → correct findings → human approval → merge → verify delivered behaviour → document.

Use the detailed [Change Delivery Workflow](../workflows/CHANGE-DELIVERY.md).

## 4. Definition of done

A change is complete only when:
- Acceptance criteria are demonstrated.
- Relevant automated tests pass, including regression coverage for fixed defects.
- Tests cover meaningful failure and boundary cases.
- Build, lint, type and configuration checks pass where applicable.
- Security, privacy, accessibility, performance and operational impacts are considered at the appropriate risk level.
- Documentation and examples reflect actual behaviour.
- Deployment, migration, backup and rollback implications are addressed where applicable.
- Verification evidence and remaining limitations are recorded.
- Required independent and human reviews are complete.

A green CI run is evidence about the checks that ran; it is not proof of untested behaviour.

## 5. Verification layers

Choose what applies to the product:
- Static: formatting, lint, type/config validation, dependency and secret checks.
- Unit: deterministic business rules and pure logic.
- Integration: database, filesystem, APIs, services and permissions.
- End-to-end: critical user journeys on representative environments.
- Device/platform: real target hardware, browser, OS or runtime.
- Human acceptance: usability, visual quality and product completeness.
- Operational: deployment, observability, restore and rollback exercises.

Mocks are useful but do not substitute for testing critical real integrations. State what was not tested.

## 6. Independent review

For security-sensitive, data-sensitive, financial, infrastructure, permission, migration or otherwise high-impact changes, use a reviewer independent of the implementation where feasible.

The reviewer should:
- Read the requirements and diff independently.
- Challenge assumptions and threat boundaries.
- Probe failure modes, misuse and rollback.
- Check whether tests would catch the defect.
- Separate confirmed defects from questions and preferences.

Use [Independent Review Template](../templates/INDEPENDENT-REVIEW.md). Do not describe an AI review as independent if it merely restates the implementer's explanation.

## 7. Security, safety and risk

Identify important assets, actors, trust boundaries, abuse cases, mitigations, verification and residual risk. Apply least privilege. Keep credentials out of source, logs and untrusted CI. Pin third-party workflow actions to immutable commit SHAs where practical. Review dependency provenance and licences.

Record accepted risks with rationale, approver and review trigger. Reassess when users, data, integrations, deployment exposure or threat conditions change.

## 8. CI and release boundaries

Pull-request CI should validate proposed code without production credentials or authority to mutate production systems. Deployment should be a separate, narrowly permissioned stage. Require human confirmation for consequential or irreversible production actions unless a separately approved policy explicitly allows automation.

A required aggregate check should fail if a required job fails, is cancelled or is unexpectedly skipped. Do not keep checks that are known to fail by design; fix their trigger or report the limitation accurately.

## 9. Planning and failure management

Break milestones into small tasks with an owner, dependencies, acceptance criteria and verification. Track blocked work explicitly. Keep a known-issues list. For significant failures, complete the [Lessons-Learned Template](../templates/LESSONS-LEARNED.md) and add regression protection.

## 10. Cost and resource controls

Before introducing paid services, cloud resources, API usage or recurring dependencies, document expected cost, free-tier limits, usage drivers, alternatives and a stop/approval threshold. Do not incur new paid or irreversible expenditure without explicit human approval.

## 11. Project-specific verification

- Games: gameplay loops, physics/collisions, save/load, input, performance and target-device builds.
- Web/PWA: authentication, authorization, tenant isolation, mobile/browser behaviour, persistence and accessibility.
- Financial/trading systems: decimal correctness, instrument-specific calculations, risk limits, execution failure handling and auditability; never infer profitability from passing tests.
- AI/agent systems: tool permissions, prompt-injection boundaries, data isolation, approval gates, audit logs, retries and failure containment.
- Data systems: schema evolution, integrity, access controls, backup and restore.

These are examples, not exhaustive checklists. Use the project's actual threat model and quality profile.

## 12. Shared ecosystem contribution

At milestones and closeout, evaluate reusable components using [Reuse-First Project Closeout](../workflows/PROJECT-CLOSEOUT.md). Extract only project-independent assets. Record purpose, API, dependencies, provenance/licence, compatibility, accessibility/security/performance considerations, tests, maintainer and update policy.

## 13. Human authority

Agents may research, plan, implement and test within granted permissions. Human approval remains required for major architectural changes, financial commitments, security-sensitive exceptions, irreversible operations, production releases and final acceptance of significant milestones.

## 14. Exceptions and evolution

Document exceptions, rationale, owner and expiry/review date. Review this standard after meaningful incidents, ecosystem-wide lessons or changes in project types. Prefer evidence-backed amendments over adding process by default.

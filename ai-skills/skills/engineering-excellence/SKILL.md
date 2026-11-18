---
name: engineering-excellence
description: Apply senior-engineer workflows for requirements, specs, architecture, TDD, domain modeling, surgical implementation, code review and release readiness.
---

# Engineering Excellence

## Use when
Building or changing software, reviewing a PR, debugging, planning a feature, refactoring, or converting an idea into implementable work.

## Workflow
1. **Clarify the outcome**: identify user value, acceptance criteria, constraints, non-goals, affected surfaces and failure modes. Ask only for missing facts that block safe progress.
2. **Inspect before changing**: read the repository instructions, architecture, package scripts, tests, current diff and relevant call paths. Search for existing patterns before adding dependencies or abstractions.
3. **Model the domain**: name entities, invariants, state transitions, ownership boundaries and error cases. Keep business rules separate from transport/UI details.
4. **Specify and plan**: write a concise spec, break it into small ordered tickets, identify dependencies and verification steps. For risky work, record an ADR and rollback plan.
5. **Test-first where useful**: add or update focused tests for expected behavior and regressions. Use TDD when the behavior can be specified; do not force it for exploratory spikes.
6. **Implement surgically**: make the smallest coherent change. Preserve working architecture and public contracts unless change is justified. Avoid speculative abstractions and unrelated cleanup.
7. **Review like a senior engineer**: inspect the diff for correctness, security, privacy, data integrity, performance, accessibility, observability and maintainability. Explicitly state skipped checks.
8. **Verify**: run relevant tests, lint, typecheck and build where available. Report exact commands/results and remaining risks.

## Output contract
Provide: problem statement, assumptions, plan, changed files/areas, tests and results, risks, and next action. Distinguish completed work from recommendations. Never claim tests passed unless they ran.

## Reference ecosystem (user-supplied; verify before adoption)
- Matt Pocock skills: https://github.com/mattpocock/skills
- Everything Claude Code: https://github.com/affaan-m/ECC
- Andrej Karpathy skills: https://github.com/multica-ai/andrej-karpathy-skills
- Ponytail: https://github.com/DietrichGebert/ponytail
- Addy Osmani Agent Skills: https://github.com/addyosmani/agent-skills
- BMAD Method: https://github.com/bmad-code-org/BMAD-METHOD

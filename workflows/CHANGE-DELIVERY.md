# Change Delivery Workflow

Use this workflow for features, fixes, infrastructure changes and reusable assets. Scale the depth of each step to the project's [Quality Gates](../quality/QUALITY-GATES.md).

## 1. Research and define
- State the problem, affected users/systems and desired outcome.
- Inspect the existing implementation and relevant documentation.
- Separate verified facts, assumptions, proposals and unknowns.
- Define scope, non-goals and measurable acceptance criteria.

## 2. Risk and plan
- Identify data, security, privacy, cost, reliability and compatibility risks.
- Identify dependencies and affected components.
- Decide what must be tested and on which real target.
- Break the work into reviewable tasks.
- Record any required human approval before implementation.

## 3. Implement
- Work on an isolated branch.
- Prefer the smallest complete vertical slice.
- Keep tests with the behaviour they verify.
- Avoid unrelated refactors.
- Do not expose secrets to pull-request code or logs.

## 4. Verify
- Run formatting, lint, type/config and build checks where applicable.
- Run relevant unit and integration tests.
- Run regression tests for known defects.
- Exercise failure, boundary, permission and recovery paths.
- Test the actual target environment for platform-specific behaviour.
- Record commands/results and clearly mark unverified areas.

## 5. Review
- Compare the diff with the acceptance criteria.
- Use independent adversarial review for high-impact changes.
- Classify findings: blocker, high, medium, low, question or suggestion.
- Fix confirmed defects and rerun affected tests.
- Do not waive a blocker silently; document an approved exception.

## 6. Merge and deliver
- Require passing checks and human review according to project policy.
- Keep deployment credentials out of ordinary CI.
- Review migrations, data changes, cost and rollback before release.
- Obtain explicit human approval for consequential or irreversible actions.
- Deploy or install, then verify actual behaviour.

## 7. Close the loop
- Update project status, documentation and known issues.
- Record what was tested and what remains unverified.
- Add a lessons-learned entry for significant failures.
- Evaluate reusable assets using the project closeout workflow.

## Change record (minimum)
**Why:**  
**What changed:**  
**Acceptance criteria:**  
**Risk:**  
**Tests and evidence:**  
**Not verified:**  
**Reviewer:**  
**Release/rollback:**  
**Approval:**  

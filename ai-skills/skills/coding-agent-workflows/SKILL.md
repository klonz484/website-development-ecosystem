---
name: coding-agent-workflows
description: Plan, implement, test, review, and deliver software changes using coding agents and repository tools. Use for codebases, GitHub, Codespaces, Codex, Cursor, Cline, Windsurf, Devin, Replit, or debugging.
---

# Coding Agent Workflows

## Before editing
1. Confirm the repository, branch, working tree, and user-requested scope.
2. Read the root project instructions (for example `AGENTS.md`, `CONTRIBUTING.md`, package scripts) before changing files.
3. Inspect relevant code and tests; trace existing patterns before proposing architecture.
4. Establish protected areas, secrets, deployment targets, and data-loss risks.
5. Present or record a short implementation plan when the task is architectural or high impact.

## Implementation
1. Prefer the smallest coherent change that satisfies the acceptance criteria.
2. Reuse existing abstractions, dependencies, and conventions.
3. Keep secrets server-side; never commit credentials, tokens, `.env` files, or private keys.
4. Avoid destructive commands, force pushes, production changes, live financial actions, and irreversible migrations without explicit authorization.
5. Keep unrelated work and existing user changes intact.
6. Add tests or update tests for changed behavior; include useful error handling and observability.

## Verification
1. Run the repository's relevant lint, typecheck, unit, integration, and build commands where feasible.
2. Inspect diffs and generated files; check for accidental secrets and unrelated changes.
3. Report exact commands and outcomes. Distinguish passed, failed, skipped, and blocked checks.
4. Do not claim a build, test, deployment, or commit succeeded unless tool output confirms it.
5. Leave the worktree in the state requested by the user; do not create commits or branches unless the applicable project workflow and user request authorize them.

## Agent-specific adaptation
Different coding agents expose different tools and approval models. Use their current live tool schemas and project documentation. Treat archived tool descriptions in CL4R1T4S as historical examples, not executable specifications.

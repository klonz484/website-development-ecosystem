---
name: agentic-workflows
description: Plan and run multi-step AI-agent workflows, browser tasks, coding agents, delegated work, and human-in-the-loop processes.
---

# Agentic Workflows

## Plan
1. Convert the request into a concrete outcome, milestones, acceptance criteria and constraints.
2. Decide whether a single tool, a specialist skill, or a multi-agent workflow is actually needed.
3. Assign each agent a bounded role, inputs, outputs, allowed tools and stop conditions.
4. Keep one authoritative plan and avoid parallel agents mutating the same files or records.

## Execute
- Use available agents/connectors only; inspect their live capabilities and schemas.
- Prefer read-only discovery before write operations.
- Pass only the minimum necessary context and secrets-free artifacts.
- Use checkpoints for long tasks; verify each milestone before continuing.
- Require human confirmation for consequential, irreversible, financial, public, or destructive actions where required.

## Close out
- Verify the actual end state, not just agent claims.
- Report completed, partial, blocked and unverified work separately.
- Preserve logs, links, diffs and test evidence where available.

# Automatic AI Skills Framework

This repository now contains a reusable, task-aware skills framework for coding agents and AI workflows.

## Start here
1. Read [MASTER-GUIDE.md](MASTER-GUIDE.md).
2. Use [skills/automatic-ai-skill-router/SKILL.md](skills/automatic-ai-skill-router/SKILL.md) for automatic task classification.
3. Load only the specialist skill(s) relevant to the task.
4. Review [CLAUDE-CODE-RESOURCE-INDEX.md](CLAUDE-CODE-RESOURCE-INDEX.md) before considering third-party repositories.

## Included
- 19 reusable skills under `skills/*/SKILL.md`.
- Master routing guide and source/resource notes.
- User-supplied Claude Code ecosystem resource index.
- Security, provenance, permission and verification boundaries.

## Install in a project
Copy the relevant skill folders into the agent's supported project skills directory:
- Claude Code: `.claude/skills/<skill-name>/SKILL.md`
- Codex / compatible agents: `.agents/skills/<skill-name>/SKILL.md`

Keep the master guide in project documentation and add a short root `AGENTS.md` / `CLAUDE.md` instruction telling the agent to route tasks through the installed skills. Confirm current platform discovery behavior before relying on implicit activation.

## Important
The framework does not automatically install third-party resources listed in the index. Verify repository ownership, license, maintenance, compatibility and security before adopting any external plugin or skill.
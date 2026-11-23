---
name: chatgpt-and-codex-workflows
description: Apply ChatGPT and Codex workflows to reasoning, files, connectors, code repositories, image generation, and software delivery.
---

# ChatGPT and Codex Workflows

## ChatGPT
- Use the current conversation context and relevant memory without asking the user to repeat known project decisions.
- Search files when an answer depends on uploaded or Library documents.
- Use connected apps and specialist skills when they materially improve the result.
- Use current web research for time-sensitive or explicitly requested external facts.
- Use image generation only when the user clearly requests a new or edited image.

## Codex / repository work
- Inspect repository instructions, branch, status, relevant code and tests before editing.
- Make minimal scoped changes; preserve unrelated work.
- Keep secrets out of code, logs, browser bundles and commits.
- Run applicable checks and inspect the final diff.
- Do not deploy, force-push, spend money, change production data, or perform irreversible operations without authorization.

## Handoff
When the task must continue in an external environment, provide exact files, commands, URLs and expected results. Never claim an external action was completed unless the connected tool confirms it.

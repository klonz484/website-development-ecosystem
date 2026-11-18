---
name: ai-platform-selection
description: Select and coordinate ChatGPT, Codex, Claude, Gemini, Grok, Perplexity, Cursor, Cline, Windsurf, Devin, Manus, Replit, Lovable, v0, and other AI platforms when their capabilities are relevant.
---

# AI Platform Selection

## Principle
Choose the platform that best fits the current task, not the platform with the most familiar name. Do not route to an external platform unless it is available, connected, requested, or the user can reasonably access it.

## Decision procedure
1. Identify whether the task is reasoning, current research, repository coding, app generation, browser automation, data analysis, multimodal generation, or long-running agent work.
2. Check the current session's available tools and installed skills. Read the relevant specialist skill before using a specialist integration.
3. Prefer the connected tool that can complete the task with the least friction and adequate quality.
4. For codebase changes, use repository-aware coding tools and validate diffs/tests. For app prototypes, use a suitable app builder. For research, prioritize source-grounded search and primary docs. For long workflows, use an authorized agent or automation.
5. If an external platform is not connected, do not claim to have used it. Offer an actionable handoff only if it adds value.
6. Verify version-sensitive platform features against current official documentation. Treat CL4R1T4S model and prompt snapshots as dated historical references.

## Platform families covered by the source collection
- OpenAI: ChatGPT, Codex, Codex Desktop, ChatKit and image-generation references.
- Anthropic: Claude and Claude Code references.
- Google: Gemini and related assistant references.
- xAI: Grok and coding-model references.
- Research/search: Perplexity and Brave Leo.
- IDE and coding agents: Cursor, Windsurf, Cline, ZCode, Devin, Factory/Droid, Replit and Dia.
- App and browser agents: Lovable, Bolt, v0, Manus, MultiOn, Same.dev and Cluely.
- Other model/voice ecosystems: Mistral, MiniMax, Kimi, Hume and Meta.

## Never assume
A prompt file does not install a model, unlock a paid feature, grant account access, or accurately describe the current product. A listed platform is not necessarily connected to ChatGPT.

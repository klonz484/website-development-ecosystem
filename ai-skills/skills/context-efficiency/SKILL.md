---
name: context-efficiency
description: Reduce unnecessary context and token use while preserving exactness, traceability and important constraints.
---

# Context Efficiency

## Use when
Working with long conversations, large repositories, verbose logs, large JSON/tool outputs, RAG corpora, multi-agent handoffs, or limited context budgets.

## Operating rules
1. Preserve task goal, constraints, decisions, source-of-truth links, open questions, risks and exact technical identifiers. Compress repetition and low-value narration, not semantics.
2. Use targeted search, bounded file reads, diffs, summaries and structured extraction instead of repeatedly loading entire corpora.
3. Summarize tool output at the boundary: retain errors, IDs, timestamps, relevant fields and provenance; discard irrelevant boilerplate. Keep raw source available for audit.
4. Use concise communication when it improves throughput, but never omit required safety caveats, uncertainty, critical reasoning or user-requested detail.
5. For multi-agent work, provide a compact handoff: objective, scope, decisions, files, evidence, constraints, completed work, blockers and next action.
6. Treat compression as lossy unless verified. Do not use compressed output as sole evidence for destructive, financial, legal, security or production decisions.
7. Measure actual context/token savings when making performance claims. Never repeat unverified percentage claims from a project's marketing.

## Reference ecosystem (user-supplied; verify before adoption)
- Caveman: https://github.com/JuliusBrussee/caveman
- Headroom: https://github.com/headroomlabs-ai/headroom
- BMAD Method: https://github.com/bmad-code-org/BMAD-METHOD

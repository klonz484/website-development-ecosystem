---
name: ai-evaluation-and-quality
description: Evaluate model outputs, prompts, agents, retrieval systems and AI workflows for correctness, robustness, safety and usefulness.
---

# AI Evaluation and Quality

## Evaluation design
1. Define the intended user task and failure costs.
2. Build representative test cases: common, boundary, ambiguous, adversarial and regression cases.
3. Define measurable criteria: factual accuracy, task completion, constraint adherence, grounding, latency, cost, privacy and safe tool use.
4. Use a fixed test set for comparisons; separate development examples from held-out evaluation.
5. Compare outputs against trusted references or human review, not model confidence alone.
6. Record model/provider/version, prompt version, tool configuration, date and test conditions.
7. Track regressions and rerun tests after prompt, model, data or integration changes.

## Agent-specific checks
- Tool selection and correct argument construction
- Permission and confirmation boundaries
- Recovery from timeouts, malformed data and tool errors
- Resistance to prompt injection in files and retrieved pages
- Correct distinction between intended, attempted and completed actions
- Auditability and reproducibility

## Reporting
Show sample size, methodology, known limitations and failure examples. Avoid unsupported claims such as 'hallucination-free' or 'fully autonomous'.

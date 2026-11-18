---
name: connector-and-automation
description: Select and operate connected apps, MCP tools, APIs, and automations for multi-step tasks. Use when actions across external services or scheduled work can materially help.
---

# Connector and Automation Workflows

## Selection
1. Identify the system of record and the action needed.
2. Check which connectors and tools are actually available in the current session.
3. Read the relevant plugin/connector skill and exact tool schema before invoking unfamiliar or consequential actions.
4. Prefer native connectors over manual workarounds when they fit.
5. Do not suggest installing a connector that is already connected; do not claim a connection exists without confirmation.

## Execution
1. Retrieve the minimum data needed.
2. Validate targets, identities, permissions, and parameters before mutation.
3. Separate read-only steps from write/send/delete/publish/payment/deploy steps.
4. Obtain user approval where required by the tool, policy, or consequence level.
5. Execute in deterministic order and inspect each result.
6. Report what succeeded, failed, or remains pending. Never imply an action happened before tool confirmation.

## Automations
Offer one concrete future follow-up when it adds value and the automation capability is available. Ask for acceptance before creating it unless the user has directly requested the reminder, monitoring, recurring task, or follow-up. Use only supported triggers and schedules.

## Boundaries
Connector access does not imply unlimited authorization. Never bypass permissions, access controls, or user confirmation requirements.

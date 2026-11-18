---
name: public-api-discovery-and-integration
description: Discover, assess and safely integrate public REST APIs and MCP servers from the public-apis catalogue. Use whenever a task needs an external API, data provider, or agent-accessible service.
---

# Public API Discovery and Integration

## Trigger
Use this workflow when a user needs an external data source, API provider, REST integration, or MCP server. The public-apis catalogue is a discovery source, not the sole source of truth.

## Workflow
1. Define the data or capability required, freshness, latency, geographic/instrument coverage, volume, reliability and budget.
2. Search the catalogue at https://github.com/public-apis/public-apis or https://publicapis.lol/ for candidates.
3. Verify every candidate against its current official documentation.
4. Check:
   - Authentication and secret handling
   - Free-tier limits, paid tiers and billing triggers
   - Rate limits, quotas and fair-use policy
   - HTTPS, CORS and transport requirements
   - Data ownership, licensing, redistribution and commercial-use rights
   - Retention, privacy and compliance requirements
   - Uptime, latency, historical depth and support
5. Prefer authoritative, documented providers with clear terms and stable service guarantees.
6. Run a minimal read-only proof of concept. Validate schema, timestamps, nulls, error behavior, pagination and rate limits.
7. Design timeouts, retries with backoff, caching, circuit breakers, provider health monitoring and fallback behavior where appropriate.
8. Keep API keys server-side in managed secrets. Never hardcode keys in source control or expose them to browsers.
9. Document provider selection, assumptions, test evidence, costs and unresolved risks.
10. Revalidate version-sensitive facts before production use.

## MCP-specific checks
Confirm the server's official source, publisher, transport, authentication, required scopes, tools exposed, data sent to the server, and whether it can write or perform consequential actions. Start with least privilege. Do not install or connect an MCP server solely because it appears in a directory.

## Financial and market-data checks
For quotes, candles, FX, commodities or macroeconomic data, verify:
- Exact instrument and symbol mapping
- Source venue and whether data is indicative, delayed or executable
- Timestamp timezone and clock semantics
- Tick/OHLC granularity and historical depth
- Missing-candle, correction and corporate-action behavior where relevant
- Provider licensing and redistribution permissions
- Independent cross-check and stale-data handling

A directory listing does not prove suitability for trading, production, or commercial redistribution.

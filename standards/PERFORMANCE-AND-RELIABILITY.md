# Performance, Reliability and Operations

## Core Web Vitals
Good thresholds at the 75th percentile: LCP ≤ 2.5 seconds, INP ≤ 200 milliseconds, CLS ≤ 0.1. Measure mobile and desktop separately. Use field data for real-world experience and lab data for diagnosis.

## Engineering practices
Set page and API performance budgets. Optimize images, fonts, scripts, caching, compression and critical rendering. Avoid unnecessary JavaScript and dependencies. Lazy-load below-the-fold media and reserve dimensions to prevent layout shifts. Test low-end phones and constrained networks. Set timeouts, bounded retries with backoff, idempotency and graceful degradation. Define availability and recovery objectives for critical services. Monitor latency, traffic, errors, saturation, key journeys and dependency health. Alert on actionable symptoms. Maintain runbooks. Test backup restoration and disaster recovery.

## Observability
Use structured logs, metrics and traces with correlation IDs. OpenTelemetry is a vendor-neutral option. Minimize collected data; redact secrets and personal information. Define ownership, retention, access and alert routing.

## Incident learning
Prioritize user impact, communicate clearly, restore service safely and write blameless postmortems with assigned follow-up actions.

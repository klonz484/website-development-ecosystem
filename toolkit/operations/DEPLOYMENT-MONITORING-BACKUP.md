# Deployment, Monitoring and Backup Patterns

## Deployment readiness
- Reproducible build and locked dependencies.
- Environment-specific configuration; secrets outside source control.
- Staging smoke tests and production health checks.
- Database migrations are backward-compatible or have an explicit coordinated release.
- Rollback and feature-disable plan.
- Named owner and support route.

## Monitoring
Track availability, latency, error rate, saturation, critical user journeys and external dependencies. Add structured logs, metrics and traces where useful. Alert on actionable symptoms and document runbooks. Avoid personal data and credentials in telemetry. OpenTelemetry: https://opentelemetry.io/docs/

## Backups
Define RPO/RTO based on business impact. Confirm automated backup scope, retention, encryption and access controls. Test restoration into an isolated environment on a schedule. A successful backup job is not proof that restore works. Document owner, last restore test and gaps.

## Incident response
Detect → assess → contain → investigate → recover → communicate → postmortem → verify corrective actions. Keep reports blameless and factual.

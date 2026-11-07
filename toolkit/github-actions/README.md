# CI/CD workflow patterns

## Pull request checks
Run dependency install from a committed lockfile, lint, typecheck, unit/integration tests, build and targeted E2E. Keep permissions read-only by default. Pin third-party actions to verified full commit SHAs. Use concurrency cancellation for superseded PR runs. Do not expose deployment secrets to untrusted fork pull requests.

## Deployment
Separate preview/staging/production environments. Require approvals for production secrets where appropriate. Build once and promote the same artifact. Use least-privilege deploy credentials, health checks, smoke tests and documented rollback. Keep secrets in GitHub Environments or the hosting provider's secret manager.

## Template note
The workflow in this folder is an example; update runtime, package manager, lockfile command, action SHAs and deployment target to match the consuming project. Review GitHub's secure use guidance: https://docs.github.com/en/actions/reference/security/secure-use

# Security and Privacy Standard

Use risk-based controls informed by OWASP ASVS 5.0 and NIST SSDF. This baseline is not a certification claim.

## Secure development
- Threat-model assets, actors, trust boundaries, data flows and abuse cases.
- Use supported runtimes and patch exploitable dependencies.
- Keep secrets in managed secret storage; rotate exposed credentials.
- Apply least privilege to users, services, CI jobs, database roles and tokens.
- Enforce server-side authorization on every protected operation.
- Use trusted identity providers and safe session/account recovery practices.
- Validate inputs; encode output by context; parameterize database queries.
- Protect against XSS, CSRF, injection, SSRF, IDOR, path traversal and denial of service as relevant.
- Set suitable TLS, cookie flags, CSP, CORS, security headers and rate limits.
- Minimize personal data; define purpose, retention, deletion, export and access.
- Redact secrets and personal data from logs.
- Back up critical data and test restoration.
- Review third-party scripts, SDKs, AI providers and data processors.

## Supply-chain and CI security
Pin GitHub Actions to verified full commit SHAs or use an approved lockfile policy. Set minimal workflow permissions. Never expose write-capable secrets to untrusted pull-request code. Use lockfiles and reproducible installs. Scan dependencies and secrets. Protect release credentials. Treat AI-generated code and package suggestions as untrusted.

## Privacy
Document data categories, purpose, lawful basis where applicable, consent, processors, cross-border transfers, retention, deletion and breach obligations. For South African projects, assess POPIA applicability with qualified advice; a checklist is not legal compliance.

## Release verification
Test authentication, authorization, user/tenant isolation, input validation, abuse limits, session handling and recovery. Review dependencies, secrets, headers, cookies, backups and threat-model risks.

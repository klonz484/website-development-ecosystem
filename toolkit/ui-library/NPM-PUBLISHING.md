# npm publication runbook

## Current state

The package is prepared for a public npm release, but it is not published yet. Its current package name is `@website-development-ecosystem/ui`. That scope must belong to an npm user or organization controlled by the maintainers before the first publish. Do not create a public release tag until the scope and package ownership are confirmed.

## One-time maintainer setup

1. Sign in to the npm account that will own this project. If `@website-development-ecosystem` is intended as an organization scope, create that organization on npmjs.com or obtain an invitation with package-publishing permissions. If it is intended as a personal scope, the signed-in npm username must be exactly `website-development-ecosystem`. Do not infer ownership from the GitHub repository name.\n2. Confirm in npmjs.com → Organizations / account settings that the signed-in account is an owner or has publish permission for `@website-development-ecosystem`, and enable two-factor authentication.
3. Confirm `@website-development-ecosystem/ui` is not already owned by another publisher and that npm permits this account to publish under the scope.
4. Ensure `toolkit/ui-library/package-lock.json` exists and that `npm ci`, typecheck, semantic contrast checks, unit tests and build pass.
5. For the first publication only, sign in from a trusted maintainer environment with `npm login --auth-type=web`, then publish version 0.1.0 with `npm publish --access public`. Follow npm's 2FA prompts. Do not put an npm token in the repository or commit an .npmrc containing credentials.
6. After the package exists on npm, open its npmjs.com package settings → Trusted Publisher → GitHub Actions and configure:
   - GitHub user/organization: `klonz484`
   - Repository: `website-development-ecosystem`
   - Workflow filename: `publish-ui-library.yml`
   - Environment name: leave blank (no GitHub Environment is configured in this workflow)
   - Allow direct `npm publish` for this publisher.
7. Verify the trusted publisher settings carefully. npm validates the relationship on the first successful workflow publish, and a new configuration must complete that first publish within two days.

## Ownership confirmation record\n\nRecord the npm organization or user name, the account that owns it, and the package maintainers in a private maintainer record. Never commit npm passwords, recovery codes, OTP seeds or access tokens. This repository cannot verify the signed-in npm account or organization membership; that check must be completed in the npm website by an authorized maintainer.\n\n## Subsequent releases

1. Update the package version in `package.json` and add release notes to `CHANGELOG.md`.
2. Merge the release change to `main` after all checks pass.
3. Create and push an annotated tag matching the package version, e.g. `ui-v0.1.1`.
4. GitHub Actions verifies the tag matches the package version, installs from the lockfile, runs typecheck/tests/build, checks the package contents with `npm pack --dry-run`, then publishes using npm OIDC trusted publishing.
5. Confirm the npm package page, provenance attestation and installed package contents after publication.

## Security

- Publishing uses GitHub OIDC; no long-lived npm write token is stored in GitHub Secrets.
- The workflow grants only `contents: read` and `id-token: write`.
- Keep the GitHub repository public for npm provenance generation.
- Restrict package publishing access to trusted publishers after OIDC is working; consider requiring 2FA and disallowing token-based publishing.
- Never publish Supabase credentials, student data, project secrets or application-specific business logic.

# Security and release checklist

- [ ] Review every dependency and its license; runtime dependencies are intentionally limited to React peer dependencies.
- [ ] Confirm React/React DOM versions in the consumer.
- [ ] Run typecheck, unit tests and production build.
- [ ] Test native dialog, Escape, focus restoration and screen-reader naming in supported browsers.
- [ ] Test at mobile width, keyboard-only and 200% zoom.
- [ ] Verify WCAG 2.2 AA text and non-text contrast after theme overrides.
- [ ] Publish only from a reviewed tag; retain package provenance and changelog.
- [ ] Keep the consumer's lockfile committed and use npm ci in its CI.
- [ ] Do not treat UI components as authorization or input-security controls; enforce permissions and validation in trusted server/database layers.

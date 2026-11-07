# UI library accessibility checklist

## Automated checks

- [x] Component unit tests verify labels, hint/error descriptions, accessible names, native semantics and state (automated unit suite; see CI).
- [x] Semantic token contrast script checks light/dark text, button, focus and border token pairs against WCAG AA thresholds (automated CI gate).
- [ ] Consumer Playwright suite runs axe-core on onboarding, navigation, forms and modal states using WCAG 2.2 AA tags.
- [ ] No serious or critical automated violations remain; every excluded rule has a written reason and owner.
- [ ] Keyboard-flow assertions cover navigation, modal entry, focus containment, Escape dismissal and focus return.
- [ ] Run automated checks against production-built output, not only a development server.

## Manual release gate — NOT YET COMPLETED\n\nAutomated checks do not establish conformance. The following checks must be performed on real devices and assistive technology and recorded below before declaring the release accessible.\n\n### Evidence log\n\n| Date | Tester | Device / OS | Browser | Assistive technology | Components / flows | Result | Issue links |\n|---|---|---|---|---|---|---|---|\n| Pending | | | | | | Not tested | |\n\n### Required manual checks — record browser, OS, assistive technology and date

- [ ] Keyboard only: Tab, Shift+Tab, Enter, Space, arrows, Escape; no traps outside modal dialogs.
- [ ] Dialog: opening focus is useful, focus stays inside, Escape/close works, and focus returns to the opener.
- [ ] Screen reader: NVDA + Firefox or Chrome on Windows.
- [ ] Screen reader: VoiceOver + Safari on iOS/macOS where available.
- [ ] Screen reader: TalkBack + Chrome on Android (test with actual Android device; record announcements and focus order).
- [ ] Zoom/reflow: 200% browser zoom and 320 CSS px viewport without loss of essential content.
- [ ] Mobile: touch targets, orientation changes, virtual keyboard, scrolling and sticky navigation.
- [ ] Contrast: normal text 4.5:1; large text 3:1; meaningful non-text controls/focus indicators 3:1, measured in each theme.
- [ ] Reduced motion: operating-system preference disables non-essential movement.
- [ ] Error handling: field errors are announced and do not rely on color alone.
- [ ] Table: caption, header associations and narrow-screen horizontal scrolling are usable.
- [ ] Record actual findings in a dated issue or release report; do not mark a test complete without performing it.

## Component requirements

- [ ] Every form control has a visible, associated label.
- [ ] Hints and errors are connected with aria-describedby; invalid state is exposed.
- [ ] Checkbox and switch descriptions are programmatically associated.
- [ ] Disabled and loading states remain understandable to assistive technology.
- [ ] Native select, checkbox, radio and switch controls retain keyboard behavior.
- [ ] Dialog has a useful accessible name, optional description, explicit close action and Escape behavior.
- [ ] Navigation uses a named nav landmark and marks the current page.
- [ ] Tables have captions, scoped column headers and an announced empty state.
- [ ] Keyboard focus is visible and not hidden by sticky content.
- [ ] Interactive targets are tested on touch screens; aim for at least 44×44 CSS px where practical.
- [ ] Reduced-motion preferences are respected.
- [ ] Re-test after any consuming application overrides the tokens or component CSS.

Axe checks are a useful automated baseline, not proof of WCAG conformance. Manual assistive-technology and usability testing remains a release requirement.
\n\n## Release decision\n\nDo not label this package WCAG 2.2 AA conformant until the evidence log contains completed keyboard, screen-reader, mobile, zoom/reflow and contrast results for supported targets, with blocking issues fixed and retested. Automated axe and token checks are partial evidence only.\n
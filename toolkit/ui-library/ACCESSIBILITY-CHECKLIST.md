# UI library accessibility checklist

- [ ] Every form control has a visible, associated label.
- [ ] Hints and errors are connected with aria-describedby; invalid state is exposed.
- [ ] Disabled and loading states remain understandable to assistive technology.
- [ ] Native select, checkbox, radio and switch controls retain keyboard behavior.
- [ ] Dialog has a useful accessible name, optional description, explicit close action and Escape behavior.
- [ ] Navigation uses a named nav landmark and marks the current page.
- [ ] Tables have captions, scoped column headers and an announced empty state.
- [ ] Keyboard focus is visible and not hidden by sticky content.
- [ ] Text and controls meet WCAG 2.2 AA contrast requirements in every theme.
- [ ] Interactive targets are tested on touch screens; aim for at least 44×44 CSS px where practical.
- [ ] Reduced-motion preferences are respected.
- [ ] Test at 320 CSS px, 200% zoom, keyboard-only and a screen reader.
- [ ] Re-test after any consuming application overrides the tokens or component CSS.

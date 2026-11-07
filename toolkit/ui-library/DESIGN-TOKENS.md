# Semantic design tokens

Import styles.css once, then override purpose-based variables rather than component selectors.

| Token | Purpose |
|---|---|
| --ui-bg | Application canvas |
| --ui-surface | Cards, dialogs and controls |
| --ui-surface-muted | Secondary surfaces and table headers |
| --ui-text | Primary text |
| --ui-text-muted | Secondary text |
| --ui-border | Control and container boundaries |
| --ui-primary / --ui-primary-contrast | Primary action and its text |
| --ui-danger | Destructive action and error text |
| --ui-focus | Keyboard focus indicator |
| --ui-font-sans | UI typeface |
| --ui-radius-* | Corner radii |
| --ui-space-* | Base spacing scale |
| --ui-control-height | Default control height |
| --ui-shadow | Modal elevation |

Theme selection is controlled by data-ui-theme="dark" on the root element. Theme preference storage belongs to the consuming app, not the library. Re-check WCAG contrast whenever tokens are overridden. Do not use color alone to convey status.

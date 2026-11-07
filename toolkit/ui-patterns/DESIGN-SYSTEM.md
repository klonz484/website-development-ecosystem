# Reusable UI and Design System Patterns

## Foundations
Define semantic tokens for color, typography, spacing, radius, elevation, breakpoints, motion and z-index. Prefer purpose names (surface, text, border, danger, focus) over raw palette names in product components. Provide light/dark themes only when tested.

## Component contract
Each component documents purpose, API, states, keyboard behavior, accessibility semantics, responsive behavior, examples and tests. Prefer native HTML semantics. Keep variants finite and intentional. Expose className or slots only when composition requires it.

## Component inventory
Start with Button, Link, Input, Textarea, Select, Checkbox, Radio, Switch, Dialog, Dropdown, Tabs, Table, Toast/Alert, Skeleton, EmptyState, Pagination and Navigation. Build only what the product needs.

## Quality
Test accessible roles/names, focus, disabled/loading/error states, contrast and responsive layout. Avoid custom widgets when native controls suffice. Use shadcn/ui as a copy-and-own component source where suitable; review every copied component and dependency. Official guide: https://ui.shadcn.com/docs

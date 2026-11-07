# @website-development-ecosystem/ui

Accessible React UI primitives and semantic design tokens. Supports React 18.2+ and React DOM 18.2+.

## Components
- Button: primary, secondary, outline, ghost and danger variants; small, medium and large sizes; loading and disabled states.
- TextField, TextareaField, SelectField: visible labels, hints, errors and programmatic descriptions.
- CheckboxField, SwitchField, RadioGroup: native form semantics.
- Dialog: native modal dialog, browser-managed focus containment, Escape dismissal, accessible title and optional description.
- Navigation: semantic nav landmark and current-page indication.
- DataTable: caption, scoped headers, horizontal overflow and empty state.
- Card, StatCard, PageHeader: dashboard and SaaS layout primitives.

## Installation and usage
Build the package, then consume it from a workspace or publish it to a package registry. Import the stylesheet once from the application entry point and import components from the package root.

Example:
~~~tsx
import "@website-development-ecosystem/ui/styles.css";
import { Button, Dialog, TextField } from "@website-development-ecosystem/ui";
~~~

## Design tokens
Import styles.css once. Override semantic --ui-* variables at :root or a scoped theme root. Set data-ui-theme="dark" on the root element for the included dark palette. Theme selection and persistence belong to the consuming application.

## Accessibility contract
Native HTML elements, visible labels, programmatic error descriptions, keyboard focus indicators, semantic table markup and the platform's native modal dialog behavior are built in. The consumer must still supply meaningful text, correct heading hierarchy, contrast-checked token overrides, and keyboard testing in the actual application.

## API notes
- Controlled fields follow normal React value/onChange contracts.
- RadioGroup onChange receives the selected string value.
- Dialog is controlled by open and onOpenChange.
- Navigation renders ordinary anchors; supply real href destinations.
- DataTable requires a stable getRowKey and explicit column renderers.
- Buttons inside forms should pass type="button" unless they submit.
- This is not a full design system, routing framework, form state library or authorization layer.

## Compatibility and provenance
- React and React DOM are peer dependencies (>=18.2).
- No runtime UI framework or icon package is bundled.
- Uses native dialog support, widely available in browsers since March 2022; verify required embedded-webview targets.
- MIT license; original implementation for this repository. Confirm third-party license obligations for downstream applications.
- Unit tests use Vitest, Testing Library and jsdom. Browser-level tests should run in consuming applications.

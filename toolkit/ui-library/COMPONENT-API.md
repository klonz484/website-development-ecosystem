# Component API reference

## Button
Props: native button attributes, variant (primary | secondary | outline | ghost | danger), size (sm | md | lg), loading. Loading disables activation and exposes aria-busy. Always provide visible action text. Buttons default to type=button; pass type=submit only for a form submit action.

## TextField / TextareaField / SelectField
Props: native control attributes plus label, hint, error, id, required and className. Labels are always visible. Hints and errors are linked to the control. Error sets aria-invalid. Use the correct input type and autocomplete values.

## CheckboxField / SwitchField
Use CheckboxField for a binary choice that is not a setting toggle. SwitchField exposes role=switch and uses a native checkbox input. Do not use a switch for irreversible or high-impact actions.

## RadioGroup
Use for mutually exclusive options. Supply a group label, stable name, unique values, and an onChange callback that receives the selected string. Prefer vertical orientation on narrow screens.

## Dialog
Controlled props: open, onOpenChange, title, description, children, optional footer, closeLabel and closeOnBackdrop. Uses HTMLDialogElement.showModal; Escape and explicit close are supported by the browser. Avoid nested dialogs. For destructive actions, state consequences in the title/description and use explicit confirmation.

## Navigation
Supply a meaningful landmark label, actual href values, and current=true for the current page. Optional onClick is available for client-side navigation; prevent default only when the application handles navigation itself. Do not use this for menu popups or tab widgets.

## DataTable
Supply a caption, columns with stable keys and render functions, rows and a stable getRowKey. Column headers use scope=col. Keep essential data available on small screens; horizontal scrolling is provided as a fallback.

## Card / StatCard / PageHeader
Use for page structure and summary metrics. Metric labels must be understandable without color or icon alone. Do not present a number without a meaningful label or time period.

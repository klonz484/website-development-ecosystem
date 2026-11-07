import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button, CheckboxField, DataTable, Dialog, Navigation, RadioGroup, SelectField, StatCard, SwitchField, TextField, TextareaField } from "./components";

describe("Button", () => {
  it("renders an accessible native button and disables while loading", () => {
    render(<Button loading>Save changes</Button>);
    expect(screen.getByRole("button", { name: "Save changes" })).toBeDisabled();
    expect(screen.getByRole("button")).toHaveAttribute("aria-busy", "true");
  });
});

describe("form controls", () => {
  it("associates labels, hints and validation errors with fields", () => {
    render(<TextField label="Email address" type="email" hint="Use your school email" error="Email is required" />);
    const input = screen.getByRole("textbox", { name: /Email address/ });
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription("Use your school email Email is required");
  });
  it("renders native select, checkbox, switch, radio and textarea semantics", () => {
    render(<><SelectField label="Grade"><option value="12">Grade 12</option></SelectField><CheckboxField label="Remember this device" /><SwitchField label="Enable reminders" /><RadioGroup label="Study mode" name="mode" options={[{ value: "guided", label: "Guided" }]} /><TextareaField label="Notes" /></>);
    expect(screen.getByRole("combobox", { name: "Grade" })).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: "Remember this device" })).toBeInTheDocument();
    expect(screen.getByRole("switch", { name: "Enable reminders" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Guided" })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: "Notes" })).toBeInTheDocument();
  });
});

describe("Dialog", () => {
  it("exposes a labelled modal and reports close actions", () => {
    const onOpenChange = vi.fn();
    render(<Dialog open onOpenChange={onOpenChange} title="Delete note" description="This cannot be undone.">Confirm deletion?</Dialog>);
    expect(screen.getByRole("dialog", { name: "Delete note" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Close dialog" }));
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});

describe("navigation and data", () => {
  it("marks the current navigation destination", () => {
    render(<Navigation items={[{ href: "/home", label: "Home", current: true }, { href: "/settings", label: "Settings" }]} />);
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "page");
  });
  it("renders semantic table headings and empty states", () => {
    render(<DataTable caption="Student records" columns={[{ key: "name", header: "Student", render: (row: { name: string }) => row.name }]} rows={[]} getRowKey={(row) => row.name} />);
    expect(screen.getByRole("table", { name: "Student records" })).toBeInTheDocument();
    expect(screen.getByText("No results found.")).toBeInTheDocument();
  });
  it("renders dashboard metric cards with labels", () => {
    render(<StatCard label="Sessions completed" value="12" detail="This month" />);
    expect(screen.getByText("Sessions completed")).toBeInTheDocument();
    expect(screen.getByText("12")).toBeInTheDocument();
  });
});

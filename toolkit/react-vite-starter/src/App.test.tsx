import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "./App";

describe("starter home", () => {
  it("announces the initial state and toggles accessibly", () => {
    render(<App />);
    const button = screen.getByRole("button", { name: "Check the baseline" });
    expect(screen.getByRole("status")).toHaveTextContent("The starter is ready");
    fireEvent.click(button);
    expect(screen.getByRole("button", { name: "Baseline checked" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("status")).toHaveTextContent("Interaction works");
  });
});

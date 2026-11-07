import { test, expect } from "@playwright/test";

test("home interaction is available to keyboard and pointer users", async ({ page }) => {
  await page.goto("/");
  const button = page.getByRole("button", { name: "Check the baseline" });
  await expect(button).toBeVisible();
  await button.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("status")).toContainText("Interaction works");
});

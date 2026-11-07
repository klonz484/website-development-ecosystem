import { readFileSync } from "node:fs";

const css = readFileSync(new URL("../src/styles.css", import.meta.url), "utf8");
const lightBlock = css.match(/:root\s*\{([^}]+)\}/)?.[1];
const darkBlock = css.match(/:root\[data-ui-theme="dark"\]\s*\{([^}]+)\}/)?.[1];
if (!lightBlock || !darkBlock) throw new Error("Could not find light and dark theme token blocks.");

function tokens(block) {
  return Object.fromEntries([...block.matchAll(/(--ui-[\w-]+)\s*:\s*(#[0-9a-fA-F]{3,8})\s*;/g)].map((m) => [m[1], m[2]]));
}
function rgb(hex) {
  let h = hex.slice(1);
  if (h.length === 3) h = [...h].map((c) => c + c).join("");
  if (h.length !== 6) throw new Error(`Unsupported color token: ${hex}`);
  return [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255).map((v) => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4);
}
function luminance(hex) {
  return rgb(hex).reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0);
}
function ratio(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}
const checks = [
  ["body text on background", "--ui-text", "--ui-bg", 4.5],
  ["body text on surface", "--ui-text", "--ui-surface", 4.5],
  ["muted text on background", "--ui-text-muted", "--ui-bg", 4.5],
  ["muted text on surface", "--ui-text-muted", "--ui-surface", 4.5],
  ["primary button label", "--ui-primary-contrast", "--ui-primary", 4.5],
  ["danger button label", "--ui-danger-contrast", "--ui-danger", 4.5],
  ["focus indicator on background", "--ui-focus", "--ui-bg", 3],
  ["focus indicator on surface", "--ui-focus", "--ui-surface", 3],
  ["control border on surface", "--ui-border", "--ui-surface", 3],
];
let failed = false;
for (const [theme, block] of [["light", lightBlock], ["dark", darkBlock]]) {
  const t = tokens(block);
  for (const [label, fg, bg, min] of checks) {
    if (!t[fg] || !t[bg]) {
      console.error(`FAIL [${theme}] ${label}: missing ${!t[fg] ? fg : bg}`);
      failed = true;
      continue;
    }
    const actual = ratio(t[fg], t[bg]);
    const ok = actual >= min;
    console.log(`${ok ? "PASS" : "FAIL"} [${theme}] ${label}: ${actual.toFixed(2)}:1 (minimum ${min}:1)`);
    if (!ok) failed = true;
  }
}
if (failed) process.exit(1);
console.log("All semantic token contrast checks passed. This does not replace rendered-state or manual accessibility testing.");

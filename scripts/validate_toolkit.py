#!/usr/bin/env python3
"""Validate the presence and minimum structure of shared engineering guidance.

Uses only the Python standard library; this checks documentation integrity,
not whether a consuming project's software is correct.
"""
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[1]
REQUIRED = {
    "README.md": ["# Website Development Ecosystem", "ENGINEERING-STANDARD.md"],
    "standards/ENGINEERING-CHARTER.md": ["# Engineering Charter", "Definition of done"],
    "standards/ENGINEERING-STANDARD.md": [
        "# Shared Engineering Standard v1.0",
        "Definition of ready",
        "Definition of done",
        "Independent review",
        "Human authority",
    ],
    "quality/QUALITY-GATES.md": ["# Quality Gates", "Gate A", "Gate B", "Gate C"],
    "workflows/PROJECT-LIFECYCLE.md": ["# End-to-End Project Lifecycle", "Discovery", "Verification"],
    "workflows/PROJECT-CLOSEOUT.md": ["# Reuse-First Project Closeout", "Required asset metadata"],
    "workflows/CHANGE-DELIVERY.md": ["# Change Delivery Workflow", "Research and define", "Verify", "Review"],
    "templates/CHANGE-PLAN.md": ["# Change Plan", "Acceptance criterion", "Verification plan"],
    "templates/INDEPENDENT-REVIEW.md": ["# Independent Adversarial Review", "Findings", "Verdict"],
    "templates/LESSONS-LEARNED.md": ["# Lessons Learned", "Root cause", "Regression test added"],
}

def validate(root: Path = ROOT) -> list[str]:
    errors = []
    for relative, markers in REQUIRED.items():
        path = root / relative
        if not path.is_file():
            errors.append(f"Missing required file: {relative}")
            continue
        content = path.read_text(encoding="utf-8")
        for marker in markers:
            if marker.casefold() not in content.casefold():
                errors.append(f"{relative}: missing required marker {marker!r}")
    return errors

def main() -> int:
    errors = validate()
    if errors:
        print("Toolkit validation failed:")
        for error in errors:
            print(f"- {error}")
        return 1
    print(f"Toolkit validation passed ({len(REQUIRED)} required documents checked).")
    return 0

if __name__ == "__main__":
    sys.exit(main())

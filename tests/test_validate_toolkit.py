import tempfile
import unittest
from pathlib import Path

from scripts.validate_toolkit import REQUIRED, validate


class ToolkitValidationTests(unittest.TestCase):
    def test_repository_documents_satisfy_contract(self):
        self.assertEqual(validate(), [])

    def test_missing_document_is_reported(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            self.assertIn(
                f"Missing required file: {next(iter(REQUIRED))}",
                validate(root),
            )

    def test_missing_required_section_is_reported(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            for relative in REQUIRED:
                path = root / relative
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text("# placeholder", encoding="utf-8")
            errors = validate(root)
            self.assertTrue(any("missing required marker" in error for error in errors))


if __name__ == "__main__":
    unittest.main()

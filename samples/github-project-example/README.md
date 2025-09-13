# GitHub Project Example

This example demonstrates the complete workflow using a realistic GitHub project structure.

## Scenario

You want to review the structural layout of a GitHub project's documentation site or web application. The original site has complex styling that makes it hard to focus on the information architecture.

## Files

- `original/` - Contains CSS and HTML files as they would appear in a typical GitHub project
- `processed/` - Shows the cleaned versions ready for PDF generation

## Workflow Demonstration

1. **Original files** simulate what you'd find in a real project repository
2. **Processing** shows how the CSS cleanup tool transforms complex styles
3. **Templates** demonstrate HTML optimization for printing
4. **Output** shows the final PDF-ready structure

## Usage

```bash
# Process the example CSS
node ../../scripts/utilities/css-cleanup.js \
    original/github-project-styles.css \
    processed/minimal-github-styles.css

# Generate PDF from the template
node ../../scripts/converters/html-to-pdf.js \
    processed/project-template.html \
    ../../pdf-printouts/generated/github-project-example.pdf
```

This example helps you understand how to adapt the workflow to real GitHub projects with complex styling and multiple components.
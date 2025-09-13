# Documentation

This directory contains comprehensive documentation for using the CSS Printouts HTML Feedback system.

## Quick Start Guide

1. **Import CSS files** from your target GitHub project into `css-files/external-projects/`
2. **Clean the CSS** using `scripts/utilities/css-cleanup.js` to create minimal versions
3. **Prepare HTML templates** in `html-pages/templates/` using the minimal CSS
4. **Generate PDFs** using `scripts/converters/html-to-pdf.js`
5. **Review PDFs** for structural feedback without design distractions

## Workflow Example

```bash
# 1. Clean CSS from external project
node scripts/utilities/css-cleanup.js \
    css-files/external-projects/main.css \
    css-files/minimal-styles/main.css

# 2. Generate PDF from HTML template
node scripts/converters/html-to-pdf.js \
    html-pages/templates/homepage.html \
    pdf-printouts/generated/homepage-2024-01-15.pdf
```

## Use Cases

- **Design Reviews**: Focus on content structure without visual design distractions
- **Accessibility Audits**: Review information hierarchy and content flow
- **Content Strategy**: Evaluate information architecture
- **Stakeholder Feedback**: Share clean, printable versions for non-technical review

## Best Practices

- Keep original files intact in their respective directories
- Use descriptive file names with dates
- Document feedback and iterations
- Maintain version control of templates and generated files
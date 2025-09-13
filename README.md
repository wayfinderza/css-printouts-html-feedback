# CSS Printouts HTML Feedback

This project removes unnecessary CSS and strict accessibility rules to focus on the raw structure of a web app. It provides minimal CSS, plain HTML printouts, and a transparent view of the site without modern bloat. The goal is to gather feedback on clarity, readability, and flow by reducing everything to the essentials.

## 📁 Folder Structure

```
css-files/
├── external-projects/    # CSS files from other GitHub projects
└── minimal-styles/       # Cleaned, minimal CSS for printing

html-pages/
├── source/              # Original HTML files
└── templates/           # Print-optimized HTML templates

pdf-printouts/
├── generated/           # Recent PDF outputs
└── archives/           # Historical versions

scripts/
├── converters/         # HTML to PDF conversion tools
└── utilities/          # CSS cleanup and processing tools

samples/
├── basic-example/      # Simple workflow demonstration
└── github-project-example/  # Real-world project example

docs/                   # Usage documentation and guides
```

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Import CSS files** from your GitHub project into `css-files/external-projects/`

3. **Clean the CSS** to remove animations and decorative elements:
   ```bash
   node scripts/utilities/css-cleanup.js input.css output.css
   ```

4. **Create HTML templates** in `html-pages/templates/` using minimal CSS

5. **Generate PDFs** for review:
   ```bash
   node scripts/converters/html-to-pdf.js template.html output.pdf
   ```

## 💡 Use Cases

- **Structural Reviews**: Focus on content hierarchy without design distractions
- **Accessibility Audits**: Review information flow and readability
- **Stakeholder Feedback**: Share clean, printable versions for review
- **Content Strategy**: Evaluate information architecture

## 📖 Documentation

See the `docs/` directory for detailed usage guides and best practices. Start with `samples/basic-example/` to understand the workflow.

# HTML Pages Directory

This directory contains HTML pages prepared for PDF printout generation.

## Structure

- `source/` - Original HTML pages from projects
- `templates/` - Clean HTML templates optimized for printouts

## Usage

1. Place original HTML files in `source/`
2. Create cleaned versions in `templates/` that:
   - Remove JavaScript dependencies
   - Use minimal CSS from the `css-files/minimal-styles/` directory
   - Focus on content structure and readability
   - Are optimized for print media

## Print Optimization

- Use semantic HTML structure
- Avoid fixed positioning and complex layouts
- Include print-specific CSS media queries
- Ensure proper heading hierarchy for PDF bookmarks
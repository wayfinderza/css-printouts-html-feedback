#!/usr/bin/env node

/**
 * Simple HTML to PDF converter using Puppeteer
 * Usage: node html-to-pdf.js <input.html> <output.pdf>
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertHtmlToPdf(htmlPath, pdfPath) {
    if (!fs.existsSync(htmlPath)) {
        console.error(`Error: HTML file not found: ${htmlPath}`);
        process.exit(1);
    }

    try {
        console.log(`Converting ${htmlPath} to ${pdfPath}...`);
        
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        // Load the HTML file
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
        
        // Generate PDF with print-optimized settings
        await page.pdf({
            path: pdfPath,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '20mm',
                right: '15mm',
                bottom: '20mm',
                left: '15mm'
            }
        });
        
        await browser.close();
        console.log(`✓ PDF generated successfully: ${pdfPath}`);
        
    } catch (error) {
        console.error('Error generating PDF:', error.message);
        process.exit(1);
    }
}

// Command line usage
if (process.argv.length < 4) {
    console.log('Usage: node html-to-pdf.js <input.html> <output.pdf>');
    console.log('Example: node html-to-pdf.js ../html-pages/templates/homepage.html ../pdf-printouts/generated/homepage.pdf');
    process.exit(1);
}

const htmlPath = process.argv[2];
const pdfPath = process.argv[3];

// Ensure output directory exists
const outputDir = path.dirname(pdfPath);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

convertHtmlToPdf(htmlPath, pdfPath);
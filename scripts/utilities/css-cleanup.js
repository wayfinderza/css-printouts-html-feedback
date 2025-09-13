#!/usr/bin/env node

/**
 * CSS cleanup utility to remove animations, transitions, and decorative elements
 * Usage: node css-cleanup.js <input.css> <output.css>
 */

const fs = require('fs');
const path = require('path');

function cleanupCSS(cssContent) {
    let cleaned = cssContent;
    
    // Remove animations and keyframes
    cleaned = cleaned.replace(/@keyframes[^{]*{[^{}]*({[^{}]*}[^{}]*)*}/g, '');
    cleaned = cleaned.replace(/animation[^;]*;/g, '');
    cleaned = cleaned.replace(/animation-[^;]*;/g, '');
    
    // Remove transitions
    cleaned = cleaned.replace(/transition[^;]*;/g, '');
    cleaned = cleaned.replace(/transition-[^;]*;/g, '');
    
    // Remove transforms (except basic positioning)
    cleaned = cleaned.replace(/transform:[^;]*rotate[^;]*;/g, '');
    cleaned = cleaned.replace(/transform:[^;]*scale[^;]*;/g, '');
    cleaned = cleaned.replace(/transform:[^;]*skew[^;]*;/g, '');
    
    // Remove complex backgrounds and effects
    cleaned = cleaned.replace(/background:[^;]*gradient[^;]*;/g, '');
    cleaned = cleaned.replace(/background-image:[^;]*gradient[^;]*;/g, '');
    cleaned = cleaned.replace(/box-shadow:[^;]*;/g, '');
    cleaned = cleaned.replace(/text-shadow:[^;]*;/g, '');
    cleaned = cleaned.replace(/filter:[^;]*;/g, '');
    cleaned = cleaned.replace(/backdrop-filter:[^;]*;/g, '');
    
    // Remove hover effects and pseudo-element animations
    cleaned = cleaned.replace(/:hover[^{]*{[^{}]*({[^{}]*}[^{}]*)*}/g, '');
    cleaned = cleaned.replace(/::before[^{]*{[^{}]*({[^{}]*}[^{}]*)*}/g, '');
    cleaned = cleaned.replace(/::after[^{]*{[^{}]*({[^{}]*}[^{}]*)*}/g, '');
    
    // Clean up multiple spaces and empty rules
    cleaned = cleaned.replace(/\s+/g, ' ');
    cleaned = cleaned.replace(/{\s*}/g, '');
    cleaned = cleaned.replace(/;\s*}/g, '}');
    
    // Add print media query if not present
    if (!cleaned.includes('@media print')) {
        cleaned += `

/* Print-specific styles */
@media print {
    * {
        background: white !important;
        color: black !important;
    }
    
    body {
        font-family: serif;
        line-height: 1.4;
    }
    
    h1, h2, h3, h4, h5, h6 {
        page-break-after: avoid;
        font-weight: bold;
    }
    
    p, blockquote {
        page-break-inside: avoid;
        orphans: 3;
        widows: 3;
    }
    
    /* Hide navigation and interactive elements */
    nav, .navigation, .nav, .menu {
        display: none;
    }
    
    button, input, select, textarea {
        display: none;
    }
}`;
    }
    
    return cleaned.trim();
}

function processCSS(inputPath, outputPath) {
    if (!fs.existsSync(inputPath)) {
        console.error(`Error: CSS file not found: ${inputPath}`);
        process.exit(1);
    }
    
    try {
        console.log(`Processing ${inputPath}...`);
        
        const cssContent = fs.readFileSync(inputPath, 'utf8');
        const cleanedCSS = cleanupCSS(cssContent);
        
        // Ensure output directory exists
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        
        fs.writeFileSync(outputPath, cleanedCSS, 'utf8');
        console.log(`✓ Cleaned CSS saved to: ${outputPath}`);
        
        // Show statistics
        const originalLines = cssContent.split('\n').length;
        const cleanedLines = cleanedCSS.split('\n').length;
        const reduction = ((originalLines - cleanedLines) / originalLines * 100).toFixed(1);
        
        console.log(`Statistics:`);
        console.log(`  Original: ${originalLines} lines`);
        console.log(`  Cleaned: ${cleanedLines} lines`);
        console.log(`  Reduction: ${reduction}%`);
        
    } catch (error) {
        console.error('Error processing CSS:', error.message);
        process.exit(1);
    }
}

// Command line usage
if (process.argv.length < 4) {
    console.log('Usage: node css-cleanup.js <input.css> <output.css>');
    console.log('Example: node css-cleanup.js ../css-files/external-projects/style.css ../css-files/minimal-styles/style.css');
    process.exit(1);
}

const inputPath = process.argv[2];
const outputPath = process.argv[3];

processCSS(inputPath, outputPath);
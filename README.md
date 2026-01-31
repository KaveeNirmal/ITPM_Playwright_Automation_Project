🎯 Singlish to Sinhala Translator - Automated Testing Suite
https://img.shields.io/badge/Playwright-2.4+-45ba4b.svg?logo=playwright
https://img.shields.io/badge/Node.js-16%252B-339933.svg?logo=node.js
https://img.shields.io/badge/License-Academic-blue.svg
https://img.shields.io/badge/Test%2520Coverage-34%2520cases-brightgreen.svg

Student ID: IT23816718
Name: Nirmal G N P K
Module: PAF
Assignment: Singlish to Sinhala Translator Testing


📋 #Project Overview
A comprehensive automated testing framework built with Playwright for validating a Singlish (Romanized Sinhala) to Sinhala script transliteration system. This suite tests accuracy, robustness, and performance across various linguistic scenarios and edge cases.

✨ #Features
✅ 34+ comprehensive test cases with real Singlish inputs
✅ Automated UI testing using Playwright
✅ Multiple browsers support (Chromium, Firefox, WebKit)
✅ Detailed HTML reports with screenshots
✅ Page Object Model design pattern
✅ Parallel test execution
✅ CI/CD ready configuration
✅ Real-time translation validation
✅ Error handling verification

🚀 #Quick Start
Prerequisites
Node.js 16 or higher

npm 8 or higher

Installation
bash
# Clone the repository
git clone https://github.com/yourusername/singlish-translator-tests.git
cd singlish-translator-tests

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
Running Tests
bash
# Run all tests
npm test

# Run with browser UI visible
npm run test:headed

# Run specific test file
npx playwright test tests/singlishTranslator.spec.js

# Run specific test case
npx playwright test -g "TC_Pos_Fun_0001"

# Run tests with debug information
npm run test:debug
Viewing Reports
bash
# Generate and open HTML report
npm run report

# Open last test report
npx playwright show-report

📁 #Project Structure
text
singlish-translator-tests/
├── tests/
│   └── singlishTranslator.spec.js    # Main test suite
├── pages/
│   └── TranslatorPage.js             # Page Object Model class
├── test-data/
│   └── singlishTestData.json         # Test cases (34+ scenarios)
├── playwright.config.js              # Playwright configuration
├── package.json                      # Dependencies
├── .github/
│   └── workflows/
│       └── playwright.yml           # GitHub Actions workflow
├── reports/
│   ├── html-report/                 # HTML test reports
│   └── screenshots/                 # Screenshots for failures
└── README.md                        # This file

📊 #Test Coverage
Positive Test Cases (24) ✅
Category	Test Cases	Description
Simple Sentences	TC_Pos_Fun_0001, TC_Pos_UI_0004-0008, etc.	Daily usage, ≤30 characters
Medium Sentences	TC_Pos_Fun_0002-0003, TC_Pos_UI_0009, etc.	Compound/complex, 31-299 chars
Long Content	TC_Pos_UI_0024	Paragraphs, ≥300 characters
Grammatical Types	TC_Pos_UI_0015-0017	Past/Present/Future tense
Special Cases	TC_Pos_UI_0019-0023	Mixed language, punctuation
Negative Test Cases (10) ❌
Category	Test Cases	Description
Input Errors	TC_Neg_Fun_0001-0002	Mixed case, special chars
Security	TC_Neg_Fun_0003	HTML/script injection
Edge Cases	TC_Neg_Fun_0004-0010	No spaces, leet speak, etc.

🧪 #How Tests Work
Initialize Test Environment

Launches browser instance

Navigates to translator application

Sets up test context

Execute Test Scenarios

javascript
// Example test flow
await page.goto('https://translator-app.com');
await page.enterText(testCase.input);
await page.waitForTranslation();
const result = await page.getTranslatedText();
expect(result).toContain(testCase.expectedContains);
Generate Results

Captures screenshots on failure

Logs detailed error information

Creates comprehensive HTML report

🔧 #Configuration
playwright.config.js
javascript
module.exports = {
  timeout: 30000,
  retries: 1,
  workers: 3,
  reporter: [['html'], ['line'], ['junit']],
  use: {
    browserName: 'chromium',
    headless: true,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'on-first-retry'
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' }
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' }
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' }
    }
  ]
};
Customizing Tests
javascript
// Update test data
const testData = require('./test-data/singlishTestData.json');

// Add new test case
testData.push({
  "id": "TC_Custom_0001",
  "input": "your singlish text",
  "expectedContains": "expected sinhala output",
  "category": "Custom"
});

📈 #Test Reports
HTML Report
https://via.placeholder.com/800x400/45ba4b/ffffff?text=Playwright+HTML+Report

Features:

✅ Interactive test results
✅ Screenshot galleries
✅ Timeline view
✅ Filter by status/tag
✅ Downloadable artifacts

JUnit Report
For CI/CD integration:

bash
# Generate JUnit report
npx playwright test --reporter=junit --output=reports/junit.xml
🎯 Sample Test Cases
Simple Sentence
json
{
  "id": "TC_Pos_Fun_0001",
  "input": "mama havasata gedhara yanavaa",
  "expectedContains": "මම හවසට ගෙදර යනවා",
  "category": "Functional",
  "type": "Positive",
  "description": "Validates basic daily sentence translation"
}
Edge Case
json
{
  "id": "TC_Neg_Fun_0008",
  "input": "! ? . , ; : / …",
  "expectedContains": "! ? . , ; : / ...",
  "category": "Robustness",
  "type": "Negative",
  "description": "Tests punctuation-only input handling"
}
🤝 Contributing
Fork the repository

Create a feature branch (git checkout -b feature/new-tests)

Add your test cases to test-data/singlishTestData.json

Run tests to ensure they pass (npm test)

Commit changes (git commit -m 'Add new test cases')

Push to branch (git push origin feature/new-tests)

Open a Pull Request

Adding New Test Cases
Follow this format:

json
{
  "id": "TC_Type_Category_XXXX",
  "input": "Singlish text input",
  "expectedContains": "Expected Sinhala output substring",
  "category": "Category name",
  "type": "Positive/Negative",
  "length": "S/M/L",
  "description": "Brief description"
}
🚨 Troubleshooting
Issue	Solution
Browser won't launch	Run npx playwright install --force
Tests timeout	Increase timeout in playwright.config.js
Missing dependencies	Delete node_modules and run npm install
Report not generating	Check write permissions in reports/ directory
Translation not appearing	Verify translator URL is correct
📚 Resources
Playwright Documentation

Singlish to Sinhala Transliteration Guide

Page Object Model Pattern

Test Reporting Guide

Test Suite Version: 1.0.0
<div align="center">
Made with  by Nirmal G N P K (IT23816718)

https://img.shields.io/badge/GitHub-Repository-181717?logo=github
https://img.shields.io/github/issues/yourusername/singlish-translator-tests
https://img.shields.io/github/forks/yourusername/singlish-translator-tests
https://img.shields.io/github/stars/yourusername/singlish-translator-tests

</div>
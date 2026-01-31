const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 0,
  reporter: [
    ['html', { outputFolder: 'reports/html-report', open: 'always' }]
  ],
  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'only-on-failure',
    baseURL: 'https://www.swifttranslator.com/'
  }
});

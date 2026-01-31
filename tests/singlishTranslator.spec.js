const { test, expect } = require('@playwright/test');
const { TranslatorPage } = require('../pages/TranslatorPage');
const testData = require('../test-data/singlishTestData.json');

test.describe('SwiftTranslator Singlish → Sinhala', () => {

  for (const data of testData) {
    test(data.id + ' - Singlish Conversion', async ({ page }) => {

      const translator = new TranslatorPage(page);

      await translator.open();
      await translator.enterSinglish(data.input);

      // real-time conversion delay
      await page.waitForTimeout(1500);

      const output = await translator.getSinhalaOutput();

      console.log('Output:', output);

      await expect(output).toContain(data.expectedContains);
    });
  }

});

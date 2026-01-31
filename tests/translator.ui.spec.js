const { test, expect } = require('@playwright/test');
const { TranslatorPage } = require('../pages/TranslatorPage');

test.describe('SwiftTranslator UI Tests', () => {


  test('Pos_UI_0001 - Numeric substitution (leet speak)', async ({ page }) => {
    const translator = new TranslatorPage(page);
    await translator.open();

    const text = 'm4m4 93dh4r4 y4n4v4';


    await translator.singlishInput.fill(text);

   
    await expect(translator.sinhalaOutput).toHaveText(/.+/, { timeout: 500 });

    const output = await translator.getSinhalaOutput();
    expect(output.length).toBeGreaterThan(0);
  });

  
  test('Pos_UI_0002 - Clear button functionality', async ({ page }) => {
    const translator = new TranslatorPage(page);
    await translator.open();

    await translator.enterSinglish('A');

    await expect(translator.sinhalaOutput).toHaveText(/.+/, { timeout: 5000 });

    // Clear input
    await translator.clearInput();

    // Validate cleared state
    await expect(translator.singlishInput).toHaveValue('');
    await expect(translator.sinhalaOutput).toHaveText('');
  });


  test('Pos_UI_0003 - Responsive design (desktop)', async ({ page }) => {
    const translator = new TranslatorPage(page);
    await translator.open();

    // Resize window gradually
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.setViewportSize({ width: 800, height: 700 });
    await page.setViewportSize({ width: 500, height: 700 });

    // Input and output should still be visible
    await expect(translator.singlishInput).toBeVisible();
    await expect(translator.sinhalaOutput).toBeVisible();
  });

  test('Neg_UI_0001 - Extremely long input causes performance issue', async ({ page }) => {
    const translator = new TranslatorPage(page);
    await translator.open();

    const longText = 'Lorem ipsum dolor sit amet. '.repeat(400); // ~10,000 chars

    await translator.singlishInput.fill(longText);

    // UI should ideally handle this, but currently expected to struggle
    await page.waitForTimeout(3000);

    const output = await translator.getSinhalaOutput();

    // Known issue: output may be empty or incomplete
    expect(output.length).toBeLessThan(longText.length);
  });

  test('Neg_UI_0002 - Rapid language switching causes inconsistent state', async ({ page }) => {
    const translator = new TranslatorPage(page);
    await translator.open();

 
    for (let i = 0; i < 10; i++) {
      await translator.switchLanguage();
    }

    await translator.enterSinglish('api yamu');

    await page.waitForTimeout(2000);

    const output = await translator.getSinhalaOutput();


    expect(output).not.toContain('api yamu');
  });

});
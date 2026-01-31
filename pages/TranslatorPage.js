class TranslatorPage {
  constructor(page) {
    this.page = page;

    // Singlish input textarea
    this.singlishInput = page.locator('textarea');

    // Sinhala output div
    this.sinhalaOutput = page.locator(
      'div.whitespace-pre-wrap.overflow-y-auto'
    );
  }

  async open() {
    await this.page.goto('https://www.swifttranslator.com/', {
      waitUntil: 'domcontentloaded'
    });
  }

  async enterSinglish(text) {
    await this.singlishInput.fill('');
    await this.singlishInput.type(text, { delay: 40 });
  }

  async clearInput() {
    await this.singlishInput.fill('');
  }

  async getSinglishValue() {
    return await this.singlishInput.inputValue();
  }

  async getSinhalaOutput() {
    await this.page.waitForTimeout(800);
    return await this.sinhalaOutput.innerText();
  }
}

module.exports = { TranslatorPage };
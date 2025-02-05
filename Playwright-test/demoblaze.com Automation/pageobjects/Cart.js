const { expect } = require("@playwright/test");
class Cart {
  constructor(page) {
    this.page = page;
    this.productsTitle = page.locator(".card-title");
    this.addToCartButton = page.locator("[onclick*=addToCart]");
    this.productURL = page.locator("getByRole('link', { name: 'Nexus 6' })");
    this.cartButton = page.locator("#cartur");
    this.tableProducts = page.locator("table");
    this.placeOrderButton = page.locator(".btn.btn-success");
    this.nameInput = page.locator("#name");
    this.countryInput = page.locator("#country");
    this.cityInput = page.locator("#city");
    this.creditCardInput = page.locator("#card");
    this.yearInput = page.locator("#year");
    this.monthInput = page.locator("#month");
    this.purchaseButton = page.locator("[onclick*=purchase]");
    this.okayButton = page.locator(".confirm.btn.btn-lg.btn-primary");
  }
  async searchProduct(productName) {
    const titleCounts = await this.productsTitle.count(); 

    for (let i = 0; i < titleCounts; i++) {
      const title = await this.productsTitle.nth(i).textContent();

      if (title === productName) {
        await this.productsTitle.nth(i).locator(".hrefch").click();
        break;
      }
    }
    await this.page.waitForLoadState("networkidle");
  }

  async addProductToCart() {
    await this.addToCartButton.click();
    await this.page.on("dialog", (dialog) => dialog.accept());
    await this.cartButton.click();
    await this.page.waitForLoadState("networkidle");
  }
  async validateProductInCart(productName) {
    const count = await this.tableProducts.locator("td").count();

    for (let i = 0; i < count; i++) {
      const tabelLabel = await this.tableProducts
        .locator("td")
        .nth(i)
        .textContent();

      if (tabelLabel === productName) {
        const bool = true;
        expect(bool).toBeTruthy();
        this.placeOrderButton.click();
        break;
      }
    }
  }
  async fillOrderForm(name, country, city, creditCard, month, year) {
    await this.nameInput.fill(name);
    await this.countryInput.fill(country);
    await this.cityInput.fill(city);
    await this.creditCardInput.fill(creditCard);
    await this.monthInput.fill(month);
    await this.yearInput.fill(year);
    await this.purchaseButton.click();
  }
  async purchaseValidations() {
    const confirmationMessage = this.page.locator(
      "//h2[contains(text(),'Thank you for your purchase!')]"
    );
    await expect(confirmationMessage).toHaveText(
      /Thank you for your purchase!/
    );
    await this.okayButton.click()
  }
}

module.exports = { Cart };

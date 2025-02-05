class LoginPage {
  constructor(page) {
    this.page = page;
    this.logInButton = page.locator("#login2");
    this.userName = page.locator("#loginusername");
    this.password = page.locator("#loginpassword");
    this.logInButtonPopUp = page.locator("[onclick*=logIn]");
  }
  async goTopage(){

    await this.page.goto("https://demoblaze.com");

  }

  async validLogin(user, password) {
    await this.logInButton.click();
    await this.userName.fill(user);
    await this.password.fill(password);
    await this.logInButtonPopUp.click();
    await this.page.waitForLoadState("networkidle");

  }
}

module.exports = { LoginPage };

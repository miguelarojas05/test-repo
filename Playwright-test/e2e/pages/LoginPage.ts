import { expect, Page, Locator } from "@playwright/test";
import { createUser } from "../utils/utils";

export class LoginPage {
  private page: Page;
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;
  private incorrectSpan: Locator;
  private resetPasswordButton: Locator;
  private emailRecoverInput: Locator;
  private sendPasswordResetButton: Locator;
  private invalidEmailLabel: Locator;
  private termsOfServiceButton: Locator;
  private backArrowButton: Locator;
  private logoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.getByPlaceholder("yours@example.com");
    this.passwordInput = page.getByPlaceholder("your password");
    this.loginButton = page.getByRole("button", { name: "Log in" });
    this.incorrectSpan = page.getByTestId("Span-Incorrect-Email");
    this.resetPasswordButton = page.getByRole("button", {
      name: "Don't remember your password?",
    });
    this.emailRecoverInput = page.getByPlaceholder("yours@example.com");
    this.sendPasswordResetButton = page.getByRole("button", {
      name: "Send Email",
    });
    this.invalidEmailLabel = page.getByText("Having issues logging in? Let");
    this.termsOfServiceButton = page.getByRole("link", {
      name: "Terms of Service",
    });
    this.backArrowButton = page.getByRole("button").first();
    this.logoutButton = page.getByRole('link', { name: 'Logout' });
  }

  public login = async (email: string, password: string): Promise<void> => {
    await this.emailInput.waitFor();
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  };

  public async checkIncorrectSpanIsVisible(): Promise<void> {
    await this.incorrectSpan.isVisible();
  }

  public goToTermsOfService = async (): Promise<void> => {
    await this.termsOfServiceButton.isVisible();
    await this.termsOfServiceButton.click();
    await this.page.waitForURL(/Terms%20of%20Service/i);
  };

  public goToPasswordReset = async (): Promise<void> => {
    await this.resetPasswordButton.click();
    await this.page.waitForTimeout(3000);
  };

  public passwordResetWithInvalidEmail = async (
    email: string
  ): Promise<void> => {
    await this.emailRecoverInput.fill(email + "fake");
    await this.sendPasswordResetButton.click();
    await this.invalidEmailLabel.waitFor();
    await expect(this.invalidEmailLabel).toBeVisible();
  };

  public backArrowButtonCheck = async (): Promise<void> => {
    await this.backArrowButton.click();
  };

  public logoutButtonCheck = async (): Promise<void> => {
    await this.logoutButton.click();    
    await expect(this.loginButton).toBeVisible();
  };

  public VerifyNotEnteringInLogin = async (): Promise<void> => {
    await this.loginButton.click();
    await expect(this.invalidEmailLabel).toHaveText(
      /Incorrect email address or password/
    );
  };
  public async createFleetUser(): Promise<void> {  
    console.log(await createUser("Fleet"));
  }
  
}

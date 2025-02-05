import { test, Page } from "@playwright/test";
import { email, password,frontendBaseUrl,loginAccounts } from "../../config";
import { Pages } from "../../pages/Pages";


let pages: Pages;

test.beforeEach(async ({ page }: { page: Page; }) => {
  pages = new Pages(page);
  await page.goto(`${frontendBaseUrl}login`);
});

test.describe("@Sanity @Login", () => {
  console.log('loginAccounts:', loginAccounts);

  for (const { email, password } of loginAccounts) {
  test(`@Smoke Verify that a user can log into the refactored portal with the same email/password they use for the legacy portal - ${email}`, async () => {
     {    
        await pages.loginPage.login(email, password);;
      }
  });}

  test("Ensure users cannot log in with incorrect credentials.", async () => {
    await pages.loginPage.login(email + "fake", password);
    await pages.loginPage.checkIncorrectSpanIsVisible();
    await pages.loginPage.login(email, password + "fake");
    await pages.loginPage.checkIncorrectSpanIsVisible();
  });

  test("Verify users can navigate to the Terms of Service properly.", async () => {
    await pages.loginPage.goToTermsOfService();
  });

  test("Verify that users without an account cannot reset their password via email.", async () => {
    await pages.loginPage.goToPasswordReset();
    await pages.loginPage.passwordResetWithInvalidEmail(email);
  });

  test("Ensure users can return to the login page by clicking the back arrow after initiating a password reset.", async () => {
    await pages.loginPage.goToPasswordReset();
    await pages.loginPage.backArrowButtonCheck();
  });
  for (const { email, password } of loginAccounts) {
  test(`Verify users can log out of their session by clicking 'logout'- ${email}`, async () => {
    await pages.loginPage.login(email, password);
    await pages.loginPage.logoutButtonCheck();
  });}
  test("Verify user is able to reset the password using forgot password flow.", async () => {
    await pages.loginPage.createFleetUser();
  });  
  
});

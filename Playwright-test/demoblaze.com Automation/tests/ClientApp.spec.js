const { productName, user, password, name, country, city, creditCard, month, year, message, productFilter } = require('../utils/const');
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pageobjects/Log In");
const { Cart } = require("../pageobjects/Cart");
const { Contact } = require("../pageobjects/Contact");
const { About } = require("../pageobjects/About Us");
const { SignUp } = require("../pageobjects/Sign Up");
const { Home } = require("../pageobjects/Home");




test("test End to End", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goTopage();
  await loginPage.validLogin(user, password);

  const cart = new Cart(page);
  await cart.searchProduct(productName);
  await cart.addProductToCart();
  await cart.validateProductInCart(productName);
  await cart.fillOrderForm(name, country, city, creditCard, month, year);
  await cart.purchaseValidations();

});

test("About us page", async ({ page }) => {
  const about = new About(page);
  await about.goTopage();
  await about.visualValidations();  

});

test("Contact page", async ({ page }) => {
  const contact = new Contact(page);
  await contact.goTopage();
  await contact.visualValidations();
  await contact.fillConctacForm(user, password, message);

});


test("Sign up with codegen", async ({ page }) => {
  const signUp = new SignUp(page);
  await signUp.goTopage();
  await signUp.signUPWithCodegen(); 

});

test("Home product visualizacion", async ({ page }) => {
  const home = new Home(page);
  await home.goTopage();
  await home.validFilter(productFilter)  

});



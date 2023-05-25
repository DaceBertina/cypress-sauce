import LoginPage from "../pageObjects/Login.page";
import HomePage from "../pageObjects/Home.page";
import CartPage from "../pageObjects/Cart.page";
import CheckoutStepOnePage from "../pageObjects/CheckoutStepOne.page";
import CheckoutStepTwoPage from "../pageObjects/CheckoutStepTwo.page";
import CheckoutCompletePage from "../pageObjects/CheckoutComplete.page";

describe("Saucedemo", () => {
  beforeEach(() => {
    LoginPage.visit();
  });

  it("1. Login scenario - Positive case", () => {
    LoginPage.usernameField.type("standard_user");
    LoginPage.passwordField.type("secret_sauce");
    LoginPage.loginButton.should("be.visible");
    LoginPage.loginButton.click();
    LoginPage.loginButton.should("not.exist");
  });

  it("2. Login scenario - Negative case", () => {
    LoginPage.usernameField.type("standard_user");
    LoginPage.passwordField.type("xxxx");
    LoginPage.loginButton.click();
    LoginPage.errorMessage.should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("3. Logout scenario", () => {
    //Log into App
    LoginPage.usernameField.type("standard_user");
    LoginPage.passwordField.type("secret_sauce");
    LoginPage.loginButton.click();
    //Click on Burger/Stack icon
    HomePage.sideBar.invoke("attr", "aria-hidden").should("eq", "true");
    HomePage.stackIcon.click();
    HomePage.sideBar.invoke("attr", "aria-hidden").should("eq", "false");
    //Click logout button
    HomePage.logoutButton.click();
    //Validate that we see login button
    LoginPage.loginButton.should("be.visible");
  });

  it("5. Add and remove item", () => {
    //Log into page
    LoginPage.logIntoPage("standard_user", "secret_sauce");
    //Clic "Sauce Labs Backpack"
    HomePage.addToCartSauceLabsBackpack.click();
    //Validate that the badge is 1
    HomePage.cartBadgeIcon.scrollIntoView().should("have.text", "1");
    //Remove the "Sauce Labs Backpack"
    HomePage.removeSauceLabsBackpack.click();
    // Validate that badge should no longer exist/be visible
    HomePage.cartBadgeIcon.should("not.exist");
  });

  it("6. Open specific item, and validate title", () => {
    //Log into page
    LoginPage.logIntoPage("standard_user", "secret_sauce");
    //Click on "Sauce Labs Backpack" item
    HomePage.itemNames.contains("Backpack").click();
    //Validate that the correct item is opened, title is correct
    HomePage.itemName.should("have.text", "Sauce Labs Backpack");
  });

  it("Buy Sauce Labs Backpack, Bolt T-Shirt", () => {
    //Log into page
    LoginPage.logIntoPage("standard_user", "secret_sauce");
    //Add to cart "Sauce Labs Backpack"
    HomePage.addToCartSauceLabsBackpack.click();
    // //Add to cart "Sauce Labs Bolt T-Shirt"
    HomePage.addToCartSauceLabsBoltTShirt.click();
    //Open Cart (Create CartPage object)
    CartPage.cartIcon.click();
    //Validate that we can see "Sauce Labs Backpack" && "Sauce Labs Bolt T-Shirt"
    CartPage.cartList.should("contain", "Sauce Labs Backpack");
    CartPage.cartList.should("contain", "Sauce Labs Bolt T-Shirt");
    //Validate that we see 2 items in cart list
    HomePage.cartBadgeIcon.scrollIntoView().should("have.text", "2");
    CartPage.cartItem.should("have.length", 2);
    //Click checkout (Create new page object - CheckOutStepOne)
    CheckoutStepOnePage.checkoutButton.click();
    //Set Firstname, Lastname, zip code
    CheckoutStepOnePage.setFirstName.type("Peter");
    CheckoutStepOnePage.setLastName.type("Pen");
    CheckoutStepOnePage.setZipCode.type("99999");
    //Click Continue
    CheckoutStepOnePage.continueButton.click();
    //(Create CheckOutStepTwo page object) validate that we see "49.66"
    CheckoutStepTwoPage.totalAmount.should("contain", "49.66");
    //Click Finish
    CheckoutStepTwoPage.finishCheckout.click();
    //(Create CheckoutComplete page object) Validate that we see "Thank you for your order!"
    CheckoutCompletePage.completeHeader.should(
      "have.text",
      "Thank you for your order!"
    );
  });
});

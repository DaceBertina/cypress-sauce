import BasePage from "./Base.page";

class HomePage extends BasePage {
  static get url() {
    return "/inventory.html";
  }

  static get stackIcon() {
    return cy.get("#react-burger-menu-btn");
  }

  static get sideBar() {
    return cy.get(".bm-menu-wrap");
  }

  static get inventorySidebar() {
    return cy.get("#inventory_sidebar_link");
  }

  static get aboutSidebar() {
    return cy.get("#about_sidebar_link");
  }

  static get resetSidebar() {
    return cy.get("#reset_sidebar_link");
  }

  static get logoutButton() {
    return cy.get("#logout_sidebar_link");
  }

  static get cartButton() {
    return cy.get("#shopping_cart_container");
  }

  static get cartBadge() {
    return cy.get(".shopping_cart_badge");
  }

  static get addToCartSauceLabsBackpack() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  static get removeSauceLabsBackpack() {
    return cy.get('[data-test="remove-sauce-labs-backpack"]');
  }

  static get addToCartSauceLabsBoltTShirt() {
    return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
  }

  static get cartBadgeIcon() {
    return cy.get(".shopping_cart_badge");
  }

  static get itemNames() {
    return cy.get(".inventory_item_name");
  }

  static get itemName() {
    return cy.get(".inventory_details_name");
  }

  static get title() {
    return cy.get(".title");
  }

  static get addToCartButton() {
    return cy.get(".btn_inventory");
  }
}

export default HomePage;

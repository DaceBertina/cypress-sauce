class CartPage {
  static get cartIcon() {
    return cy.get("#shopping_cart_container");
  }

  static get cartList() {
    return cy.get(".cart_list");
  }

  static get cartItem() {
    return cy.get(".cart_item");
  }

  static get checkoutButton() {
    return cy.get("#checkout");
  }
}

export default CartPage;

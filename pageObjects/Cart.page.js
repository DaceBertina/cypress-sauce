class CartPage {
  static get cartIcon() {
    return cy.get("#shopping_cart_container");
  }

  static get cartList() {
    return cy.get(".cart_list");
  }

  // static get cartItems() {
  //   return cy.get(".cart_contents_container");
  // }

  static get cartItem() {
    return cy.get(".cart_item");
  }

  static get cartItemName() {
    return cy.get(".inventory_item_name");
  }

  static get checkoutButton() {
    return cy.get("#checkout");
  }
}

export default CartPage;

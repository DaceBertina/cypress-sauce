class CheckoutStepTwoPage {
  static get totalAmount() {
    return cy.get(".summary_total_label");
  }

  static get finishCheckout() {
    return cy.get("#finish");
  }
}

export default CheckoutStepTwoPage;

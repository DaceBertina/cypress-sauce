class CheckoutStepOnePage {
  static get checkoutButton() {
    return cy.get("#checkout");
  }

  static get setFirstName() {
    return cy.get("#first-name");
  }

  static get setLastName() {
    return cy.get("#last-name");
  }

  static get setZipCode() {
    return cy.get("#postal-code");
  }

  static get continueButton() {
    return cy.get("#continue");
  }
}

export default CheckoutStepOnePage;

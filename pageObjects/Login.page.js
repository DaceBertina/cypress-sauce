class LoginPage {
  static get url() {
    return "/";
  }

  static visit() {
    cy.visit(this.url);
  }

  static get usernameField() {
    return cy.get('[data-test="username"]');
  }

  static get passwordField() {
    return cy.get('[data-test="password"]');
  }

  static get errorMessage() {
    return cy.get("h3");
  }

  static get loginButton() {
    return cy.get('[data-test="login-button"]');
  }

  static logIntoPage(username, password) {
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
    // cy.location("pathname").should("eq", "/inventory.html");
  }
}

export default LoginPage;

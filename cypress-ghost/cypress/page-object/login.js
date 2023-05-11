class loginPage {
  elements = {
    emailInput: () => cy.get('input[name="identification"]'),
    passwordInput: () => cy.get('input[name="password"]'),
    loginBtn : () => cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]')
  }

  login(user, password) {
    cy.wait(1000)
    this.elements.emailInput().type(user);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
    cy.wait(1000)
  }
}


module.exports = new loginPage();
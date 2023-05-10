import configJson from '../../../config/config.json';
describe('edit info general', () => {
    it('Editar informacion titulo y descripcion de la pagina ', () => {
      cy.visit(configJson.host4_44)
      cy.wait(2000)
      cy.get('input[name="identification"]').type(configJson.user)
      cy.wait(2000)
      cy.get('input[name="password"]').type(configJson.password)
      cy.wait(2000)
      cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("private_page_general_p1");
      cy.get('a[href="#/settings/general/"]').click()
      cy.wait(2000)
      cy.screenshot("private_page_general_p2");
      cy.get('label[class="switch"]').click()
      cy.wait(2000)
      cy.screenshot("private_page_general_p3");
    })
})
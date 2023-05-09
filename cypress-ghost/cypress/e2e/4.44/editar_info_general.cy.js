import configJson from '../../../config/config.json';
describe('edit info general', () => {
    it('Editar informacion titulo y descripcion de la pagina ', () => {
      cy.visit(configJson.host)
      cy.wait(2000)
      cy.get('input[name="identification"]').type(configJson.user)
      cy.wait(2000)
      cy.get('input[name="password"]').type(configJson.password)
      cy.wait(2000)
      cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_info_general_p1");
      cy.get('a[href="#/settings/general/"]').click()
      cy.wait(2000)
      cy.screenshot("editar_info_general_p2");
      cy.get('button[data-ember-action-65="65"]').click()
      cy.wait(2000)
      cy.screenshot("editar_info_general_p3");
      cy.get('#ember100').clear().type('pruebas automatizadas 3',{force: true})
      cy.wait(2000)
      cy.get('#ember102').clear().type('descripicio de pruebas automatizadas',{force: true})
      cy.wait(2000)
      cy.screenshot("editar_info_general_p4");
      cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_info_general_p5");
      cy.get('button[data-ember-action-65="65"]').click()
      cy.wait(2000)
      cy.screenshot("editar_info_general_p6");
    })
})
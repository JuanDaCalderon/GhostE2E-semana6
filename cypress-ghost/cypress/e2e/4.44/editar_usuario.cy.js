import configJson from '../../../config/config.json';
describe('editar usuario', () => {
    it('Se hace editar al usuario', () => {
      cy.visit(configJson.host4_44)
      cy.wait(2000)
      cy.get('input[name="identification"]').type(configJson.user)
      cy.wait(2000)
      cy.get('input[name="password"]').type(configJson.password)
      cy.wait(2000)
      cy.get('button[class="login gh-btn gh-btn-login gh-btn-block gh-btn-icon js-login-button ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p1");
      cy.get('a[href="#/staff/"][class="ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p2");
      cy.get('a[href="#/staff/pruebas/"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p3");
      cy.get('input[id="user-name"]').clear().type('pruebas automatizadas 2',{force: true})
      cy.wait(2000)
      cy.screenshot("editar_usuario_p4");
      cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_usuario_p5");
      cy.get(".gh-canvas-title > a[href='#/staff/']").click();
      cy.wait(2000)
      cy.screenshot("editar_usuario_p6");
    })
})
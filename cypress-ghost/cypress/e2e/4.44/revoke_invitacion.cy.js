import configJson from '../../../config/config.json';

describe('revokar invitacion de usuario', () => {
    it('Se hace revokar invitacion de usuario', () => {
      cy.visit(configJson.host)
      cy.wait(2000)
      cy.get('input[name="identification"]').type(configJson.user)
      cy.wait(2000)
      cy.get('input[name="password"]').type(configJson.password)
      cy.wait(2000)
      cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p1");
      cy.get('a[href="#/staff/"][class="ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p2");
      cy.get('button[class="gh-btn gh-btn-green"]').click()
      cy.wait(5000)
      cy.screenshot("revoke_invitacion_p3");
      cy.get('input[name="email"]').type('prueba@prueba.com')
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p4");
      cy.get('button[class="gh-btn gh-btn-green gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p5");
      cy.reload()
      cy.wait(2000)
      cy.get('a[href="#revoke"]').click()
      cy.wait(2000)
      cy.screenshot("revoke_invitacion_p6");
    })
})
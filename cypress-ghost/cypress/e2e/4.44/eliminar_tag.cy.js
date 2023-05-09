import configJson from '../../config/config.json';
describe('Eliminar tag', () => {
    it('Se elimina un tag desde el inicio de sesión hasta la finalización de la eliminación', () => {
      cy.visit(configJson.host)
      cy.wait(2000)
      cy.get('input[name="identification"]').type(configJson.user)
      cy.wait(2000)
      cy.get('input[name="password"]').type(configJson.password)
      cy.wait(2000)
      cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.get('a[href="#/tags/"]').click()
      cy.wait(2000)
      cy.get('a[href="#/tags/new/"]:first').click()
      cy.wait(2000)
      cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
      cy.wait(2000)
      cy.get('#tag-description').type('Se elimina un tag de prueba para validar la funcionalidad')
      cy.wait(2000)
      cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.get('li:has(a[href="#/tags/"])').click()
      cy.wait(2000)
      cy.get("h3.gh-tag-list-name").contains("AAAAAAAAAA Tag prueba").should('exist');
      cy.wait(2000)
      cy.contains('h3', 'AAAAAAAAAA Tag prueba').click()
      cy.wait(2000)
      cy.get('button[class="gh-btn gh-btn-red gh-btn-icon mb15"]').click()
      cy.wait(2000)
      cy.get('button[class="gh-btn gh-btn-red gh-btn-icon ember-view"]').click()
      cy.wait(2000)
    })
  })
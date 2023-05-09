import configJson from '../../../config/config.json';
describe('Editar tag', () => {
  it('Se crea tag desde inicio de sesión hasta fin de la creación', () => {
    cy.visit(configJson.host)
    cy.wait(2000)
    cy.get('input[name="identification"]').type(configJson.user)
    cy.wait(2000)
    cy.get('input[name="password"]').type(configJson.password)
    cy.wait(2000)
    cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p1");
    cy.get('a[href="#/tags/"]').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p2");
    cy.get('a[href="#/tags/new/"]:first').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p3");
    cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
    cy.wait(2000)
    cy.screenshot("editar_tag_p4");
    cy.get('#tag-description').type('Se edita un tag de prueba para validar la funcionalidad')
    cy.wait(2000)
    cy.screenshot("editar_tag_p5");
    cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p6");
    cy.get('li:has(a[href="#/tags/"])').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p7");
    cy.contains('h3', 'AAAAAAAAAA Tag prueba').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p8");
    cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
    cy.wait(2000)
    cy.screenshot("editar_tag_p9");
    cy.get('#tag-description').type('Se edita un tag de prueba para validar la funcionalidad')
    cy.wait(2000)
    cy.screenshot("editar_tag_p10");
    cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p11");
    cy.get('li:has(a[href="#/tags/"])').click()
    cy.wait(2000)
    cy.screenshot("editar_tag_p12");
    cy.get("p.gh-tag-list-description").contains("edita").should('exist');
  })
})
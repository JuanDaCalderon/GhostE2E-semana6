import configJson from '../../../config/config.json';
describe('edit info general', () => {
    it('Editar informacion titulo y descripcion de la pagina ', () => {

      //Given I navigate to page "http://localhost:3002/ghost"  
      cy.visit(configJson.host4_44)
      cy.wait(2000)

      //When I enter email "<Usuario1>"
      //And I enter password "<Password1>"
      //And I click next
      loginPage.login(configJson.user, configJson.password);
      cy.wait(2000)

      //And I click settings general
      cy.get('a[href="#/settings/"]').click()
      cy.wait(2000)
      cy.get('a[href="#/settings/general/"]').click()
      cy.wait(2000)
      cy.screenshot("editar_info_general_p2");

      //And I click Expand 
      cy.get('button[data-ember-action-73="73"]').click()
      cy.wait(2000)
      cy.screenshot("editar_info_general_p3");

      //And I enter name user
      cy.get('#ember104').clear().type('pruebas automatizadas 3',{force: true})
      cy.wait(2000)

      //And I entre description
      cy.get('#ember106').clear().type('descripicio de pruebas automatizadas',{force: true})
      cy.wait(2000)
      cy.screenshot("editar_info_general_p4");

      //And I click Save settings
      cy.get('button[class="gh-btn gh-btn-primary gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("editar_info_general_p5");

      //And I click Expand 
      cy.get('button[data-ember-action-73="73"]').click()
      cy.wait(2000)
      cy.screenshot("editar_info_general_p6");
    })
})
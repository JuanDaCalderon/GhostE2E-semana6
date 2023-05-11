import { faker } from '@faker-js/faker';
import configJson from '../../../../config/config.json';
import loginPage from "../../../page-object/login";

let postData = {
    title: faker.name.fullName(),
    description: faker.name.fullName()
}

describe('Crear post programado', () => {


    it('Se crea un post programado - se valida que este en la lista', () => {
      
        //Given I navigate to page "http://localhost:3002/ghost"  
        cy.visit(configJson.host4_44);
        loginPage.login(configJson.user, configJson.password);
        cy.screenshot("crear_post_programado_p1");
    
        //And I click Posts menu
        cy.get(".gh-nav-list-new > a[href='#/posts/']").click();
        cy.wait(2000)
        cy.screenshot("crear_post_programado_p2");

        //And I click in New post 
        cy.get('.gh-nav-new-post').click();
        cy.wait(2000)
        cy.screenshot("crear_post_programado_p3");

        //And I write in post title "$dataPost.title" And I write in post description "$dataPost.description"
        cy.get('.gh-editor-title').type(postData.title);
        cy.get('.koenig-editor__editor').type(postData.description);
     
        //And I click in Publish button And I wait for 2 seconds
        cy.get('.gh-publishmenu').click();
        cy.wait(2000);
        cy.screenshot("crear_post_programado_p4");

        //And I click Schedule it for later And I wait for 2 seconds
        cy.get('.gh-publishmenu-radio').contains('Schedule it for later').click();
        cy.wait(2000);
        cy.screenshot("crear_post_programado_p5");

        //And I click Schedule button And I wait for 6 seconds
        cy.get('.gh-publishmenu-button').click();
        cy.wait(6000);
        cy.screenshot("crear_post_programado_p6");

        //And I click in Cancel button And I wait for 2 seconds
        cy.get('button[class="gh-btn gh-btn-black gh-btn-icon ember-view"]').click();
        cy.wait(6000);
        cy.screenshot("crear_post_programado_p7");
    
        //And I click in Posts And  I wait for 2 seconds
        cy.get('.ml3').click();
        cy.wait(2000);
        cy.screenshot("crear_post_programado_p8");

        //And I click scheduled posts menu And I wait for 5 seconds
        cy.get("a[href='#/posts/?type=scheduled']").click();
        cy.wait(5000);
        cy.screenshot("crear_post_programado_p9");

        //Then I check Post with title "$$dataPost.title" is in the list 
        cy.get("h3.gh-content-entry-title").contains(postData.title).should('exist');

        });

    })
  
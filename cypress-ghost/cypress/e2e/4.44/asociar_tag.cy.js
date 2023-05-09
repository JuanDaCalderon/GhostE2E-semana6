import configJson from '../../../config/config.json';
describe('Asociar tag', () => {
    it('Se asocia un tag desde el inicio de sesión hasta la finalización de la creación', () => {
      cy.visit(configJson.host)
      cy.wait(2000)
      cy.get('input[name="identification"]').type(configJson.user)
      cy.wait(2000)
      cy.get('input[name="password"]').type(configJson.password)
      cy.wait(2000)
      cy.get('button[class="login gh-btn gh-btn-blue gh-btn-block gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p1")
      cy.get('a[href="#/tags/"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p2")
      cy.get('a[href="#/tags/new/"]:first').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p3")
      cy.get('#tag-name').type('AAAAAAAAAA Tag prueba')
      cy.wait(2000)
      cy.get('#tag-description').type('Se asocia un tag de prueba para validar la funcionalidad')
      cy.wait(2000)
      cy.get('button[class="gh-btn gh-btn-blue gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p4")
      cy.get('.gh-nav-new-post').click();
      cy.wait(2000)
      cy.screenshot("asociar_tag_p5")
      cy.get('.gh-editor-title').type('AAAAAAAAAA Tag prueba');
      cy.get('.koenig-editor__editor').type('Se asocia un tag de prueba para validar la funcionalidad');
      cy.get('.gh-publishmenu').click();
      cy.wait(2000);
      cy.screenshot("asociar_tag_p6")
      cy.get('.gh-publishmenu-button').click();
      cy.wait(2000);
      cy.screenshot("asociar_tag_p7")
      cy.get('.gh-btn.gh-btn-outline.gh-btn-link').click();
      cy.wait(2000);
      cy.screenshot("asociar_tag_p8")
      cy.get('.blue.link.fw4.flex.items-center.ember-view').click();
      cy.wait(2000);
      cy.screenshot("asociar_tag_p9")
      cy.get("a[href='#/posts/?type=published']").click();
      cy.wait(2000);
      cy.screenshot("asociar_tag_p10")
      cy.contains('h3', 'AAAAAAAAAA Tag prueba').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p11")
      cy.get('button[class="post-settings"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p12")
      cy.get('#tag-input').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p13")
      cy.contains('li', 'AAAAAAAAAA Tag prueba').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p14")
      cy.get('button[class="close settings-menu-header-action"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p15")
      cy.get('div.gh-publishmenu-trigger').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p16")
      cy.get('button[class="gh-btn gh-btn-blue gh-publishmenu-button gh-btn-icon ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p17")
      cy.get('a[class="blue link fw4 flex items-center ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p18")
      cy.get(".gh-nav-list-new > a[href='#/posts/']").click();
      cy.wait(2000)
      cy.screenshot("asociar_tag_p19")
      cy.get("a[href='#/posts/?type=published']").click();
      cy.wait(2000);
      cy.screenshot("asociar_tag_p20")
      cy.contains('h3', 'AAAAAAAAAA Tag prueba').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p21")
      cy.get('button[class="post-settings"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p22")
      cy.get('button[class="close settings-menu-header-action"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p23")
      cy.get('a[class="blue link fw4 flex items-center ember-view"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p24")
      cy.get('a[href="#/tags/"]').click()
      cy.wait(2000)
      cy.screenshot("asociar_tag_p25")
      cy.get("h3.gh-tag-list-name").contains("AAAAAAAAAA Tag prueba").should('exist');
    })
})
      
      
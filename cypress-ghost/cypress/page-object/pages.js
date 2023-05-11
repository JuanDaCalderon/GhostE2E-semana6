class PagesPage {
    elements = {
        navBarPageDriver: () => cy.get("a[href='#/pages/']"),
        newPageButton: () => cy.get(".view-actions a[href='#/editor/page/']"),
        titleInputPage: () => cy.get('.gh-editor-title.ember-text-area'),
        descriptionInputPage: () => cy.get('.koenig-editor__editor-wrapper'),
        dropdownPublish: () => cy.get('.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger'),
        PublishButton: () => cy.get('.gh-publishmenu-footer .gh-publishmenu-button'),

        settingsPageMenu: () => cy.get('button.post-settings'),
        deleteButtonPageMenu: () => cy.get('button.settings-menu-delete-button'),
        deleteButtonModal: () => cy.get('.modal-content > .modal-footer > .gh-btn-red'),
    }

    goToAnchorButtonPage() {
        cy.wait(1000)
        this.elements.navBarPageDriver().click();
        cy.wait(1000)
    }

    goToNewPageFromListPageView() {
        cy.wait(1000)
        this.elements.navBarPageDriver().click();
        this.elements.newPageButton().click();
        cy.wait(1000)
    }

    typeTitleAndDescription(title, description) {
        cy.wait(1000)
        this.elements.titleInputPage().type(title);
        this.elements.descriptionInputPage().type(description);
        cy.wait(1000)
    }

    publishPage() {
        cy.wait(1000)
        this.elements.dropdownPublish().click();
        this.elements.PublishButton().click();
        cy.wait(1000)
    }

    deletePage(){
        cy.wait(1000)
        this.elements.settingsPageMenu().click();
        this.elements.deleteButtonPageMenu().click();
        cy.wait(1000)
        this.elements.deleteButtonModal().click();
        cy.wait(1000)
    }

    cleanRecentPage(pageToBeClean) {
        cy.wait(1000)
        pageToBeClean.click();
        this.deletePage();
        cy.wait(1000)
    }
}

module.exports = new PagesPage();
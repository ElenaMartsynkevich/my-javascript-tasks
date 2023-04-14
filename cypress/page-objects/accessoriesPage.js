import searchResultsPage from "./searchResultsPage";

class AccessoriesPage {
    open() {
        cy.visit(`${Cypress.env('googleUrl')}collection/accessories_wall?hl=en-EU`);
    }

    get searchIcon() {
        return cy.get('div.gn5mEf.uFvxge')
    }

    get searchInput(){
        return cy.get('input[aria-label = "Search the Google Store"]');
    }

    performSearch(productToSearch) {
        this.searchIcon.click();
        this.searchInput.type(`${productToSearch} {enter}`);
    }
}

export default new AccessoriesPage();
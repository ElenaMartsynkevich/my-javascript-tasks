class SearchResultsPage {

    get phonesTab() {
       return cy.get('#mobile-nav')
       .find(`a[data-category-id="phones_product_link"]`);
    }

    
    get burgerMenu() {
       return cy.get(`#hamburger-menu`);
    }


}

export default new SearchResultsPage()
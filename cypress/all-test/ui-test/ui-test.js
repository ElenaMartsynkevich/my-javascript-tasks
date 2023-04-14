import Chance from 'chance'
import SearchResultsPage from '../../page-objects/searchResultsPage'
import AccessoriesPage from '../../page-objects/accessoriesPage'

//без page object

/*describe('Test fors] reqres', () => {

    it('Positive: Create user', () => {
    cy.fixture('user').then(user => {
     cy.visit('https://store.google.com/us/collection/accessories_wall?hl=en-US&regionRedirect=true')
     cy.get('div.gn5mEf.uFvxge').click()
     cy.get('input[aria-label = "Search the Google Store"]').type(`Pixel 7 Pro Case{enter}`)
     cy.get('a[href="/category/phones"]').should('exist')

             })
         })
    })
    */

// с page object
   /* describe('Test fors] reqres', () => {
    
        it('Positive: Create user', () => {
        
        cy.fixture('product').then(product => {

        
        cy.log("GIVEN User is at Accessories Page")
         AccessoriesPage.open()

         cy.log("WHEN User performs search product by name")
         AccessoriesPage.performSearch(product.name)

        // SearchResultsPage.getProductByDocID(product.url)
          //.should('exist')
          cy.get('a[href="/category/phones"]').should('exist')
    
                 })
             })
            })*/
        
          

    describe('UI tests', () => {
        before(() => {
            cy.fixture('product').then(data => {
                cy.wrap(data).as('productData')
        })
    })

    it('Positive: Create user', () => {
        cy.get('@productData').then(productData => {
            
            cy.log("GIVEN User is at Accessories Page")
            AccessoriesPage.open()
            
            cy.log("WHEN User performs search product by name")
            AccessoriesPage.performSearch(productData.name)
            
            
            // SearchResultsPage.getProductByDocID(product.url)
            //.should('exist')
            SearchResultsPage.burgerMenu.click()
            SearchResultsPage.phonesTab.click()
            
            
        })
    })
})
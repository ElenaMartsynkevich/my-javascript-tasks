import Chance from 'chance'
import { request } from 'har-validator'
describe('Test fors] reqres', () => {
    before(() => {
      
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('Positive: Create user', () => {
    cy.fixture('user').then(user => {
     cy.request('Post', '/api/users', user).then(response => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('name', user.name)
        expect(response.body).to.have.property('job', user.job)

             })
         })
    })

let testingData = [
        {
            description: "Max values",
            requestData: {
                name: Chance().string({length: 100}),
                job: Chance().string({length: 100})
            }
        },
        {
            description: "Min values",
            requestData: {
                name: Chance().string({length: 1}),
                job: Chance().string({length: 1})
            }
        }
    ]

    testingData.forEach(({description, requestData}) => {
        it(`Positive: Create user ${description}`, () => {
             cy.request('Post', '/api/users', requestData).then(response => {
                expect(response.status).to.eq(201)
                expect(response.body).to.have.property('name', requestData.name)
                expect(response.body).to.have.property('job', requestData.job)
    
                 })
            }) 
    
    });


    it('Negative: POST login unsuccessful', () => {
         cy.request({method: 'Post', url: '/api/login', failOnStatusCode: false, body: {"email": "peter@klaven"}}).then(response => {
            expect(response.status).to.eq(400)
         })
     })
})
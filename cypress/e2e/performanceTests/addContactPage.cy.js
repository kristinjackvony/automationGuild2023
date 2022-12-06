describe('Add Contact page performance', () => {

  beforeEach(() => {
    cy.loginAPI().then((response) => {
          Cypress.env('token', response.body.token)
    })
  })

    it('Loads the page in under four seconds', () => {
      cy.visit('/addContact')
      cy.lighthouse({
        performance: 90,
        'first-contentful-paint': 3000,
        'largest-contentful-paint': 4000,
        'cumulative-layout-shift': 0.25
      })
    })

  	it('Responds to POST request in under 500 ms', () => {
      cy.addContactAPI(Cypress.env('Contact')).then((response) => {
        var id = response.body._id
        expect(response.duration).to.not.be.greaterThan(400)
        cy.getContactAPI(id).then(() => {
          cy.deleteContactAPI(id)
        })
      })
    })

  })

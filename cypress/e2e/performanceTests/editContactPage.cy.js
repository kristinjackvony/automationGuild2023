describe('Edit Contact page performance', () => {

  beforeEach(() => {
    cy.loginAPI().then((response) => {
          Cypress.env('token', response.body.token)
    })
  })

    it('Loads the page in under four seconds', () => {
      cy.addContactAPI(Cypress.env('Contact'))
      cy.visit('/contactList')
      cy.getContactDetails(Cypress.env('Contact'))
      cy.lighthouse({
        performance: 90,
        'first-contentful-paint': 3000,
        'largest-contentful-paint': 4000,
        'cumulative-layout-shift': 0.25
      })
      cy.get('#delete').click()
      cy.on('window:confirm', () => true)
    })

  	it('Responds to PUT request in under 500 ms', () => {
      cy.addContactAPI(Cypress.env('Contact')).then((response) => {
        var id = response.body._id
        cy.updateContactAPI(id, Cypress.env('Contact2')).should((response) => {
          expect(response.duration).to.not.be.greaterThan(400)
        }).then(() => {
          cy.deleteContactAPI(id)
        })
      })
    })

  })

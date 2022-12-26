describe('Add Contact', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Adds a new contact', () => {
    cy.addContact(Cypress.env('Contact'))
    cy.contains('Prunella Prunewhip').click()

    cy.get('#firstName').should('contain', 'Prunella')
    cy.get('#lastName').should('contain', 'Prunewhip')
    cy.get('#birthdate').should('contain', '1969-05-13')
    cy.get('#email').should('contain', 'pprunewhip@fake.com')
    cy.get('#phone').should('contain', '8008675309')
    cy.get('#street1').should('contain', '123 Sesame St.')
    cy.get('#street2').should('contain', 'Apt. A')
    cy.get('#city').should('contain', 'New York')
    cy.get('#stateProvince').should('contain', 'NY')
    cy.get('#postalCode').should('contain', '01234')
    cy.get('#country').should('contain', 'USA')

    cy.get('#delete').click()
    cy.on('window:confirm', () => true)
  })

  it('Returns an appropriate error message when a field is invalid', () => {
    cy.get('#add-contact').click()
    cy.get('#firstName').type("Prunella")
    cy.get('#submit').click()

    cy.get('#error').should('contain', '`lastName` is required')
  })

})
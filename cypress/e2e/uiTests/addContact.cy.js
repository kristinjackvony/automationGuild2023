describe('Add Contact', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Adds a new contact', () => {
    var Contact = Cypress.env('Contact')
    cy.addContact(Contact)
    cy.contains(`${Contact.firstName} ${Contact.lastName}`).click()

    cy.get('#firstName').should('contain', Contact.firstName)
    cy.get('#lastName').should('contain', Contact.lastName)
    cy.get('#birthdate').should('contain', Contact.birthdate)
    cy.get('#email').should('contain', Contact.email)
    cy.get('#phone').should('contain', Contact.phone)
    cy.get('#street1').should('contain', Contact.street1)
    cy.get('#street2').should('contain', Contact.street2)
    cy.get('#city').should('contain', Contact.city)
    cy.get('#stateProvince').should('contain', Contact.stateProvince)
    cy.get('#postalCode').should('contain', Contact.postalCode)
    cy.get('#country').should('contain', Contact.country)

    cy.get('#delete').click()
    cy.on('window:confirm', () => true)
  })

  it('Returns an appropriate error message when a required field is missing', () => {
    cy.get('#add-contact').click()
    cy.get('#firstName').type("Prunella")
    cy.get('#submit').click()

    cy.get('#error').should('contain', '`lastName` is required')
  })

})
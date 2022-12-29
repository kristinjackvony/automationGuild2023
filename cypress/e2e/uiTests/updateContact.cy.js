describe('Update Contact', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Updates a contact', () => {
		var Contact = Cypress.env('Contact')
		var Contact2 = Cypress.env('Contact2')

    cy.addContact(Contact)
    cy.contains(`${Contact.firstName} ${Contact.lastName}`).click()
		
		cy.editContact(Contact2)
    cy.get('#firstName').should('contain', Contact2.firstName)
    cy.get('#lastName').should('contain', Contact2.lastName)
    cy.get('#birthdate').should('contain', Contact2.birthdate)
    cy.get('#email').should('contain', Contact2.email)
    cy.get('#phone').should('contain', Contact2.phone)
    cy.get('#street1').should('contain', Contact2.street1)
    cy.get('#street2').should('contain', Contact2.street2)
    cy.get('#city').should('contain', Contact2.city)
    cy.get('#stateProvince').should('contain', Contact2.stateProvince)
    cy.get('#postalCode').should('contain', Contact2.postalCode)
    cy.get('#country').should('contain', Contact2.country)

    cy.get('#delete').click()
    cy.on('window:confirm', () => true)
  })

  it('Returns an appropriate error message when a field is invalid', () => {
		var Contact = Cypress.env('Contact')
		cy.addContact(Cypress.env('Contact'))
    cy.contains(`${Contact.firstName} ${Contact.lastName}`).click()
    cy.get('#edit-contact').click()
    cy.get('#birthdate').clear().type('1971-02-29')
    cy.get('#submit').click()
  
    cy.get('#error').should('contain', 'Birthdate is invalid')
    
    cy.get('#cancel').click()
    cy.get('#delete').click()
    cy.on('window:confirm', () => true)
	})

})
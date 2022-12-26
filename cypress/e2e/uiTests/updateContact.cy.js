describe('Update Contact', () => {

  beforeEach(() => {
    cy.login()
  })

  it('Updates a contact', () => {
    cy.addContact(Cypress.env('Contact'))
    cy.contains('Prunella Prunewhip').click()
    cy.get('#edit-contact').click()


    cy.get('#firstName').clear().type('Joe')
    cy.get('#lastName').clear().type('Schmoe')
    cy.get('#birthdate').clear().type('1977-07-07')
    cy.get('#email').clear().type('jschmoe@fake.com')
    cy.get('#phone').clear().type('8005551000')
    cy.get('#street1').clear().type('1313 Mockingbird Lane')
    cy.get('#street2').clear().type('Unit 2')
    cy.get('#city').clear().type('Toronto')
    cy.get('#stateProvince').clear().type('ON')
    cy.get('#postalCode').clear().type('A1B2C3')
    cy.get('#country').clear().type('Canada')
    cy.get('#submit').click()

    cy.get('#firstName').should('contain', 'Joe')
    cy.get('#lastName').should('contain', 'Schmoe')
    cy.get('#birthdate').should('contain', '1977-07-07')
    cy.get('#email').should('contain', 'jschmoe@fake.com')
    cy.get('#phone').should('contain', '8005551000')
    cy.get('#street1').should('contain', '1313 Mockingbird Lane')
    cy.get('#street2').should('contain', 'Unit 2')
    cy.get('#city').should('contain', 'Toronto')
    cy.get('#stateProvince').should('contain', 'ON')
    cy.get('#postalCode').should('contain', 'A1B2C3')
    cy.get('#country').should('contain', 'Canada')

    cy.get('#delete').click()
    cy.on('window:confirm', () => true)
  })

  it('Returns an appropriate error message when a field is invalid', () => {
    cy.addContact(Cypress.env('Contact'))
    cy.contains('Prunella Prunewhip').click()
    cy.get('#edit-contact').click()
    cy.get('#birthdate').clear().type('1971-02-29')
    cy.get('#submit').click()
  
    cy.get('#error').should('contain', 'Birthdate is invalid')
    
    cy.get('#cancel').click()
    cy.get('#delete').click()
    cy.on('window:confirm', () => true)
  })

})
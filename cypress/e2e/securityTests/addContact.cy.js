describe('Add Contact Security', () => {

  it('Should not be able to add a contact without a token', () => {
		cy.request({
      failOnStatusCode: false,
      method: 'POST',
      url: 'http://thinking-tester-contact-list.herokuapp.com/contacts',
      body: {
        'firstName': 'Prunella',
        'lastName': 'Prunewhip'
      }
    }).should((response) => {
      expect(response.status).to.eq(401)
    })
  })
  
  it('Should not be able to add a contact through the web when not logged in', () => {
    cy.visit('/addContact')
    cy.get('#firstName').type('Prunella')
    cy.get('#lastName').type('Prunewhip')
    cy.get('#submit').click()
    cy.get('#error').should('contain', 'undefined')
  })
		
})
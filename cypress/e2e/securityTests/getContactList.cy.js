describe('Get Contact List Security', () => {

  it('Should not be able to get a contact list through the API without a token', () => {
    cy.request({
      failOnStatusCode: false,
      method: 'GET',
      url: 'http://thinking-tester-contact-list.herokuapp.com/contacts',
      }).should((response) => {
        expect(response.status).to.eq(401)
      })
    })

    it('Should not be able to get a contact list through the web when not logged in', () => {
      cy.visit('/contactList').then(() => {
        cy.get('#contactTable').should('not.exist')
      })
    })
     
  })
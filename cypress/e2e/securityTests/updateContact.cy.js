describe('Update Contact Security', () => {

	before(() => {
		cy.loginAPI().then((response) => {
			Cypress.env('token', response.body.token)
		})
  })

  it('Should not be able to update a contact without a token', () => {
		cy.loginAPI().then((response) => {
			Cypress.env('token', response.body.token)
		})
		cy.addContactAPI(Cypress.env('Contact')).then((response) => {
			var id = response.body._id
			cy.request({
				failOnStatusCode: false,
				method: 'PUT',
        url: `http://thinking-tester-contact-list.herokuapp.com/contacts/${id}`,
        body: {
          'firstName': 'Joe',
          'lastName': 'Schmoe'
        }
			}).should((response) => {
				expect(response.status).to.eq(401)
			}).then(() => {
				cy.deleteContactAPI(id)
			})
		})
	})

	it('Should not be able to update a contact through the web when not logged in', () => {
		cy.visit('/editContact')
		cy.get('#firstName').type('Prunella')
    cy.get('#lastName').type('Prunewhip')
    cy.get('#submit').click()
    cy.get('#error').should('contain', 'undefined')
  })
	
})
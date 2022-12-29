describe('Get Contact Security', () => {

  it('Should not be able to get a contact without a token', () => {
		cy.loginAPI().then((response) => {
			Cypress.env('token', response.body.token)
		})
		cy.addContactAPI(Cypress.env('Contact')).then((response) => {
			var id = response.body._id
			cy.request({
				failOnStatusCode: false,
				method: 'GET',
				url: `http://thinking-tester-contact-list.herokuapp.com/contacts/${id}`,
		}).should((response) => {
			expect(response.status).to.eq(401)
			}).then(() => {
				cy.deleteContactAPI(id)
			})
		})
	})

	it('Should not be able to view contact details through the web when not logged in', () => {
		cy.visit('/contactDetails')
		cy.get('#firstName').should('have.value', '')
  })
	
})
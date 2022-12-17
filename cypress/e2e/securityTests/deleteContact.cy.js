describe('Delete Contact Security', () => {

	before(() => {
		cy.loginAPI().then((response) => {
			Cypress.env('token', response.body.token)
		})
  })

  it('Should not be able to delete a contact without a token', () => {
		cy.addContactAPI(Cypress.env('Contact')).then((response) => {
		var id = response.body._id
		cy.request({
			failOnStatusCode: false,
			method: 'DELETE',
        url: `http://thinking-tester-contact-list.herokuapp.com/contacts/${id}`,
		}).should((response) => {
			expect(response.status).to.eq(401)
			}).then(() => {
				cy.deleteContactAPI(id)
			})
		})
	})
	
})
describe('Add Contact', () => {

	beforeEach(() => {
	cy.loginAPI()
  })

  	it('Adds a new contact', () => {
		cy.addContactAPI(Cypress.env('Contact')).then((response) => {
			var id = response.body._id
			cy.getContactAPI(id).should((response) => {
				expect(response.body).property('firstName').to.equal(Cypress.env('Contact').firstName)
			}).then(() => {
				cy.deleteContactAPI(id)
			})
		})
	})

	it('Returns error when lastName is missing', () => {
		cy.addContactAPI(Cypress.env('IncompleteContact')).should((response) => {
			expect(response.body).property('message').to.contain('`lastName` is required')
		})
	})
		
})

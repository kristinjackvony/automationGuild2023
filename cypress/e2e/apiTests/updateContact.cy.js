describe('Update Contact', () => {

	beforeEach(() => {
	cy.loginAPI()
  })

  	it('Updates a contact', () => {
		cy.addContactAPI(Cypress.env('Contact')).then((response) => {
			var id = response.body._id
			cy.updateContactAPI(id, Cypress.env('Contact2')).should((response) => {
				expect(response.body).property('firstName').to.equal(Cypress.env('Contact2').firstName)
			}).then(() => {
				cy.deleteContactAPI(id)
			})
		})
	})

	it('Returns error when firstName is missing', () => {
		cy.addContactAPI(Cypress.env('Contact')).then((response) => {
			var id = response.body._id
			cy.updateContactAPI(id, Cypress.env('IncompleteContact2')).should((response) => {
                expect(response.body).property('message').to.contain('`firstName` is required')
                cy.deleteContactAPI(id)
			})
		})
	})
		
})

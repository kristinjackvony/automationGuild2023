describe('Get Contact', () => {

	beforeEach(() => {
		cy.loginAPI().then((response) => {
			Cypress.env('token', response.body.token)
		})
  	})

  	it('Gets a contact', () => {
		cy.addContactAPI(Cypress.env('Contact')).then((response) => {
			var id = response.body._id
			cy.getContactAPI(id).should((response) => {
				expect(response.body).property('lastName').to.equal(Cypress.env('Contact').lastName)
			}).then(() => {
				cy.deleteContactAPI(id)
			})
		})
	})

	it('Returns a 404 when the contact does not exist', () => {
		cy.getContactAPI('637ed317acfdbd00158b7f9f').should((response) => {
			expect(response.status).to.eq(404)
		})
	})
	
})
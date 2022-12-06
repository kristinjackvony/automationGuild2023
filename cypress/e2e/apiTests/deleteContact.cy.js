describe('Get Contact', () => {

	beforeEach(() => {
		cy.loginAPI().then((response) => {
            Cypress.env('token', response.body.token)
        })
  	})

  	it('Deletes a contact', () => {
		cy.addContactAPI(Cypress.env('Contact')).then((response) => {
			var id = response.body._id
			cy.deleteContactAPI(id).then(() => {
				cy.getContactAPI(id).should((response) => {
                    expect(response.status).to.eq(404)
                })
			})
		})
	})

	it('Returns a 401 error when the auth token is missing', () => {
        cy.addContactAPI(Cypress.env('Contact')).then((response) => {
            var id = response.body._id
            cy.request({
                failOnStatusCode: false,
                method: 'DELETE',
                url: `http://thinking-tester-contact-list.herokuapp.com/contacts/${id}`
            }).should((response) => {
                expect(response.status).to.eq(401)
                cy.deleteContactAPI(id)
            })
        })
  	})
	
})
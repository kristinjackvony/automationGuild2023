describe('Get Contact List', () => {

	beforeEach(() => {
    	cy.loginAPI().then((response) => {
			Cypress.env('token', response.body.token)
		})
  	})

  	it('Gets the contact list', () => {
		cy.addContactAPI(Cypress.env('Contact')).then((response) => {
			var id1 = response.body._id
			cy.addContactAPI(Cypress.env('Contact2')).then((response) => {
				var id2 = response.body._id
				cy.getContactListAPI().should((response) => {
					expect(response.body).length.to.be.above(1)
					cy.deleteContactAPI(id1)
    				cy.deleteContactAPI(id2)
				})
			})
		})
    })
  
  	it('Returns a 401 error when the auth token is missing', () => {
    	cy.request({
      		failOnStatusCode: false,
      		method: 'GET',
      		url: 'http://thinking-tester-contact-list.herokuapp.com/contacts'
    	}).should((response) => {
      		expect(response.status).to.eq(401)
    	})
  	})
		
})
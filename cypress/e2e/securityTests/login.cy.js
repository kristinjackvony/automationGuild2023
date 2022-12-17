describe('Login Security', () => {

	beforeEach(() => {
     cy.visit('/')   
  })

  it('Shows an appropriate error message when the email is incorrect', () => {
		cy.get('#email').type('notanaccount@fake.com')
    cy.get('#password').type('foobarboo')
    cy.get('#submit').click()
    cy.get('#error').should('contain', 'Incorrect username or password')
	})

	it('Shows an appropriate error message when the password is incorrect', () => {
		cy.get('#email').type('oneitem@fake.com')
    cy.get('#password').type('notthepassword')
    cy.get('#submit').click()
    cy.get('#error').should('contain', 'Incorrect username or password')
	})

	it('Shows an appropriate error message when both the email password are incorrect', () => {
		cy.get('#email').type('notanaccount@fake.com')
    cy.get('#password').type('notthepassword')
    cy.get('#submit').click()
    cy.get('#error').should('contain', 'Incorrect username or password')
	})
		
})
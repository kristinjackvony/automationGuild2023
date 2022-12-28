describe('Login Page Accessibility Test', () => {
    
  it('Passes accessibility test on Login page', () => {
		cy.visit('/')
		cy.pa11y()
  })
        
})
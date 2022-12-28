describe('Contact List Page Accessibility Test', () => {
    
    it('Passes accessibility test on Contact List page', () => {
        cy.login()  
        cy.pa11y()
    })
          
  })
describe('Add Contact Page Accessibility Test', () => {
    
    it('Passes accessibility test on Add Contact page', () => {
        cy.login()  
        cy.visit('/addContact')
        cy.pa11y()
    })
          
  })
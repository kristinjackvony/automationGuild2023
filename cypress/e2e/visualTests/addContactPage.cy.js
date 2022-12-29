describe('Add Contact Page Visual Tests', () => {

  beforeEach(() => {
  	cy.loginAPI().then((response) => {
      Cypress.env('token', response.body.token)
      })
      cy.visit('/addContact')
    })
  
    it('Add Contact page renders correctly', () => {
      cy.eyesOpen({
        appName: 'Contact List App',
        testName: 'Add Contact Page',
      })
  
      cy.eyesCheckWindow({
        tag: "Add Contact Window",
        target: 'window',
        fully: true
      })
  
      cy.eyesClose()       
    })
  
    it('Displays error when adding a bad contact', () => {
      cy.get('#firstName').type('Prunella')
    	cy.get('#lastName').type('Prunewhip')
    	cy.get('#email').type('pprunewhip@fake')
      cy.get('#submit').click()
  
      cy.eyesOpen({
        appName: 'Contact List App',
        testName: 'Email Error',
      })
  
      cy.eyesCheckWindow({
        tag: "Email Error Message",
        target: 'window',
        fully: true
      })
  
      cy.eyesClose()
    })
      
  })
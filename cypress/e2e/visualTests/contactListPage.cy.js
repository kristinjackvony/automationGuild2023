describe('Contact List Page Visual Tests', () => {
  
  it('Contact List page renders correctly', () => {

    cy.loginAPI().then((response) => {
      Cypress.env('token', response.body.token)
		})
		
		cy.visit('/contactList')
        
    cy.eyesOpen({
      appName: 'Contact List App',
      testName: 'Contact List Page',
    })
  
    cy.eyesCheckWindow({
      tag: "Contact List Window",
      target: 'window',
      fully: true
    });
  
      cy.eyesClose()       
    })
      
  })
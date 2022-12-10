describe('Contact Details Page Visual Tests', () => {

  beforeEach(() => {
  	cy.loginAPI().then((response) => {
      Cypress.env('token', response.body.token)
      })
    })
  
    it('Contact Details page renders correctly', () => {

      cy.addContactAPI(Cypress.env('Contact')).then((response) => {
        var id = response.body._id
        cy.visit('/contactList')
        cy.getContactDetails(Cypress.env('Contact')).then(() => {
          cy.eyesOpen({
            appName: 'Contact List App',
            testName: 'Contact Details Page',
          })
      
          cy.eyesCheckWindow({
            tag: "Contact Details Window",
            target: 'window',
            fully: true
          })
      
          cy.eyesClose()  
        })

        cy.getContactAPI(id).then(() => {
          cy.deleteContactAPI(id)
        })
      })      
    })
  
  })
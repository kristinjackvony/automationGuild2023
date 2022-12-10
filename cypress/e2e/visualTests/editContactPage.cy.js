describe('Edit Contact Page Visual Tests', () => {

  beforeEach(() => {
  	cy.loginAPI().then((response) => {
      Cypress.env('token', response.body.token)
      })
    })
  
    it('Edit Contact page renders correctly', () => {

      cy.addContactAPI(Cypress.env('Contact')).then((response) => {
        var id = response.body._id
        cy.visit('/contactList')
        cy.getContactDetails(Cypress.env('Contact')).then(() => {
          cy.get('#edit-contact').click()
          cy.eyesOpen({
            appName: 'Contact List App',
            testName: 'Edit Contact Page',
          })
      
          cy.eyesCheckWindow({
            tag: "Edit Contact Window",
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

    it('Displays error when updating contact with bad data', () => {

      cy.addContactAPI(Cypress.env('Contact')).then((response) => {
        var id = response.body._id
        cy.visit('/contactList')
        cy.getContactDetails(Cypress.env('Contact')).then(() => {
          cy.get('#edit-contact').click()
          cy.get('#phone').type('111')
          cy.get('#submit').click()
          cy.eyesOpen({
            appName: 'Contact List App',
            testName: 'Phone Error',
          })
      
          cy.eyesCheckWindow({
            tag: "Phone Error Message",
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
describe('Contact List page performance', () => {
    
  beforeEach(() => {
    cy.loginAPI().then((response) => {
          Cypress.env('token', response.body.token)
    })
  })
  
  it('Loads the page in under four seconds', () => {
    cy.visit('/contactList')
    cy.lighthouse({
      performance: 85,
      'first-contentful-paint': 3000,
      'largest-contentful-paint': 4000,
      'cumulative-layout-shift': 0.25
    })
  })

  it('Responds to GET list request in under 300 ms', () => {
    cy.getContactListAPI().then((response) => {
      expect(response.duration).to.not.be.greaterThan(300)
    })
  })
})
describe('Delete Contact performance', () => {

  before(() => {
    cy.loginAPI().then((response) => {
          Cypress.env('token', response.body.token)
    })
  })

    it('Responds to DELETE request in under 500 ms', () => {
      cy.addContactAPI(Cypress.env('Contact')).then((response) => {
        var id = response.body._id
        cy.getContactAPI(id).then(() => {
          cy.deleteContactAPI(id).should((response) => {
            expect(response.duration).to.not.be.greaterThan(500)
        })
      })
    })
  })

})

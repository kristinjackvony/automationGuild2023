describe('Login page performance', () => {
    it('Loads the page in under four seconds', () => {
      cy.visit('/')
      cy.lighthouse({
        performance: 90,
        'first-contentful-paint': 3000,
        'largest-contentful-paint': 4000,
        'cumulative-layout-shift': 0.25
      })
    })

    it('Responds to login request in under 500 ms', () => {
      cy.loginAPI().then((response) => {
        expect(response.duration).to.not.be.greaterThan(500)
        })
      })
    })
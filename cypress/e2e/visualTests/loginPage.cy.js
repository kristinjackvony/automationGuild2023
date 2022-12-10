describe('Add Contact', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Login page renders correctly', () => {
    cy.eyesOpen({
      appName: 'Contact List App',
      testName: 'Login Page',
    })

    cy.eyesCheckWindow({
      tag: "Login Window",
      target: 'window',
      fully: true
    });

    cy.eyesClose()       
  })

  it('Returns error when login fails', () => {
    cy.get('#email').type('oneitem@fake.com')
    cy.get('#password').type('badpassword')
    cy.get('#submit').click()

    cy.eyesOpen({
      appName: 'Contact List App',
      testName: 'Login Error',
    })

    cy.eyesCheckWindow({
      tag: "Login Error Message",
      target: 'window',
      fully: true
    });

    cy.eyesClose()
	})
	
})
import "@cypress-audit/lighthouse/commands"
import "@cypress-audit/pa11y/commands"

Cypress.Commands.add('loginAPI', () => {
  cy.request({
    failOnStatusCode: false,
    method: 'POST',
    url: 'http://thinking-tester-contact-list.herokuapp.com/users/login',
    body: {
      'email': 'oneitem@fake.com',
      'password': 'foobarfoo'
    }   
  }).then((response) => {
    Cypress.env('token', response.body.token)
  })
})

Cypress.Commands.add('addContactAPI', (Contact) => {
  cy.request({
    failOnStatusCode: false,
    method: 'POST',
    url: 'http://thinking-tester-contact-list.herokuapp.com/contacts',
    headers: {'Authorization': `Bearer ${Cypress.env('token')}` },
    body: {
      'firstName': Contact.firstName,
      'lastName': Contact.lastName,
      'birthdate': Contact.birthdate,
      'email': Contact.email,
      'phone': Contact.phone,
      'street1': Contact.street1,
      'street2': Contact.street2,
      'city': Contact.city,
      'stateProvince': Contact.stateProvince,
      'postalCode': Contact.postalCode,
      'country': Contact.country
    }
  })
})

Cypress.Commands.add('getContactAPI', (id) => {
  cy.request({
    failOnStatusCode: false,
    method: 'GET',
    url: `http://thinking-tester-contact-list.herokuapp.com/contacts/${id}`,
    headers: {'Authorization': `Bearer ${Cypress.env('token')}` }
  })
})

Cypress.Commands.add('getContactListAPI', () => {
  cy.request({
    failOnStatusCode: false,
    method: 'GET',
    url: 'http://thinking-tester-contact-list.herokuapp.com/contacts',
    headers: {'Authorization': `Bearer ${Cypress.env('token')}` }
  })
})

Cypress.Commands.add('updateContactAPI', (id, Contact) => {
  cy.request({
    failOnStatusCode: false,
    method: 'PUT',
    url: `http://thinking-tester-contact-list.herokuapp.com/contacts/${id}`,
    headers: {'Authorization': `Bearer ${Cypress.env('token')}` },
    body: {
      'firstName': Contact.firstName,
      'lastName': Contact.lastName,
      'birthdate': Contact.birthdate,
      'email': Contact.email,
      'phone': Contact.phone,
      'street1': Contact.street1,
      'street2': Contact.street2,
      'city': Contact.city,
      'stateProvince': Contact.stateProvince,
      'postalCode': Contact.postalCode,
      'country': Contact.country
    }
  })
})

Cypress.Commands.add('deleteContactAPI', (id) => {
  cy.request({
    failOnStatusCode: false,
    method: 'DELETE',
    url: `http://thinking-tester-contact-list.herokuapp.com/contacts/${id}`,
    headers: {'Authorization': `Bearer ${Cypress.env('token')}` }
  })
})

Cypress.Commands.add('login', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login')
    cy.get('#email').type('oneitem@fake.com')
    cy.get('#password').type('foobarfoo')
    cy.get('#submit').click()
})

Cypress.Commands.add('addContact', (Contact) => {
  cy.get('#add-contact').click()
  cy.get('#firstName').type(Contact.firstName)
  cy.get('#lastName').type(Contact.lastName)
  cy.get('#birthdate').type(Contact.birthdate)
  cy.get('#email').type(Contact.email)
  cy.get('#phone').type(Contact.phone)
  cy.get('#street1').type(Contact.street1)
  cy.get('#street2').type(Contact.street2)
  cy.get('#city').type(Contact.city)
  cy.get('#stateProvince').type(Contact.stateProvince)
  cy.get('#postalCode').type(Contact.postalCode)
  cy.get('#country').type(Contact.country)
  cy.get('#submit').click()
})

Cypress.Commands.add('getContactDetails', (Contact) => {
    cy.contains(Contact.firstName + ' ' + Contact.lastName).click()
})

Cypress.Commands.add('editContact', (Contact) => {
  cy.get('#edit-contact').click()
  cy.get('#firstName').clear().type(Contact.firstName)
  cy.get('#lastName').clear().type(Contact.lastName)
  cy.get('#birthdate').clear().type(Contact.birthdate)
  cy.get('#email').clear().type(Contact.email)
  cy.get('#phone').clear().type(Contact.phone)
  cy.get('#street1').clear().type(Contact.street1)
  cy.get('#street2').clear().type(Contact.street2)
  cy.get('#city').clear().type(Contact.city)
  cy.get('#stateProvince').clear().type(Contact.stateProvince)
  cy.get('#postalCode').clear().type(Contact.postalCode)
  cy.get('#country').clear().type(Contact.country)
  cy.get('#submit').click()
})
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
    cy.get('#birthdate').type('1969-05-13')
    cy.get('#email').type('pprunewhip@fake.com')
    cy.get('#phone').type('8008675309')
    cy.get('#street1').type('123 Sesame St.')
    cy.get('#street2').type('Apt. A')
    cy.get('#city').type('New York')
    cy.get('#stateProvince').type('NY')
    cy.get('#postalCode').type('01234')
    cy.get('#country').type('USA')
    cy.get('#submit').click()
})

Cypress.Commands.add('getContactDetails', (Contact) => {
    cy.contains(Contact.firstName + ' ' + Contact.lastName).click()
})
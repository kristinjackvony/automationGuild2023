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
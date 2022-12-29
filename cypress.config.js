const { defineConfig } = require("cypress")
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse")
const { pa11y } = require("@cypress-audit/pa11y")

module.exports = defineConfig({
  video: false,
  e2e: {
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com/",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions)
      })

      on("task", {
        lighthouse: lighthouse(),
        pa11y: pa11y(),
      })
    },
  },
  env: {
    Contact: {
      firstName: 'Prunella',
      lastName: 'Prunewhip',
      birthdate: '1977-07-07',
      email: 'pprunewhip@fake.com',
      phone: '8005551000',
      street1: '123 Main St.',
      street2: 'Apartment Q',
      city: 'New York',
      stateProvince: 'NY',
      postalCode: '12345',
      country: 'USA'
    },
    Contact2: {
      firstName: 'Joe',
      lastName: 'Schmoe',
      birthdate: '1969-07-21',
      email: 'jschmoe@fake.com',
      phone: '8005551001',
      street1: '129 Quaker Lane',
      street2: 'Unit 2',
      city: 'Toronto',
      stateProvince: 'ON',
      postalCode: 'K0A 0C1',
      country: 'Canada'
      
    },
    IncompleteContact: {
      firstName: 'Prunella',
      birthdate: '1977-07-07',
      email: 'pprunewhip@fake.com',
      phone: '8005551000',
      street1: '123 Main St.',
      street2: 'Apartment Q',
      city: 'New York',
      stateProvince: 'NY',
      postalCode: '12345',
      country: 'USA'
    },
    IncompleteContact2: {
      lastName: 'Schmoe',
      birthdate: '1969-07-21',
      email: 'jschmoe@fake.com',
      phone: '8005551001',
      street1: '129 Quaker Lane',
      street2: 'Unit 2',
      city: 'Toronto',
      stateProvince: 'ON',
      postalCode: 'K0A 0C1',
      country: 'Canada'
    }
  }
})

require('@applitools/eyes-cypress')(module)

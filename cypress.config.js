const { defineConfig } = require("cypress");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse")

module.exports = defineConfig({
  video: false,
  e2e: {
    baseUrl: "https://thinking-tester-contact-list.herokuapp.com/",
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions)
      })

      on("task", {
        lighthouse: lighthouse()
      })
    },
  },
  env: {
    Contact: {
      firstName: 'Prunella',
      lastName: 'Prunewhip'
    },
    Contact2: {
      firstName: 'Joe',
      lastName: 'Schmoe'
    },
    IncompleteContact: {
      firstName: 'Prunella'
    },
    IncompleteContact2: {
      lastName: 'Schmoe'
    }
  }
});

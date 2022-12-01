const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
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

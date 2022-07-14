const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    dogfoodingURL: 'https://dashboard.dogfooding.tekton.dev'
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  }
});

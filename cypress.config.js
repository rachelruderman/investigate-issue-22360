const { defineConfig } = require('cypress')

module.exports = defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  experimentalInteractiveRunEvents: true,
  e2e: {
    setupNodeEvents(on, config) {
      on('before:spec', (spec) => {
        console.log(`
        ========================================================
        Hi Cypress user! This is the before:spec event
        ========================================================
        `)
      })
    }
  }
})
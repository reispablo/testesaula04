const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://seubarriga.wcaquino.me',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: false,
    video: false,
  },
})

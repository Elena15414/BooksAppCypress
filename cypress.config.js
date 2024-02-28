const { defineConfig } = require("cypress");
module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    viewportWidth: 2560,
    viewportHeight: 1440,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 880,
  viewportWidth: 1280,
      e2e: {
        //baseUrl: 'http://192.168.1.14:1234', // URL padrão
    /*env: {
      dev: 'http://dev.example.com',
      test: 'http://test.example.com',
      prod: 'http://example.com'
    },
      */
  },
});

import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '1ftmyv',
  e2e: {
    specPattern: 'cypress/all-test/api-test',
    baseUrl: 'https://reqres.in',
    env: {
      googleUrl: 'https://store.google.com/us/'
    }
  },
});



const { faker } = require('@faker-js/faker'); 

Cypress.Commands.add('preencherFormulario', () => {
    cy.get('#firstName').type(faker.person.firstName());
    cy.get('#lastName').type(faker.person.lastName());
    cy.get('#email').type(faker.internet.email());
    cy.get('#open-text-area').type(faker.lorem.paragraph(), { delay: 0 });
    cy.get('button[type="submit"]').click();
  });
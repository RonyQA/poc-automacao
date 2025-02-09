const { faker } = require('@faker-js/faker');

Cypress.Commands.add('validarCampoTelefoneCheckMarcado', (checkPhone = false, preencherTelefone = true) => {
    cy.get('#firstName')
        .type(faker.person.firstName())
    cy.get('#lastName')
        .type(faker.person.lastName());
    cy.get('#email')
        .type(faker.internet.email());
    if (checkPhone) {
        cy.get('#phone-checkbox').check(); // Marca o checkbox se a condição for verdadeira
        if (preencherTelefone) {
            cy.get('#phone').type(faker.phone.number());
        }
    } else {
        cy.get('#phone-checkbox').uncheck(); // Desmarca o checkbox se a condição for falsa
    }
    cy.get('#open-text-area')
        .type(faker.lorem.paragraph(), { delay: 0 });
    cy.get('button[type="submit"]').click();
});

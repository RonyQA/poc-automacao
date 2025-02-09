const { faker } = require('@faker-js/faker');

Cypress.Commands.add('validarCampoTelefoneCheck', (checkPhone, preencherTelefone) => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.email();
    const paragraph = faker.lorem.paragraph();

    cy.get('#firstName')
        .type(firstName)
        .should('have.value', firstName);
    cy.get('#lastName')
        .type(lastName)
        .should('have.value', lastName);
    cy.get('#email')
        .type(email)
        .should('have.value', email);

    if (checkPhone === true && preencherTelefone === true) {
        cy.get('#phone-checkbox').check(); // Marca o checkbox se a condição for verdadeira
        cy.gerarNumeroTelefone().then((telefone) => {
            cy.get('#phone').type(telefone)
                .should('have.value', telefone)
            cy.get('#open-text-area')
                .type(paragraph, { delay: 0 })
                .should('have.value', paragraph);
            cy.contains('button', 'Enviar').click();
        });

    } else if (checkPhone === true && preencherTelefone === false) {
        cy.get('#phone-checkbox').check(); // Marca o checkbox se a condição for verdadeira
        cy.get('#open-text-area')
            .type(paragraph, { delay: 0 })
            .should('have.value', paragraph);
        cy.contains('button', 'Enviar').click();

    } else if (checkPhone === false && preencherTelefone === true) {
        cy.gerarNumeroTelefone().then((telefone) => {
            cy.get('#phone').type(telefone)
                .should('have.value', telefone)
            cy.get('#open-text-area')
                .type(paragraph, { delay: 0 })
                .should('have.value', paragraph);
            cy.contains('button', 'Enviar').click();
        });
    } else {
        cy.get('#open-text-area')
            .type(paragraph, { delay: 0 })
            .should('have.value', paragraph);
        cy.contains('button', 'Enviar').click();
    }
}
);

// Gera um número de telefone com DDD, prefixo e sufixo
Cypress.Commands.add('gerarNumeroTelefone', () => {
    // DDDs válidos no Brasil gerados aleatoriamente
    const ddd = faker.helpers.arrayElement(['61', '62', '64', '65', '66', '67', '68', '69', '71', '73', '74', '75', '77', '79', '81', '82', '83', '84', '85', '86', '87', '88', '89', '91', '92', '93', '94', '95', '96', '97', '98', '99']);
    // Prefixos válidos para celulares no Brasil com Nono dígito  
    const prefixo = faker.helpers.arrayElement(['9','8']);
    const sufixo = faker.number.int({ min: 10000000, max: 99999999 }).toString().padStart(8, '0');
    return `${ddd}${prefixo}${sufixo}`;
});

Cypress.Commands.add('selecionarOpcaoDrodown', () => {
    const Options = ['Staff Augmentation', 'Digital Products', 'Inception', 'R&D'];
    const option = faker.helpers.arrayElement(Options);
    return option;
});

Cypress.Commands.add('validarRadioButtons', () => {
    const radios = ['ajuda', 'elogio', 'feedback'];
  
    radios.forEach((value) => {
      // Seleciona o radio button com o valor atual
      cy.get(`input[type="radio"][value="${value}"]`).check();
  
      // Verifica se o radio button atual está selecionado
      cy.get(`input[type="radio"][value="${value}"]`).should('be.checked');
  
      // Verifica se os outros radio buttons não estão selecionados
      radios.filter(v => v !== value).forEach((otherValue) => {
        cy.get(`input[type="radio"][value="${otherValue}"]`).should('not.be.checked');
      });
    });
  });
const { faker } = require('@faker-js/faker');

class FormPage {
  visit() {
    cy.visit('/');
  }

  preencherFormularioSemDadosObrigatorios() {
    cy.get('#firstName').type(faker.person.firstName());
    cy.get('#lastName').type(faker.person.lastName());
    cy.get('#open-text-area').type(faker.lorem.paragraph(), { delay: 0 });
    cy.get('button[type="submit"]').click();
  }

  preencherFormulario() {
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
    cy.get('#phone-checkbox').check();
    cy.gerarNumeroTelefone().then((telefone) => {
      cy.get('#phone').type(telefone)
        .should('have.value', telefone);
    });
    cy.selecionarOpcaoDrodown().then((opcao) => { //comando customizado commands.js
      cy.get('#product')
        .select(opcao)
        .should('have.value', opcao);
    });
    cy.get('#open-text-area')
      .type(paragraph, { delay: 0 })
      .should('have.value', paragraph);
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json');
    cy.contains('button', 'Enviar').click();
  }
  validarTitulo() {
    cy.title().should('eq', 'Central de Atendimento ao Cliente Luby');
  }

  validarMensagemEnviadaSucesso() {
    cy.get('.success')
      .should('be.visible')
      .should('contain.text', 'Mensagem enviada com sucesso.');
  }

  validarMensagemErro() {
    cy.get('.error')
      .should('be.visible')
      .should('contain.text', 'Valide os campos obrigatórios!');
  }
  validarRedirecionamentSiteLuby() {
    cy.get('.header_logo > a')
      .should('have.attr', 'href') // Verifique se possui o atributo href
  }

  validarCheckBox() {
    cy.get('#email-checkbox').check()
      .should('be.checked');
    cy.get('#phone-checkbox').check()
      .should('be.checked');

    cy.get('input[type="checkbox"]').last().uncheck()
      .should('not.be.checked');

    cy.get('input[type="checkbox"]').check()
      .should('be.checked');
  }

  validarEnvioArquivoFormulario() {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json');
  }

  validarEnvioDragDrpArquivoFormulario() {
    const fileName = ['comprovante.txt','example.json']; //posso usar o indice para alternar entre os arquivos
    //cy.get('#file-upload').selectFile('cypress/fixtures/' + fileName, { action: 'drag-drop' }) Quando não e carregado é necessário ser feito assim
    cy.fixture(fileName[1]).as('arquivo'); //Carrega a pasta de fixtures com o arquivo example.json
    cy.get('#file-upload').selectFile('@arquivo', { action: 'drag-drop' })
      .then(input => {
        expect(input[0].files[0].name).to.equal(fileName[1]);
      });
  }

  validarCampoTelefoneNaoNumerico() {
    cy.get('#phone')
      .should('be.visible')
      .type('/*%$??][AhYDKSFFSODIUE')
      .should('have.text', '');
  }

  validarTextosDaPagina() {
    cy.get('#title').should('contain.text', ' - Central de Atendimento');
    cy.get('form').should('contain.text', 'Nome');
    cy.get('form').should('contain.text', 'Sobrenome');
    cy.get('form').should('contain.text', 'E-mail');
    cy.get('form').should('contain.text', 'Telefone');
    cy.get('form').should('contain.text', 'Produto');
    cy.get('form').should('contain.text', 'Tipo de atendimento');
    cy.get('form').should('contain.text', 'Ajuda');
    cy.get('form').should('contain.text', 'Elogio');
    cy.get('form').should('contain.text', 'Feedback');
    cy.get('form').should('contain.text', 'Qual seu meio de contato preferencial?');
    cy.get('[for="email-checkbox"]').should('contain.text', 'E-mail');
    cy.get('[for="phone-checkbox"]').should('contain.text', 'Telefone');
    cy.get('[for="open-text-area"]').should('contain.text', 'Como podemos te ajudar?');
    cy.get('[for="open-text-area"]').should('contain.text', 'Algum elogio ou feedback para nós?');
    cy.get('[for="file-upload"]').should('contain.text', 'Adicone um anexo');
    cy.get('#privacy').should('contain.text', 'Política de Privacidade');
    cy.get('button[type="submit"]').should('contain.text', 'Enviar');
  }
}

export default new FormPage();
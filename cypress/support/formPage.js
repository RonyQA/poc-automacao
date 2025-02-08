const { faker } = require('@faker-js/faker'); 

class FormPage {
    visit() {
      cy.visit('/'); 
    }
  
    validarTitulo() {
      cy.title().should('eq', 'Central de Atendimento ao Cliente Luby');
    }
  
    validarMensagemSucesso() {
      cy.get('.success')
        .should('be.visible')
        .should('contain.text', 'Mensagem enviada com sucesso.');
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
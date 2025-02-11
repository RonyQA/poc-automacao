const { faker } = require('@faker-js/faker');

class PoliticaPage {
  visit() {
    cy.visit('/privacy.html');
  }

  validarTitulo() {
    cy.title().should('eq', 'Central de Atendimento ao Cliente Luby - Política de Privacidade');
  }

  validarTexto() {
    cy.contains('h1', '- Política de Privacidade');
    cy.contains('p', 'Não salvamos dados submetidos no formulário da aplicação Central de Atendimento Luby.')
      .should('be.visible');
    cy.contains('p', 'Utilzamos as tecnologias HTML, CSS e JavaScript, para simular uma aplicação real.')
      .should('be.visible');
    cy.contains('p', 'No entanto, a aplicação é um exemplo, sem qualquer persistência de dados, e usada para fins de ensino.')
      .should('be.visible');
    cy.contains('Para mais informações, acesse o site da Luby.')
      .should('be.visible');
  }
  validarUrl(){
    cy.get('p > a')
      .should('have.attr', 'href', 'https://luby.com.br') // Verifica se o href está correto
  }
 
}

export default new PoliticaPage();

import FormPage from '../support/formPage';
import preencherFormulario from '../support/commands';

describe('Central de Atendimento ao Cliente Luby', () => {
  beforeEach(() => {
    FormPage.visit(); 
  });

  it('validar o título da aplicação', () => {
    FormPage.validarTitulo(); 
  });

  it('Validar preenchimento de campos obrigatórios', () => {
    cy.preencherFormulario(); 
    // Aqui você pode adicionar validações adicionais, se necessário
  });

  it('Validar mensagem de sucesso do envio da solicitação', () => {
    cy.preencherFormulario(); // Preenche o formulário
    FormPage.validarMensagemSucesso(); 
  });

  it('validar os textos da página', () => {
    FormPage.validarTextosDaPagina(); // Valida os textos da página
  });
});
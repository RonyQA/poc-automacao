
import FormPage from '../support/formPage';
import preencherFormulario from '../support/commands';

describe('Central de Atendimento ao Cliente Luby', () => {
  beforeEach(() => {
    FormPage.visit();
  });

  it('validar redirecinamento site Luby', () => {
    FormPage.validarRedirecionamentSiteLuby();
  });

  it.skip('validar o título da aplicação', () => {
    FormPage.validarTitulo();
  });

  it.skip('Validar preenchimento de campos obrigatórios', () => {
    FormPage.preencherFormulario();
  });

  it.skip('Validar mensagem de sucesso do envio da solicitação', () => {
    FormPage.preencherFormulario();
    FormPage.validarMensagemEnviadaSucesso();
  });

  it.skip('Validar mensagem de erro dos campos obrigatórios', () => {
    FormPage.preencherFormularioSemDadosObrigatorios();
    FormPage.validarMensagemErro();
  });

  it.skip('Validar campo telefone check marcado e campo telefone preenchido', () => {
    cy.validarCampoTelefoneCheck(true, true);
    FormPage.validarMensagemEnviadaSucesso();
  });

  it.skip('Validar campo telefone check marcado e campo telefone não preenchido', () => {
    cy.validarCampoTelefoneCheck(true, false);
    FormPage.validarMensagemErro();
  });

  it.skip('validar tratamento campo telefone para valores não-numericos', () => {
    FormPage.validarCampoTelefoneNaoNumerico();
  });

  it('validar os textos da página', () => {
    FormPage.validarTextosDaPagina();
  });

  it('validar selecao de tipo de atendimento', () => {
    cy.validarRadioButtons();
  });

  
});
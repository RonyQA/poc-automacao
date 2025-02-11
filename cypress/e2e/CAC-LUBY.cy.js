
import FormPage from '../support/formPage';
import preencherFormulario from '../support/commands';
import { faker } from '@faker-js/faker';

describe('Central de Atendimento ao Cliente Luby', () => {
  beforeEach(() => {
    FormPage.visit('/');
  });

  it('validar redirecinamento site Luby', () => {
    FormPage.validarRedirecionamentSiteLuby();
  });

  it('validar o título da aplicação', () => {
    FormPage.validarTitulo();
  });

  it('Validar preenchimento de campos obrigatórios', () => {
    FormPage.preencherFormulario();
  });

  it('Validar mensagem de sucesso do envio da solicitação', () => {
    FormPage.preencherFormulario();
    FormPage.validarMensagemEnviadaSucesso();
  });

  it('Validar mensagem de erro dos campos obrigatórios', () => {
    FormPage.preencherFormularioSemDadosObrigatorios();
    FormPage.validarMensagemErro();
  });

  it('Validar campo telefone check marcado e campo telefone preenchido', () => {
    cy.validarCampoTelefoneCheck(true, true);
    FormPage.validarMensagemEnviadaSucesso();
  });

  it('Validar campo telefone check marcado e campo telefone não preenchido', () => {
    cy.validarCampoTelefoneCheck(true, false);
    FormPage.validarMensagemErro();
  });

  it('Validar campo telefone check não marcado e campo telefone não preenchido', () => {
    cy.validarCampoTelefoneCheck(false, false);
    FormPage.validarMensagemEnviadaSucesso();
  });

  it('validar tratamento campo telefone para valores não-numericos', () => {
    FormPage.validarCampoTelefoneNaoNumerico();
  });

  it('validar os textos da página', () => {
    FormPage.validarTextosDaPagina();
  });

  it('validar selecao de contato preferencial', () => {
    FormPage.validarCheckBox();
  });

  it('validar selecao de tipo de atendimento', () => {
    cy.validarRadioButtons();
  });

  it('validar selecao e anexo de arquivo no formulario', () => {
    FormPage.validarEnvioArquivoFormulario();
  });
  
  it('validar envio de um arquivo simulando um drag-and-drop', () => {
    FormPage.validarEnvioDragDrpArquivoFormulario();
  });
});
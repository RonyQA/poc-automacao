
import CentralPage from '../support/CentralPage';
import preencherFormulario from '../support/commands';
import { faker } from '@faker-js/faker';

describe('Validar Pagina Central de Atendimento ao Cliente Luby', () => {
  beforeEach(() => {
    CentralPage.visit('/');
  });

  it('validar redirecinamento site Luby', () => {
    CentralPage.validarRedirecionamentoSiteLuby();
  });

  it('validar o título da aplicação', () => {
    CentralPage.validarTitulo();
  });

  it('Validar preenchimento de campos obrigatórios', () => {
    CentralPage.preencherFormulario();
  });

  it('Validar mensagem de sucesso do envio da solicitação', () => {
    CentralPage.preencherFormulario();
    CentralPage.validarMensagemEnviadaSucesso();
  });

  it('Validar mensagem de erro dos campos obrigatórios', () => {
    CentralPage.preencherFormularioSemDadosObrigatorios();
    CentralPage.validarMensagemErro();
  });

  it('Validar campo telefone check marcado e campo telefone preenchido', () => {
    cy.validarCampoTelefoneCheck(true, true);
    CentralPage.validarMensagemEnviadaSucesso();
  });

  it('Validar campo telefone check marcado e campo telefone não preenchido', () => {
    cy.validarCampoTelefoneCheck(true, false);
    CentralPage.validarMensagemErro();
  });

  it('Validar campo telefone check não marcado e campo telefone não preenchido', () => {
    cy.validarCampoTelefoneCheck(false, false);
    CentralPage.validarMensagemEnviadaSucesso();
  });

  it('validar tratamento campo telefone para valores não-numericos', () => {
    CentralPage.validarCampoTelefoneNaoNumerico();
  });

  it('validar os textos da página', () => {
    CentralPage.validarTextosDaPagina();
  });

  it('validar selecao de contato preferencial', () => {
    CentralPage.validarCheckBox();
  });

  it('validar selecao de tipo de atendimento', () => {
    cy.validarRadioButtons();
  });

  it('validar selecao e anexo de arquivo no formulario', () => {
    CentralPage.validarEnvioArquivoFormulario();
  });
  
  it('validar envio de um arquivo simulando um drag-and-drop', () => {
    CentralPage.validarEnvioDragDrpArquivoFormulario();
  });

  it('validar propriedade de redirecionamento para nova aba ', () => {
    CentralPage.validarLinkPrivacidadeNovaAba();
  });
  
});

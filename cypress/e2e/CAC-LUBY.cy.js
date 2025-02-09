
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
    cy.validarCampoTelefoneCheckMarcado(true, true); 
    FormPage.validarMensagemEnviadaSucesso(); 
  });

  it('Validar campo telefone check marcado e campo telefone não preenchido', () => {
    cy.validarCampoTelefoneCheckMarcado(true, false); 
    FormPage.validarMensagemErro(); 
  });

  it('Validar campo telefone check desmarcado', () => {
    cy.validarCampoTelefoneCheckMarcado(false); 
    FormPage.validarMensagemEnviadaSucesso(); 
  });

  it('validar tratamento campo telefone para valores não-numericos', () => {
    FormPage.validarCampoTelefoneNaoNumerico(); 
  });

  it('validar os textos da página', () => {
    FormPage.validarTextosDaPagina(); 
  });
});
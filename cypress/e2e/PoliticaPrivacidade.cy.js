import PoliticaPage from '../support/PoliticaPage';

describe('Validar Pagina Central de Atendimento ao Cliente Luby', () => {

  beforeEach(() => {
    PoliticaPage.visit('/');
  });

  it('validar o título da aplicação', () => {
    PoliticaPage.validarTitulo('Central de Atendimento ao Cliente Luby - Política de Privacidade');
  });

  it('validar texto da política de Privacidade', () => {
    PoliticaPage.validarTexto();
  });

  it('validar Url site Ludy', () => {
    PoliticaPage.validarUrl();
  });

});
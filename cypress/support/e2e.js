//Esse é um arquivo de suporte que é executado antes de cada teste.
import './commands'

Cypress.config('requestTimeout', 15000); // Define um tempo limite para requisições de 15 segundos
Cypress.config('responseTimeout', 30000); // Define um tempo limite para resposta de 30 segundos


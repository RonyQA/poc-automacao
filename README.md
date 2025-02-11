# Projeto de Automação com Cypress

## Objetivo
O objetivo deste projeto é demonstrar habilidades técnicas em automação de testes utilizando a ferramenta Cypress. Este repositório contém um exemplo de automação de um formulário web, destacando práticas recomendadas e estratégias para testes manuais e automatizados.

# Conhecendo a aplicação em teste

Antes de começarmos a configurar o Cypress e escrever scripts de teste automatizados, deixe-me apresentar a aplicação que testaremos ao longo deste curso.

A aplicação se chama Central de Atendimento ao Cliente Ludy - e foi desenvolvida usando HTML, CSS e JavaScript.

## Funcionalidades da aplicação

A Aplicação CAC TAT simula o envio de mensagens para uma central de atendimento ao cliente.

### Campos obrigatórios

Os seguintes campos são obrigatórios e **devem** ser preenchidos antes do envio do formulário:

- Nome (campo do tipo de texto)
- Sobrenome (campo do tipo de texto)
- E-mail (campo do tipo e-mail, **com validação**)
- Como podemos te ajudar? Algum elogio ou feedback para nós? (campo de área de texto)

### Outros campos

Além dos campos obrigatórios, o “cliente” pode inserir:

- Telefone (campo do tipo número)
- Produto (campo suspenso com as opções: Blog, Cursos, Mentoria ou YouTube)
- Tipo de atendimento (campos do tipo radio com as opções: Ajuda, Elogio ou Feedback)
- Meio de contato preferencial (caixa de seleção com as opções: E-mail e/ou Telefone)
- Adicione um anexo (campo do tipo arquivo)

### Regras dos meios de contato preferenciais

- Quando a caixa de seleção do telefone é marcada, o _input_ do número de telefone torna-se obrigatória
- Ao desmarcar a caixa de seleção do telefone, a inserção do número de telefone deixa de ser obrigatória

### Política de Privacidade

Ao clicar no link [Política de Privacidade](https://cac-tat-v3.s3.eu-central-1.amazonaws.com/privacy.html) na parte inferior da página, ela abre em uma nova aba do navegador.

### Mensagens

⚠️ Caso haja algum problema relacionado aos campos obrigatórios, a seguinte mensagem é exibida com fundo roxo: `Validar os campos obrigatórios!`

✅ Quando o formulário é enviado com sucesso, a seguinte mensagem é exibida com fundo cinza: `Mensagem enviada com sucesso.` Além disso, todos os campos voltam ao seu estado inicial.

> Ambas as mensagens são exibidas por apenas três segundos. Depois disso, elas desaparecem.

## Estrutura do Projeto
Este projeto está estruturado da seguinte forma:


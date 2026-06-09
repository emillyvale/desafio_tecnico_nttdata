# Desafio Técnico NTTData

Automação de testes API e frontend utilizando Cypress.

## Visão Geral

Este projeto contém testes de API e de interface do usuário (frontend) para validar funcionalidades de login, cadastro de produtos e outras ações.

## Estrutura do Projeto

- `cypress/`
  - `e2e/api/` - testes de API
  - `e2e/frontend/` - testes de UI
  - `fixtures/` - dados de teste estáticos
  - `pages/` - objetos de página / helpers de frontend
  - `support/` - comandos e configuração global do Cypress
- `services/` - funções de serviço para chamadas de API
- `cypress.config.js` - configuração do Cypress
- `package.json` - dependências e scripts do projeto
- `package-lock.json` - lockfile do npm
- `.gitignore` - arquivos e pastas ignorados pelo Git

## Scripts úteis

Use os comandos abaixo a partir da raiz do projeto:

- `npm install` - instala as dependências do projeto
- `npm run cy:open` - abre a interface do Cypress
- `npm run cy:run` - executa todos os testes em modo headless
- `npm run api` - executa apenas os testes de API
- `npm run ui` - executa apenas os testes de frontend

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Execute todos os testes:

```bash
npm run cy:run
```

3. Execute apenas os testes de API:

```bash
npm run api
```

4. Execute apenas os testes de frontend:

```bash
npm run ui
```

5. Abra o Cypress em modo interativo:

```bash
npm run cy:open
```

## Observações

- Certifique-se de que o ambiente de teste (API/backend) esteja disponível antes de executar os testes.
- Ajuste as configurações de baseUrl e variáveis de ambiente no `cypress.config.js` se necessário.

## Autor

Emilly Magalhães

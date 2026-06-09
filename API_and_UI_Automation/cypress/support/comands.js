Cypress.Commands.add('login', (email = 'admin@admin.com', senha = 'admin') => {
  cy.visit('https://front.serverest.dev/login');

  cy.get('[data-testid="email"]').type(email);

  cy.get('[data-testid="senha"]').type(senha);

  cy.get('[data-testid="entrar"]').click();
});

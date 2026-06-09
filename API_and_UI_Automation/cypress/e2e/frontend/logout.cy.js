import { UsuarioService } from '../../../services/usuarioService.js';

describe('Logout', () => {
  it('Deve realizar logout com sucesso', () => {
    const email = `emilly${Date.now()}@teste.com`;
    const senha = 'admin123';

    UsuarioService.criarUsuario({
      nome: 'Emily',
      email,
      password: senha,
      administrador: 'true',
    }).then((response) => {
      expect(response.status).to.eq(201);

      cy.visit('https://front.serverest.dev/login');

      cy.get('[data-testid="email"]').type(email);
      cy.get('[data-testid="senha"]').type(senha);
      cy.get('[data-testid="entrar"]').click();

      cy.url().should('include', '/admin/home');

      cy.document().then((doc) => {
        if (doc.querySelector('[data-testid="logout"]')) {
          cy.get('[data-testid="logout"]', { timeout: 10000 }).click();
        } else {
          cy.contains(/Sair|Logout/i, { timeout: 10000 }).click();
        }
      });

      cy.url().should('include', '/login');
    });
  });
});

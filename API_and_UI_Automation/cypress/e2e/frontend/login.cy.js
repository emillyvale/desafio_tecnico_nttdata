import { UsuarioService } from '../../../services/usuarioService.js';

describe('Login', () => {
  it('Deve realizar login com sucesso', () => {
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

      cy.contains('Este é seu sistema para administrar seu ecommerce').should(
        'be.visible',
      );
    });
  });
});

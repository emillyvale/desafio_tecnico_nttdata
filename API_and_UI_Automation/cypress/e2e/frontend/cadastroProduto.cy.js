import { UsuarioService } from '../../../services/usuarioService.js';

describe('Cadastro de Produto', () => {
  it('Deve cadastrar produto com sucesso', () => {
    const produto = `Produto ${Date.now()}`;
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

      cy.contains('Cadastrar Produtos').click();

      cy.get('[data-testid="nome"]').type(produto);

      cy.get('[data-testid="preco"]').type('100');

      cy.get('[data-testid="descricao"]').type('Produto criado via automação');

      cy.get('[data-testid="quantity"]').type('10');

      cy.get('[data-testid="cadastarProdutos"]').click();

      cy.url().should('include', '/admin/listarprodutos');
      cy.contains(produto).should('be.visible');
    });
  });
});

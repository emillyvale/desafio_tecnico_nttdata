import { LoginService } from '../../../services/loginService.js';
import { ProdutoService } from '../../../services/produtoService.js';
import { UsuarioService } from '../../../services/usuarioService.js';

describe('Produtos API', () => {
  it('Deve cadastrar produto com usuário autenticado', () => {
    const email = `emily${Date.now()}@teste.com`;

    UsuarioService.criarUsuario({
      nome: 'Emily',
      email,
      password: '123456',
      administrador: 'true',
    });

    LoginService.login(email, '123456').then((loginResponse) => {
      const token = loginResponse.body.authorization;

      cy.fixture('produto').then((produto) => {
        produto.nome = `Produto ${Date.now()}`;

        ProdutoService.cadastrarProduto(token, produto).then((response) => {
          expect(response.status).to.eq(201);

          expect(response.body.message).to.eq('Cadastro realizado com sucesso');
        });
      });
    });
  });
});

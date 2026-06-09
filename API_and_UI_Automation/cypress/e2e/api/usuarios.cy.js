import { UsuarioService } from '../../../services/usuarioService.js';

describe('Usuários API', () => {
  it('Deve cadastrar usuário', () => {
    UsuarioService.criarUsuario({
      nome: 'Emily',
      email: `emily${Date.now()}@teste.com`,
      password: '123456',
      administrador: 'true',
    }).then((response) => {
      expect(response.status).to.eq(201);
    });
  });
});

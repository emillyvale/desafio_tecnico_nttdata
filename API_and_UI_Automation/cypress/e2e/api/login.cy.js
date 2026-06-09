import { LoginService } from '../../../services/loginService.js';
import { UsuarioService } from '../../../services/usuarioService.js';

describe('Login API', () => {
  it('Deve autenticar usuário válido', () => {
    const email = `emily${Date.now()}@teste.com`;

    UsuarioService.criarUsuario({
      nome: 'Emily',
      email,
      password: '123456',
      administrador: 'true',
    });

    LoginService.login(email, '123456').then((response) => {
      expect(response.status).to.eq(200);

      expect(response.body).to.have.property('authorization');
    });
  });
});

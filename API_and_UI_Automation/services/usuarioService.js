export class UsuarioService {
  static criarUsuario(body) {
    return cy.request({
      method: 'POST',
      url: '/usuarios',
      body,
      failOnStatusCode: false,
    });
  }
}

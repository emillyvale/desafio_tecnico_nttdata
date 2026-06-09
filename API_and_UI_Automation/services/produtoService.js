export class ProdutoService {
  static cadastrarProduto(token, body) {
    return cy.request({
      method: 'POST',
      url: '/produtos',
      headers: {
        Authorization: token,
      },
      body,
    });
  }
}

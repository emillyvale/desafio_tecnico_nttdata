class LoginPage {
  visitar() {
    cy.visit('/');
  }

  preencherEmail(email) {
    cy.get('[data-testid="email"]').type(email);
  }

  preencherSenha(senha) {
    cy.get('[data-testid="senha"]').type(senha);
  }

  entrar() {
    cy.get('[data-testid="entrar"]').click();
  }
}

export default new LoginPage();

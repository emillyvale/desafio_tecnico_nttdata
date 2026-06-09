export class LoginService {
  static login(email, password) {
    return cy.request({
      method: 'POST',
      url: '/login',
      body: {
        email,
        password,
      },
    });
  }
}

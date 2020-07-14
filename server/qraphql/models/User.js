

class User {
  constructor(model) {
    this.Model = model;
  }

  signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation) {
      throw new Error('A senha deve ser igual à senha de confirmação!');
    }

    return this.Model.create(signUpData);
  }

  signIn() {
    return 'Signing In...';
  }

  signOut() {
    return 'Signing Out...';
  }
}

module.exports = User;
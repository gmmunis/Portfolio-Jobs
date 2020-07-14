

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

  signIn(signInData, ctx) {
     const isAuthenticate = ctx.authenticate(signInData);

     if(isAuthenticate) {
       console.log('User is Authenticated!');
     }

    return `Sign In Output!`;
  }

  signOut() {
    return 'Signing Out...';
  }
}

module.exports = User;
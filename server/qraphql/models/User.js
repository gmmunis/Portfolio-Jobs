

class User {
  constructor(model) {
    this.Model = model;
  }

  async signUp(signUpData) {
    if (signUpData.password !== signUpData.passwordConfirmation) {
      throw new Error('A senha deve ser igual à senha de confirmação!');
    }

    try {
      return await this.Model.create(signUpData);
    } catch (e) {
      if (e.code && e.code === 11000) {
        throw new Error('O usuário com o email fornecido já existe!');
      }

      throw e;
    }
  }

  async signIn(signInData, ctx) {
    try {
      const user = await ctx.authenticate(signInData);
      return user;
    } catch (error) {
      return error;
    }
  }

  signOut(ctx) {
    try {
      ctx.logout();
      return true;
    } catch (e) {
      return false;
    }
  }
}

module.exports = User;
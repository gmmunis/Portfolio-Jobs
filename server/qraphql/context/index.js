const passport = require('passport');

const authenticateUser = (options) => {
  console.log("Calling authenticateUser");

  const done = () => {
    console.log('Calling done of authenticateUser');
  }

  const authFn = passport.authenticate('graphql', options, done);
  authFn();

  return true;
}

exports.buildAuthContext = () => {
  const auth = {
    authenticate: (options) => authenticateUser(options)
    
  }

  return auth;
}
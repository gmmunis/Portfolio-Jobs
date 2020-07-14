


const GraphqlStrategy = require('./strategies');

exports.init = (passport) => {

  passport.use('graphql', new GraphqlStrategy((options, done) => {
    console.log('Calling verify function of strategy');

    if(true) {
      done();
    }
  }));
}
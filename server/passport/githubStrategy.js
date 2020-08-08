const User = require('../db/models/user.model');
const GithubStrategy = require('passport-github');

const githubStrategy = new GithubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    proxy: true,
    callbackURL: '/api/auth/github/callback'
  },
  function(accessToken, refreshToken, profile, done) {
    // console.log('===== GITHUB PROFILE =======');
    // console.log(profile);
    // console.log('======== END ===========');
    let { id, name } = profile._json;

    User.findOne({'github.id': id}, (err, userMatch) => {
      if (err) {
        console.log("Error trying to find user with github ID.", err);
        return done(null, false);
      }

      if (userMatch) {
        return done(null, userMatch);
      } else {
        // if no user in our db, create a new user with that githubId
        if(name === null) {
          name = profile._json.login;
        }

        const githubUser = new User({
          name: name,
          login: profile._json.login,
          github: profile._json
        });
        githubUser.save((err, savedUser) => {
          if (err) {
            console.log('Error!! saving the new github user', err);
            return done(null, false);
          } else {
            return done(null, savedUser)
          }
        })
      }
    })
  }
);

module.exports = githubStrategy;


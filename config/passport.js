const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const db = require('../models');
const GithubStrategy = require('passport-github').Strategy;


passport.use(new GithubStrategy({
  clientID: "e32cb05bf499f5151825",
  clientSecret: "5664f3800cf1d5192fbb2b78a8bfa0d976635462",
  callbackURL: "/api/auth/github/callback"
},
function(accessToken, refreshToken, profile, cb) {
  return cb(null, profile);
}));

passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
    },


    ((username, password, done) => {
      db.User.findOne({ where: { email: username } }).then((user) => {
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        bcrypt.compare(password, user.password, (err, res) => {
          if (err) { return done(err); }
          if (res === false) {
            return done(null, false, { message: 'Incorrect username/password combination.' });
          }
          return done(null, user);
        });
      }).catch((err) => done(err));
    })));

module.exports = passport;
const User = require('../models/user.model');
const GithubStrategy = require('passport-github');


module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user)
    });
  });
  passport.use(new GithubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        proxy: true
        //callbackURL: process.env.GITHUB_CALLBACK_URL
      },
      async(accessToken, refreshToken, profile, cb) => {
        // Find the current user in the User Model
        const currentUser = await User.findOne({
          'github.id': profile._json.id
        });
        
        // Create new user if the database doesnt have the current user.
        if(currentUser) {
          currentUser.accessToken = accessToken;
          currentUser.save().then(() => {
            return cb(null, currentUser);
          })
        } else {
          const newUser = await new User({
            name: profile._json.name,
            login: profile._json.login,
            avatar: profile._json.avatar_url,
            provider: 'github',
            github: profile._json,
            accessToken: accessToken,
            refreshToken: refreshToken
          }).save();
            cb(null, newUser)
          }
        }
      ));
};


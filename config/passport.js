const User = require('../models/user-model');
const GithubStrategy = require('passport-github2');


module.exports = function(passport) {
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    console.log("Deserializing");
    User.findById(id).then(user => {
      console.log("deser results:", user);
      done(null, user)
    }).catch(e => {
      done(new Error("Failed to deserialize an user"));
    });
  });
  passport.use(new GithubStrategy({
        clientID: "e32cb05bf499f5151825",
        clientSecret: "5664f3800cf1d5192fbb2b78a8bfa0d976635462",
        callbackURL: "/api/auth/github/redirect"
      },
      async(accessToken, refreshToken, profile, cb) => {
        // Find the current user in the User Model

        const currentUser = await User.findOne({
          'github.id': profile._json.id
        });

        // Create new user if the database doesnt have the current user.
        if(!currentUser) {
          const newUser = await new User({
            name: profile._json.name,
            email: profile.emails[0].value,
            avatar: profile._json.avatar_url,
            provider: 'github',
            github: profile._json
          }).save();

          if(newUser) {

            return cb(null, newUser)
          }
        }
        return cb(null, currentUser)
      }));
}




// passport.use(new LocalStrategy({
//       usernameField: 'email',
//       passwordField: 'password',
//     },
//
//
//     ((username, password, done) => {
//       db.User.findOne({ where: { email: username } }).then((user) => {
//         if (!user) {
//           return done(null, false, { message: 'Incorrect username.' });
//         }
//         bcrypt.compare(password, user.password, (err, res) => {
//           if (err) { return done(err); }
//           if (res === false) {
//             return done(null, false, { message: 'Incorrect username/password combination.' });
//           }
//           return done(null, user);
//         });
//       }).catch((err) => done(err));
//     })));


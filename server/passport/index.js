const passport = require('passport');
const LocalStrategy = require('./localStrategy');
const GoogleStrategy = require('./googleStrategy');
const GithubStrategy = require('./githubStrategy');
const User = require('../db/models/user.model');

passport.serializeUser((user, done) => {
	// console.log('=== serialize ... called ===');
	// console.log(user) // the whole raw user object!
	// console.log('---------');
	done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
	// console.log('DEserialize ... called')
	User.findOne(
		{ _id: id },
		'firstName lastName photos local.username',
		(err, user) => {
			// console.log('======= DESERILAIZE USER CALLED ======')
			// console.log(user)
			// console.log('--------------')
			done(null, user)
		}
	)
})

// ==== Register Strategies ====
passport.use("local", LocalStrategy);
passport.use("google", GoogleStrategy);
passport.use('github', GithubStrategy);

module.exports = passport;

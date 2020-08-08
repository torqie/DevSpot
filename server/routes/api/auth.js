const express = require('express');
const router = express.Router();
const User = require('../../db/models/user.model');
const passport = require('../../passport');

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));
router.get('/google/callback', passport.authenticate('google', {
	successRedirect: '/',
	failureRedirect: '/login'
}));

router.get('/github', passport.authenticate('github', {
	session: true,
	scope: ['user']
}));

router.get('/github/callback', passport.authenticate('github', {
	successRedirect: '/',
	failureRedirect: '/login'
}));

// this route is just used to get the user basic info
router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log("Auth User:", req.user);
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null })
	}
});

router.post('/logout', (req, res) => {
	if (req.user) {
		req.session.destroy();
		res.clearCookie('connect.sid');
		return res.status(200).json({ msg: 'logging you out' });
	} else {
		return res.json({ msg: 'no user to log out!' });
	}
});

module.exports = router;

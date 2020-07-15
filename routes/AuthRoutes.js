module.exports = (app, passport) => {
  app.get('/api/auth/github/login', passport.authenticate('github'));
  app.get('/api/auth/github/callback',
      passport.authenticate('github', { failureRedirect: '/'}),
      (req, res) => {res.send({successful: true, message: "Successfully Logged In"})}
  );
};
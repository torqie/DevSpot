

module.exports = (app, passport) => {
// when login is successful, retrieve user info
  app.get("/api/auth/login/success", (req, res) => {
    if(req.hasOwnProperty('user')){
      res.json({
        success: true,
        message: "User has successfully authenticated",
        user: req.user,
      });
    } else {
      console.log('no user');
      return res.json({
        success: false,
        error: "Not Authenticated",
      });
    }

  });

  // when login failed, send failed msg
  app.get("api/auth/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "user failed to authenticate."
    });
  });

  // When logout, redirect to client
  app.get("/api/auth/logout", (req, res) => {
    req.logout();
    return res.json({success: true, message: "You have been successfully logged out."})
  });


  app.get('/api/auth/github', passport.authenticate('github', {session: true}));


  app.get(
      "/api/auth/github/redirect",
      passport.authenticate("github", {
        successRedirect: process.env.CLIENT_HOME_PAGE_URL,
        failureRedirect: "/api/auth/login/failed"
      })
  );
};
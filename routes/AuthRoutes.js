module.exports = (app, passport) => {
// when login is successful, retrieve user info
  app.get("/api/auth/login/success", (req, res) => {
    console.log("Session", req.user);
      res.json({
        success: true,
        message: "User has successfully authenticated",
        user: req.user,
      });
  });

  // when login failed, send failed msg
  app.get("api/auth/login/failed", (req, res) => {
    res.status(401).json({
      success: false,
      message: "user failed to authenticate."
    });
  });

  // When logout, redirect to client
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("http://localhost:3000/");
  });


  app.get('/api/auth/github', passport.authenticate('github', {session: true}));


  app.get(
      "/api/auth/github/redirect",
      passport.authenticate("github", {
        successRedirect: "http://localhost:3000/news-feed",
        failureRedirect: "/api/auth/login/failed"
      })
  );
};
const UserController = require("../controllers/users.controller");
module.exports = (app, passport) => {
// when login is successful, retrieve user info

  app.get("http://localhost:3001/api/auth/login/success", (req, res) => {
    console.log("Session", req.user);
    res.json({
      success: true,
      message: "User has successfully authenticated",
      user: req.user,
    });
  });

  app.put('/api/users/update-theme', UserController.updateTheme);
}
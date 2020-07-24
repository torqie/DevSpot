const UserController = require("../controllers/users.controller");
module.exports = (app, passport) => {
  app.get('/api/users/', UserController.all);
  app.get('/api/users/:id', UserController.one);
};
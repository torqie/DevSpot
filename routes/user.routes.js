const UserController = require("../controllers/users.controller");
const AuthMiddleware = require("../middleware/auth");
module.exports = (app, passport) => {
  app.get('/api/users/', AuthMiddleware ,UserController.all);
  app.get('/api/users/search/:id', AuthMiddleware ,UserController.searchByName);
  app.get('/api/users/find-by-login/:id', AuthMiddleware ,UserController.findByLogin);
  app.get('/api/users/:id', AuthMiddleware ,UserController.one);
};
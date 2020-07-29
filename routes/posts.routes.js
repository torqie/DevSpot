const PostsController = require("../controllers/posts.controller");
module.exports = (app) => {
  app.get('/api/posts/', PostsController.all);
  app.post('/api/posts/', PostsController.create)
};
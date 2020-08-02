const PostsController = require("../controllers/posts.controller");
const AuthMiddleware = require("../middleware/auth");
module.exports = (app) => {
  app.get('/api/posts/', AuthMiddleware, PostsController.all);
  app.post('/api/posts/', AuthMiddleware, PostsController.create);
  app.get('/api/posts/:id', AuthMiddleware, PostsController.one);
  app.post('/api/posts/:id/like', AuthMiddleware, PostsController.likePost);
  app.post('/api/posts/:id/dislike', AuthMiddleware, PostsController.dislikePost);

};
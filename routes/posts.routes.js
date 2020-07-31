const PostsController = require("../controllers/posts.controller");
module.exports = (app) => {
  app.get('/api/posts/', PostsController.all);
  app.post('/api/posts/', PostsController.create);
  app.get('/api/posts/:id', PostsController.one);
  app.post('/api/posts/:id/like', PostsController.likePost);
  app.post('/api/posts/:id/dislike', PostsController.dislikePost);

};
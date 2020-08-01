const QuestionsController = require("../controllers/questions.controller");
module.exports = (app) => {
  app.get('/api/questions/', QuestionsController.all);
  app.post('/api/questions/', QuestionsController.create);
  app.get('/api/posts/:id', QuestionsController.one);
  app.post('/api/posts/:id/like', QuestionsController.thumbsUpAnswer);
  app.post('/api/posts/:id/dislike', QuestionsController.thumbsDownAnswer);

};
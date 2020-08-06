const QuestionsController = require("../controllers/questions.controller");
module.exports = (app) => {
  app.get('/api/questions/', QuestionsController.all);
  app.post('/api/questions/', QuestionsController.create);
  app.get('/api/questions/:id', QuestionsController.one);
  // app.post('/api/questions/:id/thumbsUp', QuestionsController.thumbsUpAnswer);
  // app.post('/api/questions/:id/thumbsDown', QuestionsController.thumbsDownAnswer);
};
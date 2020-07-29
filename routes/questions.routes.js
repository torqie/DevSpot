const QuestionsController = require("../controllers/questions.controller");
module.exports = (app) => {
  app.get('/api/questions/', QuestionsController.all);
  app.post('/api/questions/', QuestionsController.create)
};
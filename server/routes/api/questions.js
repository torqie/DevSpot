const express = require('express');
const router = express.Router();
const QuestionsController = require("../../controllers/questions.controller");
const AnswersController = require("../../controllers/answers.controller");
router.get('/', QuestionsController.all);
router.post('/', QuestionsController.create);
router.get('/:id', QuestionsController.one);
router.post('/:id/answer', AnswersController.create);
router.get('/:id/answers', QuestionsController.getAnswers);

module.exports = router;
const connection = require("../db");
const db = require('../db/models');

exports.create = async (req, res) => {
  const answer = await db.Answer.create({
    author: req.body.author._id,
    content: req.body.content,
  });
  await db.Question.findByIdAndUpdate(req.params.id, {
    $push: {
      answers: answer._id
    }
  });
  return res.json(answer)
};

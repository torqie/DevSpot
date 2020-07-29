const db = require("../models");
const mongoose = require("mongoose");

// Get all users.
exports.all = async (req, res) => {
  const questions = await db.Question.find().sort({createdAt: 'desc'}).populate("author").sort();
  return res.json(questions);
};

// Get all users.
exports.create = async (req, res) => {
  console.log(req.body);
  const question = await db.Question.create({
    author: req.body.author._id,
    content: req.body.content,
    visibleTo: 'public'
  });
  await db.User.findByIdAndUpdate(req.body.author._id, { $push: {questions: question._id }});
  return res.json(question);
};
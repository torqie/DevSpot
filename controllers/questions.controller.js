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

exports.one = async (req, res) => {
  const question = await db.Question.findById(req.params.id);
};

exports.thumbsUpAnswer = async (req, res) => {
  //Check if user is in the dislikes array if so remove and add to likes array
  console.log(req.body.userId);
  const question = await db.Question.findByIdAndUpdate(req.params.id, { $addToSet: {thumbsUp: req.body.userId }, $pull: { thumbsDown: req.body.userId }}, {new: true});
  return res.json(question);
};

exports.thumbsDownAnswer = async (req, res) => {
  const question = await db.Question.findByIdAndUpdate(req.params.id, { $addToSet: {thumbsDown: req.body.userId }, $pull: { thumbsUp: req.body.userId }}, {new: true});
  return res.json(question);
};
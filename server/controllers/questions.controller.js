const connection = require("../db");
const db = require('../db/models');

// Get all users.
exports.all = async (req, res) => {
  const questions = await db.Question.find().sort({createdAt: 'desc'}).populate("author").populate({
    path: "answers",
    populate: { path: "author" }
  }).sort();
  return res.json(questions);
};

// Get all users.
exports.create = async (req, res) => {
  const question = await db.Question.create({
    author: req.body.author,
    content: req.body.content,
    visibleTo: 'public'
  });
  await db.User.findByIdAndUpdate(req.body.author._id, { $push: {questions: question._id }});
  return res.json(question);
};

exports.one = async (req, res) => {
  const question = await db.Question.findById(req.params.id);
  return res.status(200).json(question);
};

exports.getAnswers = async (req, res) => {
  const comments = await db.Question.findById(req.params.id).select('answers').populate({
    path: "answers",
    populate: { path: "author" }});
  return res.status(200).json(comments);
};

// exports.delete = async (req, res) => {
//   const question = await db.Question.findById(req.params.id);
// };

// For future work on thumbs-up/down on questions and answers:

// exports.thumbsUpAnswer = async (req, res) => {
//   //Check if user is in the thumbsDown array if so remove and add to thumbsUp array
//   console.log(req.body.userId);
//   const question = await db.Question.findByIdAndUpdate(req.params.id, { $addToSet: {thumbsUp: req.body.userId }, $pull: { thumbsDown: req.body.userId }}, {new: true});
//   return res.json(question);
// };

// exports.thumbsDownAnswer = async (req, res) => {
//   const question = await db.Question.findByIdAndUpdate(req.params.id, { $addToSet: {thumbsDown: req.body.userId }, $pull: { thumbsUp: req.body.userId }}, {new: true});
//   return res.json(question);
// };
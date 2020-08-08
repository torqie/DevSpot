const connection = require("../db");
const db = require('../db/models');

exports.create = async (req, res) => {
  const comment = await db.Comment.create({
    author: req.body.author._id,
    content: req.body.content,
  });
  await db.Post.findByIdAndUpdate(req.params.id, {
    $push: {
      comments: comment._id
    }
  });
  return res.json(comment);
};

exports.likeComment = async (req, res) => {
  const comment = await db.Post.findByIdAndUpdate(req.params.id, {
    $addToSet: {
      likes: req.body.userId },
    $pull: {
      dislikes: req.body.userId }
    },
      {new: true});
  return res.json(comment);
};

exports.dislikeComment = async (req, res) => {
  const comment = await db.Post.findByIdAndUpdate(req.params.id, { $addToSet: {dislikes: req.body.userId }, $pull: { likes: req.body.userId }}, {new: true});
  return res.json(comment);
};
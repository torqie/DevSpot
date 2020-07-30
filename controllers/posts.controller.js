const db = require("../models");
const mongoose = require("mongoose");

// Get all users.
exports.all = async (req, res) => {
  const posts = await db.Post.find().sort({createdAt: 'desc'}).populate("author").sort();
  return res.json(posts);
};

// Create a user.
exports.create = async (req, res) => {
  console.log(req.body);
  const post = await db.Post.create({
    author: req.body.author._id,
    content: req.body.content,
    visibleTo: 'public'
  });
  await db.User.findByIdAndUpdate(req.body.author._id, { $push: {posts: post._id }});
  return res.json(post);
};

exports.one = async (req, res) => {
  const post = await db.Post.findById(req.params.id);
};

exports.likePost = async (req, res) => {
  //Check if user is in the dislikes array if so remove and add to likes array
  console.log(req.body.userId);
  const post = await db.Post.findByIdAndUpdate(req.params.id, { $addToSet: {likes: req.body.userId }, $pull: { dislikes: req.body.userId }}, {new: true});
  return res.json(post);
};

exports.dislikePost = async (req, res) => {
  const post = await db.Post.findByIdAndUpdate(req.params.id, { $addToSet: {dislikes: req.body.userId }, $pull: { likes: req.body.userId }}, {new: true});
  return res.json(post);
};
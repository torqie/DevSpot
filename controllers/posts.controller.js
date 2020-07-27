const db = require("../models");
const mongoose = require("mongoose");

// Get all users.
exports.all = async (req, res) => {
  const posts = await db.Post.find().sort({createdAt: 'desc'}).populate("author").sort();
  return res.json(posts);
};

// Get all users.
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
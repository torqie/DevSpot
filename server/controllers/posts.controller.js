const connection = require("../db");
const db = require('../db/models');

// Get all users.
exports.all = async (req, res) => {
  const posts = await db.Post.find().sort({createdAt: 'desc'}).populate("author").populate({
        path: "comments",
        populate: { path: "author" }
      }).sort();
  return res.json(posts);
};

exports.newsFeed = async (req, res) => {

};

exports.createComment = async (req, res) => {
  const comment = await db.Post.findByIdAndUpdate(req.params.id, {
    $push: {
      comments: {
        author: req.body.author._id,
        content: req.body.content,
      }
    }
  });
  return res.json(comment);
};

// Create a post.
exports.create = async (req, res) => {

  const post = await db.Post.create({
    author: req.body.author._id,
    content: req.body.content,
    visibleTo: 'public'
  });
  await db.User.findByIdAndUpdate(req.body.author._id, { $push: {posts: post._id }});
  return res.json(post);
};

exports.one = async (req, res) => {
  const post = await db.Post.findById(req.params.id).populate("author").populate({
    path: "comments",
    populate: { path: "author" }
  });
  return res.json(post)
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

exports.getComments = async (req, res) => {
  const comments = await db.Post.findById(req.params.id).select('comments').populate({ path: "comments",
    populate: { path: "author" }});
  return res.status(200).json(comments);
};
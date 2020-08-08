const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  content: String,
  visibleTo: String,
  comments: [{ type: Schema.ObjectId, ref: 'Comment'}],
  likes: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  dislikes: [{ type: Schema.Types.ObjectId, ref: 'User'}],
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
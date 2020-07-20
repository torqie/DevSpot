const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  name: String,
  author: { type: Schema.Types.ObjectID, ref: 'User' },
  content: String,
  visibleTo: String,
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
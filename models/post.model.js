const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  author: { type: Schema.Types.ObjectID, ref: 'User' },
  content: String,
  visibleTo: String,
  comments: [{
    author: { type: Schema.Types.ObjectID, ref: 'User' },
    content: String
  }]
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
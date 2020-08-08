const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  login: String,
  google: {},
  github: {},
  friends: [{ type: Schema.Types.ObjectId, ref: 'Friend' }],
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

const User = mongoose.model("User", userSchema);
module.exports = User;
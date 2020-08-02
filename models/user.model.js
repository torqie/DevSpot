const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  login: String,
  avatar: String,
  github: Object,
  accessToken: String,
  refreshToken: String,
  friends: [{ type: Schema.Types.ObjectID, ref: 'Friend' }],
  posts: [{ type: Schema.Types.ObjectID, ref: 'Post' }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
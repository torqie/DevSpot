const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  avatar: String,
  theme: String,
  provider: String,
  github: Object,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
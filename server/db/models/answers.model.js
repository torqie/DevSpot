const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const answerSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  content: String,
  likes: [{ type: Schema.Types.ObjectId, ref: 'User'}],
  dislikes: [{ type: Schema.Types.ObjectId, ref: 'User'}],
}, { timestamps: true });

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
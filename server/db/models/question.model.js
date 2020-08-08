const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true }, //User who asked the questions
  content: { type: String, required: true }, //Content of the question
  visibleTo: { type: String, required: true }, // Who it is visible to [ public, friends ]
  answers: [{ type: Schema.Types.ObjectId, ref: "Answer" }],
});

const Question = mongoose.model("Question", questionSchema);
module.exports = Question;
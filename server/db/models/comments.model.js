const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    likes: [{ type: Schema.Types.ObjectId, ref: 'User'}],
    dislikes: [{ type: Schema.Types.ObjectId, ref: 'User'}],
}, { timestamps: true });

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendSchema = new Schema({
  requester: { type: Schema.Types.ObjectId, ref: 'User' },
  recipient: { type: Schema.Types.ObjectId, ref: 'User' },
  status: {
    type: Number,
    enums: [
        0, // Add friend
        1, // Requested
        2, // Pending
        3, // Friends
    ]
  },

});

const Friend = mongoose.model("Friend", friendSchema);

module.exports = Friend;
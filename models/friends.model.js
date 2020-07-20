const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const friendsSchema = new Schema({
  user_id: {type: Schema.Types.ObjectID, ref: "User"},
  friend_id: {type: Schema.Types.ObjectID, ref: "User"},
  accepted: { type: Boolean, default: false },
});

const Friends = mongoose.model("Friends", friendsSchema);

module.exports = Friends;
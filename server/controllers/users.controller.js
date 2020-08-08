const connection = require("../db");
const db = require('../db/models');

// Get all users.
exports.all = async (req, res) => {
  const users = await db.User.find();
  return res.json(users);
};

// Search for user by name
exports.searchByName = async (req, res) => {
  const users = await db.User.find(
    {$or: [
        {name: {$regex: req.params.id, $options: "i"}},
        {login: {$regex: req.params.id, $options: "i"}}
      ]


    }).limit(5);
  return res.json(users);
};

// Search for user by name
exports.findByLogin = async (req, res) => {
  db.User.findOne({login: req.params.id}).populate('posts').populate({path: 'posts', populate: {path: 'author'}}).then(response => {
    return res.json(response);
  });

};

// Get a user by id.
exports.one = async (req, res) => {
  const user = await db.User.findById(req.params.id);
  return res.json(user);
};

// Update a user.
exports.updateTheme = async (req, res) => {
  const user = await db.User.findOneAndUpdate(req.body.id, {
    theme: req.body.theme
  }, { new: true});
  return res.json(user);
};

// Delete a user.
exports.delete = async (req, res) => {
  const user = await db.User.findById(req.params.id);
};

exports.requestFriend = async(req, res) => {
  const userA = req.body.user;
  const userB = req.body.recipient;

  const docA = await db.Friend.findOneAndUpdate(
      { requester: userA, recipient: userB },
      { $set: { status: 1 }},
      { upsert: true, new: true }
  );
  const docB = await db.Friend.findOneAndUpdate(
      { requester: userB, recipient: userA },
      { $set: { status: 2 }},
      { upsert: true, new: true }
  );
  const updateUserA = await db.User.findOneAndUpdate(
      { _id: userA },
      { $push: { friends: docA._id }}
  );
  const updateUserB = await db.User.findOneAndUpdate(
      { _id: userB },
      { $push: { friends: docB._id }}
  );
  return res.json({
    success: true,
    message: "Friend request sent"
  })
};

exports.acceptFriendRequest = async (req, res) => {
  db.Friend.findOneAndUpdate(
      { requester: req.user._id, recipient: req.body.recipient },
      { $set: { status: 3 }}
  );
  db.Friend.findOneAndUpdate(
      { requester: req.body.recipient, recipient: req.user._id },
      { $set: { status: 3 }}
  );
};

exports.rejectFriendRequest = async (req, res) => {
  const userA = req.user._id; // Current logged in user
  const userB = req.body.recipient;

  const docA = await db.Friend.findOneAndRemove(
      { requester: userA, recipient: userB }
  )
  const docB = await db.Friend.findOneAndRemove(
      { recipient: userA, requester: userB }
  )
  const updateUserA = await db.User.findOneAndUpdate(
      { _id: userA },
      { $pull: { friends: docA._id }}
  )
  const updateUserB = await db.User.findOneAndUpdate(
      { _id: userB },
      { $pull: { friends: docB._id }}
  )
};

exports.allFriends = async (req, res) => {
  const friends = await db.User.aggregate([
    {
      "$lookup": {
        "from": db.Friend.collection.name,
        "let": {"friends": "$friends"},
        "pipeline": [
          {
            "$match": {
              "recipient": mongoose.Types.ObjectId(req.params.id),
              "$expr": {"$in": ["$_id", "$$friends"]}
            }
          },
          {"$project": {"status": 1}}
        ],
        "as": "friends"
      }
    },
    {
      "$addFields": {
        "friendsStatus": {
          "$ifNull": [{"$min": "$friends.status"}, 0]
        }
      }
    }
  ]);

  return res.json(friends);
};

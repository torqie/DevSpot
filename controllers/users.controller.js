const db = require("../models");

// Get all users.
exports.all = async (req, res) => {
  const users = await db.User.find();
  return res.json(users);
};

// Get a user by id.
exports.findOne = async (req, res) => {
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

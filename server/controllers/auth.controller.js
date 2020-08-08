const db = require("../models");
const mongoose = require("mongoose");
// Get all users.
exports.all = async (req, res) => {
  const users = await db.User.find();
  return res.json(users);
};
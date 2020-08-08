// Exporting an object containing all of our models
module.exports = {
  User: require("./user.model"),
  Friend: require("./friend.model"),
  Post: require("./post.model"),
  Comment: require("./comments.model"),
  Question: require("./question.model"),
  Answer: require("./answers.model"),
};

const Post = require("./Post");
const User = require("./Users");
const File = require("./Files");

// File post associations
Post.hasMany(File, { foreignKey: "postId", as: "files" });
File.belongsTo(Post, { foreignKey: "postId", as: "post" });
// User post associations
User.hasMany(Post, { foreignKey: "userId", as: "posts" });
Post.belongsTo(User, { foreignKey: "userId", as: "user" });

module.exports = {
  Post: Post,
  User: User,
  File: File
};
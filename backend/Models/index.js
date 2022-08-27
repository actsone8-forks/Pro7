const Post = require("./Post");
const User = require("./Users");
const File = require("./Files");

// File post associations
Post.hasMany(File, { foreignKey: "postId", as: "files", onDelete: 'cascade' });
File.belongsTo(Post, { foreignKey: "postId", as: "post", onDelete: 'cascade'  });
// User post associations
User.hasMany(Post, { foreignKey: "userId", as: "posts", onDelete: 'cascade' });
Post.belongsTo(User, { foreignKey: "userId", as: "user", onDelete: 'cascade' });

module.exports = {
  Post: Post,
  User: User,
  File: File
};
const { Sequelize } = require("sequelize");
const sequelize = require("../config/sequelize");

const Post = sequelize.define(
  "Posts",
  {
    message: {
      type: Sequelize.STRING,
    },
    userId: {
      // Foreign key for user table
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    views: {
      type: Sequelize.ARRAY(Sequelize.INTEGER)
    }
  },
  {
    tableName: "Posts",
    updatedAt: false,
  }
);

module.exports = Post;

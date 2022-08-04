const { Sequelize } = require("sequelize");
const sequelize = require("../config/sequelize");
const User = require("./Users");

const Post = sequelize.define(
  "Posts",
  {
    message: {
      type: Sequelize.STRING,
    },
    // postImg:{
    //type:Sequelize.STRING
    // },
    userId: {
      // Foreign key for user table
      type: Sequelize.INTEGER,

      references: {
        model: User,
        key: "id",
      },
    },
    createdAt: {
      type: Sequelize.DATE,
    },
  },
  {
    tableName: "Posts",
    updatedAt: false,
  }
);

Post.belongsTo(User, { foreignKey: "userId" });

module.exports = Post;

const { Sequelize } = require("sequelize");
const sequelize = require("../config/sequelize");

const User = sequelize.define(
  "User",
  {
    fullName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
    },
  },
  {
    tableName: "Users",
  }
);

// User.hasMany(Post, { foreignKey: "userId", as: "posts" });

module.exports = User;

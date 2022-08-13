const { Sequelize } = require('sequelize');
const sequelize = require('../config/sequelize');
// const Post = require("./Post");

const File = sequelize.define('File', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    data: {
        type: Sequelize.BLOB('long'),
        allowNull: false,
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    size: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    postId: {
        type: Sequelize.INTEGER,
    }
}, {
    timestamps: false,
    tableName: 'Files',
});


module.exports = File;
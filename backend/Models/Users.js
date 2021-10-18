const { sequelize , Sequelize } = require("sequelize");

module.exports = (sequelize,Sequelize)=>{
    const User = sequelize.define('User',{
        fullName : {
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
        isAdmin:{
            type:Sequelize.BOOLEAN
        }
    })

    return User
}
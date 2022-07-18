const { sequelize , Sequelize } = require("sequelize");


module.exports = (sequelize,Sequelize)=>{
    const Post = sequelize.define('Post',{
        message : {
            type:Sequelize.STRING
        },
       // postImg:{
            //type:Sequelize.STRING
       // },
        userId:{
            type:Sequelize.INTEGER,
           
        }
    })

    return Post
}
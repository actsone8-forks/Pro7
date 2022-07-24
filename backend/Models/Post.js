const { sequelize , Sequelize } = require("sequelize");


module.exports = (sequelize,Sequelize)=>{
    const Post = sequelize.define('Post',{
        postText : {
            type:Sequelize.STRING
        },
       // postImg:{
            //type:Sequelize.STRING
       // },
        createdby:{
            type:Sequelize.INTEGER,
           
        }
    })

    return Post
}
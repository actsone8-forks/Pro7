const express = require("express");
const fileUpload = require('express-fileupload');
const app = express();
const cors = require('cors');
const UserRoute = require('./Routes/UserRoutes');
const PostRoute = require('./Routes/PostRoutes');


// to allow access from anywhere 
app.use(cors())
// to barse the body to json
app.use(express.json());

// FIle upload middleware
app.use(fileUpload({
  createParentPath: true
}));

//db.sequelize.sync({
  //  force : true
//}).then(()=>{
  //  console.log('tables synced ')
//})
app.use('/api/user', UserRoute)
app.use('/api/posts/', PostRoute)

module.exports = app
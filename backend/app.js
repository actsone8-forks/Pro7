const express = require("express")
const app = express();
const cors = require('cors')
const UserRoute =  require('./Routes/UserRoutes')
const db = require('./Models')

// to allow access from anywhere 
app.use(cors())
// to barse the body to json
app.use(express.json());

db.sequelize.sync({
    force : true
}).then(()=>{
    console.log('tables synced ')
})
app.use('/api/user',UserRoute)

module.exports = app
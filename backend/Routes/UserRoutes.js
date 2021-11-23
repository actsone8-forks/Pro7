const  express = require('express');
const router =  express.Router();
const userController = require('../controllers/UserController')

  

const User = require("../models/user");


app.post("/signup", async (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
                error:err
            });
        }else{
    const newUser = new User({
      name: req.body.name,
      password: req.body.password
    });

    await newUser
      .save()
      .then(() => {
        res.status(200).send(newUser);
      })
      .catch(err => {
        console.log("Error is ", err.message);
      });
  });

    
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hash(req.body.email, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({
                    error:err
                });
               }   else {
                   const user = new User({
                    name: req.body.name,
                       email:req.body.email,
                       password:hash
                   });
            }
        });
    });
});

router.get('/login', userController.login)

router.get('/', userController.getAll)


module.exports =router;
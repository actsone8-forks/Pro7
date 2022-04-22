const  express = require('express');
const router =  express.Router();
const userController = require('../controllers/UserController')

  

router.post('/signup', userController.signUp);

router.post('/login', userController.login)

router.get('/', userController.getAll)

// router.delete("/accounts/:id", auth, userController.deleteAccount);


module.exports =router;
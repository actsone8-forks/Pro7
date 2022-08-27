const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')
const auth = require("../middleware/auth");


router.post('/signup', userController.signUp);

router.post('/login', userController.login)

router.get('/', userController.getAll)

router.delete("/:id", auth, userController.delete);


module.exports = router;



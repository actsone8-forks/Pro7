const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController')



router.post('/signup', userController.signUp);

router.post('/login', userController.login)

router.get('/', userController.getAll)
// FIXME this route is incorrect, remove "/user" because it is already in the base URL (see app.js line #18)
router.delete("/user/:id", userController.delete);


module.exports = router;
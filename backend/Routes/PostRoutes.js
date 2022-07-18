const router = require("express").Router();
const postsCtrl = require('../controllers/PostController');
const auth = require("../middleware/auth");
const multer = require("../middleware/multer");



router.get("/", postsCtrl.getAllPosts);

//router.post("/add", multer, postsCtrl.createPost);
router.post("/add", postsCtrl.createPost);


//router.get("/:id", auth, postsCtrl.getOnePost);

//router.put("/:id", auth, multer, postsCtrl.updatePost);
//router.delete("/:id", auth, multer, postsCtrl.deletePost);

//router.post("/:id/like", auth, postsCtrl.likePost);
//router.post("/:id/comments", auth, postsCtrl.addComment);
//router.delete("/comments/:id", auth, postsCtrl.deleteComment);
module.exports = router;
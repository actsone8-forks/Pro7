const fs = require('fs');
const token = require("../middleware/token");
const db = require("../models"); // to access db tables
const { post } = require('../Routes/UserRoutes');


exports.createPost = (req, res, next) => {
    console.log(req.body.post)
    const Post = new Post({
      message: req.body.message,
      link: req.body.link,
      imageUrl: imageUrl,
      UserId: user.id,
      });
    
    Post.save().then(
      () => {
        res.status(201).json({
          message: 'Post saved successfully!'
        });
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
};
  
  exports.updatePost = (req, res, next) => {
        Post.updateOne({_id: req.params.id}, post).then(
          () => {
            res.status(201).json({
              message: 'Post updated successfully!'
            });
          }
        ).catch(
          (error) => {
            res.status(400).json({
              error: error
            });
          }
        );
};
  exports.deletePost = (req, res, next) => {
    Post.findOne({_id: req.params.id}).then(
        (post) => {
          const filename = post.imageUrl.split('/images/')[1];
          fs.unlink('images/' + filename, () => {
            Post.deleteOne({_id: req.params.id}).then(
              () => {
                res.status(200).json({
                  message: 'Deleted!'
                });
              }
            ).catch(
              (error) => {
                res.status(400).json({
                  error: error
                });
              }
            );
          });
        }
      );
    };
  exports.getallPosts = (req, res, next) => {
    Post.find().then(
        (posts) => {
          res.status(200).json(posts);
        }
      ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
      );
    };



exports.likePost = async (req, res, next) => {
  try {
    const userId = token.getUserId(req);
    const postId = req.params.id;
    const user = await db.Like.findOne({
      where: { UserId: userId, PostId: postId },
    });
    if (user) {
      await db.Like.destroy(
        { where: { UserId: userId, PostId: postId } },
        { truncate: true, restartIdentity: true }
      );
      res.status(200).send({ messageReturn: "Post unlike successfully!!" });
    } else {
      await db.Like.create({
        UserId: userId,
        PostId: postId,
      });
      res.status(201).json({ messageReturn: "Post liked!" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
 
exports.addComment = async (req, res) => {
  try {
    const comment = req.body.commentMessage;
    const username = req.body.commentUsername;
    const newComment = await db.Comment.create({
      message: comment,
      username: username,
      UserId: token.getUserId(req),
      PostId: req.params.id,
    });

    res
      .status(201)
      .json({ newComment, messageReturn: "Comment added successfully!!" });
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};
exports.deleteComment = async (req, res) => {
  try {
    const userId = token.getUserId(req);
    const checkAdmin = await db.User.findOne({ where: { id: userId } });
    const comment = await db.Comment.findOne({ where: { id: req.params.id } });

    if (userId === comment.UserId || checkAdmin.admin === true) {
      db.Comment.destroy({ where: { id: req.params.id } }, { truncate: true });
      res.status(200).json({ message: "comment deleted successfully" });
    } else {
      res.status(400).json({ message: "Invalid operation" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Server error" });
  }
};

  

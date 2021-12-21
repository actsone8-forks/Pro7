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

 

  

const fs = require('fs');
const { Post, User, File } = require("../Models");


exports.createPost = async (req, res, next) => {
  try {
    const post = await Post.create({
      createdAt: new Date(),
      message: req.body.post,
      userId: Number(req.body.user),
    });

    if (req.files != null) {
      await File.create({
        name: req.files.file.name.split('.')[0],
        data: req.files.file.data,
        size: req.files.file.size,
        type: req.files.file.mimetype,
        createdAt: new Date(),
        postId: post.id,
      });
    }

    res.status(201).json({
      message: "Post saved successfully!",
      data: {
        ...post
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

exports.getAllPosts = (req, res, next) => {
  console.log('GEtting posts')
  // We need to get all posts and all files and users associated with them
  Post.findAll({
    include: [
      {
        model: File,
        as: 'files',
      },
      {
        model: User,
        as: 'user',
      },
    ],
    order: [["createdAt", "DESC"]],
  }).then(
    (posts) => {
      res.status(200).json(posts);
    }
  ).catch(
    (error) => {
      console.log(error);
      res.status(400).json({
        error: error,
      });
    }
  );

};

exports.registerView = async (req, res) => {
  try {
    // UserId, postId
    const { userId, postId } = req.body;
    // 1. Retrieve post
    const post = await Post.findOne({ where: { id: postId } });

    if (!post) {
      return res.status(404).send({ error: 'Post not found' });
    }

    if (post.dataValues.userId === userId) {
      return res.status(304).send({ error: 'Current users post' });
    }
    // 2. Check if user exists in views
    let { views } = post
    // views is null/undefined
    if (!views) {
      views = []
    }
    // Check if user exists in views
    if (views.includes(userId)) {
      return res.status(200).send({ message: 'View already registered' });
    }
    // 3. Update post views list
    // await Post.update({ id: postId  }, { views: [...views, userId] });
    views = [...views, userId]
    console.log(views)
    await post.update({ views })
    await post.save(); res.status(200).send({ success: 'OK' });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: 'An error occured' })
  }
}


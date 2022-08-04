const db = require("../Models");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const { User } = require("../Models");

exports.login = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  });
  if (!user) {
    return res.status(401).json({
      error: 'User not found!'
    });
  }
  bcrypt.compare(req.body.password, user.password).then(
    (valid) => {
      if (!valid) {
        return res.status(401).json({
          error: 'Incorrect password!'
        });
      }
      const token = jwt.sign(
        { userId: user.dataValues.id },
        'RANDOM_TOKEN_SECRET',
        { expiresIn: '24h' });
      res.status(200).json({
        userId: user.dataValues.id,
        token: token,
        user: user
      });
    }
  ).catch(
    (error) => {
      return res.status(500).json({
        error: error,
      });
    }
  );
}



exports.signUp = (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(
    (hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
        fullName: req.body.fullName,
      });
      user.save().then(
        () => {
          res.status(201).json({
            message: 'User added successfully!'
          });
        }
      ).catch(
        (error) => {
          res.status(500).json({
            error: error
          });
        }
      );
    }
  );
}

exports.getAll = (req, res, next) => {
  User.findAll().then(data => {
    res.send(data)
  }).catch(err => {
    res.status(500).send({
      message: err.message
    })
  })
}

exports.delete = async(req, res) => {
  try {
    const id = req.params.id;
    const user = await db.User.findOne({ where: { id: id } });
    if (user && user.photo != null) {
      const filename = user.photo.split("/upload")[1];
      fs.unlink(`upload/${filename}`, () => {
        // if photo exists it'll delete and the account
        db.User.destroy({ where: { id: id } });
        res.status(200).json({ messageReturn: "deleted user" });
      });
    } else {
      db.User.destroy({ where: { id: id } }); // delete the account
      res.status(200).json({ messageReturn: "deleted user" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "Server error" });
  }
};


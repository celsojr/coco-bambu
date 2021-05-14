User = require("../models/user.model");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const environment = require("../config/environment");

exports.index = function (req, res) {
  User.get(function (err, users) {
    if (err) {
      res.status(400).json({
        status: "error",
        error: "Bad Request"
      });
    }
    res.json({
      status: "success",
      message: "Usuários retornados com sucesso",
      data: users
    });
  });
};

exports.new = function (req, res) {
  User.find({ username: req.body.username.trim() }, function (err, users) {
    if (err) {
      res.status(400).json({
        status: "error",
        message: err
      });
    }
    if (users && users.length > 0) {
      res.status(400).send({
        status: "error",
        message: req.body.username + " já existe"
      });
    } else {
      var user = new User();
      user.username = req.body.username;
      user.email = req.body.username;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 10);
      }
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.save(function (err) {
        if (err) {
          res.status(400).json({
            status: "error",
            error: err
          });
        }
        res.json({
          message: "Usuário novo criado!",
          data: user
        });
      });
    }
  });
};

exports.view = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err) {
      res.status(400).json({
        status: "error",
        error: err
      });
    }
    res.json({
      message: "Carregando detalhes do usuário...",
      data: user
    });
  });
};

exports.update = function (req, res) {
  User.findByIdAndUpdate(req.params.user_id, req.body, { new: true }, function (
    err,
    user
  ) {
    if (err) {
      res.status(400).json({
        status: "error",
        error: err
      });
    }

    res.json({
      message: "Informações de usuário atualizadas",
      data: user
    });
  });
};

exports.delete = function (req, res) {
  User.remove(
    {
      _id: req.params.user_id
    },
    function (err, user) {
      if (err) {
        res.status(400).json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Usuário deleted"
      });
    }
  );
};

exports.authenticate = function (req, res) {
  User.findOne({ username: req.body.username }, function (err, user) {
    if (err) {
      res.status(400).json({
        status: "error",
        error: err
      });
    }

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      user.token = jwt.sign({ sub: user._id }, environment.secret, {
        algorithm: "HS256"
      });
      delete user.password;
      res.json({
        status: "success",
        message: "Usuários retornados com sucesso",
        data: user
      });
    } else {
      res.status(401).send({
        status: "error",
        message: "Usuário e/ou senha inválidos."
      });
    }
  });
};

exports.changePassword = function (req, res) {
  User.findById(req.params.user_id, function (err, user) {
    if (err) {
      res.status(400).json({
        status: "error",
        error: err
      });
    }

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 10);
      }
      user.save(function (err) {
        if (err) res.json(err);
        res.status(202).send({
          status: "success",
          message: "Senha atualizada com sucesso"
        });
      });
    } else {
      res.status(401).send({
        status: "error",
        message: "Senha antiga inválida."
      });
    }
  });
};

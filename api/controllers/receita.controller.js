Receita = require("../models/receita.model");

exports.index = function (req, res) {
    Receita.get(function (err, receitas) {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "Receitas retornadas com sucesso",
            data: receitas
        });
    });
};

exports.view = function (req, res) {
    Receita.findById(req.params.receita_id, function (err, receita) {
      if (err) {
        res.status(400).json({
          status: "error",
          error: err
        });
      }
      res.json({
        status: "success",
        message: "Carregando detalhes da receita...",
        data: receita
      });
    });
  };
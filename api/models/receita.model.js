var mongoose = require("mongoose");

var receitaSchema = mongoose.Schema({
  _id: String,
  imagePath: {
    small: { type: String },
    large: { type: String }
  },
  tempoPreparo: {
    type: Number,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  ingredientes: [{
    type: String
  }],
  passos: [{
    ordem: { type: Number, default: 1, required: true },
    descricao: { type: String, required: true }
  }],
  create_date: {
    type: Date,
    default: Date.now
  }
});

var Receita = (module.exports = mongoose.model("receita", receitaSchema));
module.exports.get = function (callback, limit) {
  Receita.find(callback).limit(limit);
};

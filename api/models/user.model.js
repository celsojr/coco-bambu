var mongoose = require("mongoose");

var userSchema = mongoose.Schema({
  _id: String,
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  token: String,
  email: String,
  mobile: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});

var User = (module.exports = mongoose.model("user", userSchema));
module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
};

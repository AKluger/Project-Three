// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// var bcrypt = require("bcrypt");
var Sequelize = require("sequelize");

// const bookSchema = new Schema({
module.exports = function(sequelize, DataTypes) {
const User = sequelize.define("Book", {
  title: { type: Sequilize.STRING, required: true },
  author: { type: Sequilize.STRING, required: true },
  currentPage: {type: Sequilize.INTEGER, required: true },
  hasStarted: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
});

 return Book;

}

// const Book = mongoose.model("Book", bookSchema);

// module.exports = Book;

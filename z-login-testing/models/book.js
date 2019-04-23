// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// var bcrypt = require("bcrypt");
var Sequelize = require("sequelize");

// const bookSchema = new Schema({
module.exports = function(sequelize, DataTypes) {
const Book = sequelize.define("Book", {
  title: { type: Sequelize.STRING, required: true },
  author: { type: Sequelize.STRING, required: true },
  complete: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },

});

Book.associate = function(models) {
  Book.belongsTo(models.Class, {
    foreignKey: {
      allowNull: false
    }
  });
};

 return Book;

}
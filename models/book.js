// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// var bcrypt = require("bcrypt");
var Sequelize = require("sequelize");

// const bookSchema = new Schema({
module.exports = function(sequelize, DataTypes) {
const Book = sequelize.define("Book", {
  title: { type: Sequelize.STRING, required: true },
  author: { type: Sequelize.STRING, required: true },
  currentPage: {type: Sequelize.INTEGER, required: true },
  hasStarted: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },


});

Book.associate = function(models) {
  // We're saying that a Post should belong to an Author
  // A Post can't be created without an Author due to the foreign key constraint
  Book.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  });
};

 return Book;

}

// const Book = mongoose.model("Book", bookSchema);

// module.exports = Book;

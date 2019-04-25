// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// var bcrypt = require("bcrypt");
var Sequelize = require("sequelize");

// const bookSchema = new Schema({
module.exports = function(sequelize, DataTypes) {
const Class = sequelize.define("Class", {
  name: { type: Sequelize.STRING, required: true },
});

Class.associate = function(models) {
  Class.belongsTo(models.Teacher, {
    foreignKey: {
      allowNull: false
    }
  });
};

Class.associate = function(models) {
    Class.hasMany(models.Book, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  

 return Class;

}
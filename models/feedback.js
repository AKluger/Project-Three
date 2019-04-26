// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// var bcrypt = require("bcrypt");
var Sequelize = require("sequelize");

// const bookSchema = new Schema({
module.exports = function(sequelize, DataTypes) {
const Feedback = sequelize.define("Feedback", {
    // email: { type: Sequelize.STRING, allowNull: false, required: true },
    note: { type: Sequelize.STRING, allowNull: false, required: true },
    // FeedbackId: {
    //     type: Sequelize.INTEGER,
    //     defaultValue: 1
    // },
});

Feedback.associate = function(models) {
  Feedback.belongsTo(models.Teacher, {
    // foreignKey: {
    //   allowNull: false
    // }
     foreignKey: {
        allowNull: false,
        // TeacherId: models.Teacher.id
    }
  });
};

 return Feedback;

}
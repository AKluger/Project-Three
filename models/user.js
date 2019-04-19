// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
// var models = require("../models");
var bcrypt = require("bcryptjs");
// var bcrypt = require("bcrypt");
var Sequelize = require("sequelize");
// var mongoose = require('mongoose');
// var uniqueValidator = require('mongoose-unique-validator');

// var UserSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     trim: true,
//     unique: true,
//   },
//   name: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   favoriteBook: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   password: {
//     type: String,
//     required: true
//   }
// });

// UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});
// var User = mongoose.model('User', UserSchema);
// module.exports = User;

// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      // type: DataTypes.STRING,
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    username: {
      // type: DataTypes.STRING,
      type: Sequelize.STRING,
      // required: true
      allowNull: false,

    },
    password: {
      // type: DataTypes.STRING,
      type: Sequelize.STRING,
      // required: true
      allowNull: false,

    },
  }, {
      timestamps: false
  });

  // User.associate = function(models) {
  //   User.hasMany(models.Toy, {
  //     foreignKey : 'id',
  //     sourceKey: 'userId'
  //   });

    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    // User.hasMany(models.Toy, {
    //   onDelete: "cascade"
    // });
  // };




  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
 
  // User.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };
  // // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // // In this case, before a User is created, we will automatically hash their password
  // User.hook("beforeCreate", function(user) {
  //   user.password = bcrypt.hashSync(
  //     user.password,
  //     bcrypt.genSaltSync(10),
  //     null
  //   );
  // });

    // generating a has
  // User.generateHash = function(password) {
  //   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  // };

  // // checking if password is valid
  // User.prototype.validPassword = function(password) {
  //   return bcrypt.compareSync(password, this.password);
  // };

  
//   User.associate = function(models){
//     User.hasMany(models.Books, {
//         foreignKey: "id",
//         onDelete: "cascade"
//     });
// };

User.associate = function(models) {
  // Associating Author with Posts
  // When an Author is deleted, also delete any associated Posts
  User.hasMany(models.Book, {
    onDelete: "cascade"
  });
};



  // User.associate = function(models) {
  //   // User.hasMany(models.Toy,{as: 'books', foreignKey: 'userId'});

  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   User.hasMany(models.Book, {
  //     onDelete: "cascade"
  //   });
  // };
  return User;
};

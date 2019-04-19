// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const bcrypt = require("bcryptjs")

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/landing");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/users", function(req, res) {
    password = req.body.password;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          password = hash;
          // console.log(password)
          // password
              // .save()
              // .then(user  => res.json(user))
              // .catch(user => console.log(err))
              db.User.create({
                email: req.body.email,
                username: req.body.username,
                password: password,
                // avi: req.body.avi
              })
              .then(function() {
                res.redirect(307, "/");
              }).catch(function(err) {
                console.log(err);
                res.status(422).json(err.errors[0].message);
              });
            });
      })
    })  
    

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });

  app.get("/api/users/", function(req, res) {
    // if (!req.user) {
    //   // The user is not logged in, send back an empty object
    //   res.json({});
    // } else {
    db.User.findAll({})
      .then(function(dbUser) {
        res.json(dbUser);
      });
    // }
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/signup", function(req, res) {
    // console.log(req.user.avi);
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
      console.log("Hi, I'm here")
    }
    else {
      res.json({
        email: req.user.email,
        id: req.user.id,
        // avi: req.user.avi
      });
    }
  });

  app.delete("/api/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbUser) {
        res.json(dbUser);
      });
  });

  app.put("/api/signup", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    console.log(req.body);
    db.User.update({
        avi: req.body.avi
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbUser) {
    });
  });


};

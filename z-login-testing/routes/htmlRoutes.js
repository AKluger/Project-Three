var path = require('path');

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app){

  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/create");
    }
    res.sendFile(path.join(__dirname, "../public/guest.html"));
    // res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/create");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/game", isAuthenticated, function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/create.html"));
    res.sendFile(path.join(__dirname, "./client/build/index.html"));

  });

  // app.get("/users", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/users.html"));
  // });

  // app.get("/settings", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/avatar.html"));
  // });

  // app.get("/trophy-room", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/trophy-room.html"));
  // });

  // app.get("/signup", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/signup.html"));
  // });

};

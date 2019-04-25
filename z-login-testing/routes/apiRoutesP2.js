// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');

module.exports = function(app) {


  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });

// ---- //

  //TEACHERS -> SHOULD BE PROTECTED
  app.get("/api/teachers/", function(req, res) {
    // console.log(res);
    // if (!req.user) {
    //   // The user is not logged in, send back an empty object
    //   res.json({});
    // } else {
    db.Teacher.findAll({})
      .then(function(dbTeacher) {
        res.json(dbTeacher);
      });
    });

  app.get("/api/teachers/:email", function(req, res) {
    db.Teacher.findOne({
      where: {
        email: req.params.email
      }
    })
      .then(function(dbTeacher) {
        res.json(dbTeacher);
      });
  });

  app.post("/api/teachers", function(req, res) { 
    password = req.body.password;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
          if (err) throw err;
          password = hash;
              db.Teacher.create({
                email: req.body.email,
                school: req.body.school,
                city: req.body.city,
                state: req.body.state,
                password: password,
              })
              .catch(function(err) {
                console.log(err);
                res.status(422).json(err.errors[0].message);
              });
            });
      })
    })

  // ----- //


  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    res.json("/game");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error

  // function verifyToken(res, req, next) {
  //   // get aut header value
  //   const bearerHeader = req.headers['authorization'];

  //   if(typeof bearerHeader !=='undefinded') {
  //     const bearer = bearerHeader.split(' ')
  //     const bearerToken = bearer[1];
  //     req.token = bearerToken;
  //   } else {
  //     res.sendStatus(403)
  //   }
  // }

  
    
  app.post('/api/login/', (req, res) => {
      const user = {
        id: 1,
        username: 'troy',
        email: 'brad@gmail.com'
      }
      jwt.sign({user: user}, 'secretkey', (err, token) => {
        res.json({token: token})
      });
    })
  

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });

 



  // });

  // app.get("/api/teacher/:id", function(req, res) {
  //   console.log(req.params)
  //   // We just have to specify which todo we want to destroy with "where"
  //   db.Teacher.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function(dbTeacher) {
  //     res.json(dbTeacher);
  //   });

  // });

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

  // app.get("/api/teachers/:id", function(req, res) {
  //   db.Teacher.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(dbTeacher) {
  //       res.json(dbTeacher);
  //     });
  // });

  app.get("/api/teachers/:email", function(req, res) {
    db.Teacher.findOne({
      where: {
        email: req.params.email
      }
    })
      .then(function(dbTeacher) {
        res.json(dbTeacher);
        // console.log(dbTeacher.password)
      });
  });

  // app.put("/api/signup", function(req, res) {
  //   // Update takes in an object describing the properties we want to update, and
  //   // we use where to describe which objects we want to update
  //   console.log(req.body);
  //   db.Teacher.update({
  //       avi: req.body.avi
  //   }, {
  //     where: {
  //       id: req.body.id
  //     }
  //   }).then(function(dbUser) {
  //   });
  // });

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });


};

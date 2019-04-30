// Requiring our models and passport as we've configured it
const db = require("../models");
// const express = require('express')
// const router = express.Router();
// var passport = require("../config/passport");
// var Sequelize = require("sequelize");
const passport = require('passport');
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken');
const Teacher = require('../models/teacher')
// const key = require('../config/keys.js')
const config = require('config')
const auth = require('../config/middleware/auth')



module.exports = function(app) {
  

// TEACHER API //
// TEACHER API // 
// TEACHER API // 

app.get('/library', passport.authenticate('token', {session: false}))

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
                  name: req.body.name
                })
                .then(teacher => {
                  // if (!teacher) {return res.send('empty')}
                  jwt.sign( 
                    // { id: teacher.id },                  
                    // { id: teacher.id, email: teacher.email },                  
                    { id: teacher.id, email: teacher.email, name: teacher.name },                         
                    // { email: teacher.email },
                    config.get('JwtSecret'),
                    { expiresIn: 3600 },
                    (err, token) => {
                      if(err) throw err;
                      // localStorage.setItem('token', token)
                      console.log(token)
                      res.json({
                        token,
                        teacher: {
                          id: teacher.id,
                          email: teacher.email,
                          name: teacher.name
                        }
                      })
                    }

                  )
                })
                .catch(function(err) {
                  res.status(422).json(err.errors[0].message);
                });
              })
        })
  })
  
// }

    app.get("/api/teachers/", function(req, res) {
      db.Teacher.findAll({
        include: [db.Feedback]
      })
        .then(function(dbTeacher) {
          res.json(dbTeacher);
        });
      });

      app.get("/api/teachers/:id", function(req, res) {
        db.Teacher.findOne({
          where: {
            id: req.params.id
          },
          include: [db.Feedback]
        }).then(function(dbTeacher) {
          res.json(dbTeacher);
        });
      });


  // Feedback 
  // Feedback  
  // Feedback  

  app.get("/api/feedback", function(req, res) {
    console.log(req.body)
    const { note } = req.body
    db.Feedback.findAll({})
      .then(function(dbFeedback) {
        res.json(dbFeedback);
    });
  });

  app.get("/api/posts/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Feedback.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Teacher]
    }).then(function(dbFeedback) {
      res.json(dbFeedback);
    });
  });

    app.post("/api/feedback", function(req, res) {
      console.log(req.body)
      // const { id, note } = req.body
      db.Feedback.create({
        email: req.body.email,
        TeacherId: req.body.TeacherId,
        note: req.body.note,
        name: req.body.name
      })
        .then(function(dbFeedback) {
          console.log(dbFeedback);
          res.json(dbFeedback);
      });
    });

      // PUT route for updating posts
      app.put("/api/feedback", function(req, res) {
        db.Post.update(
          req.body,
          {
            where: {
              TeacherId: req.body.id
            }
          }).then(function(dbFeedback) {
          res.json(dbFeedback);
        });
      });
      
  // AUTH API // 
  // AUTH API // 
  // AUTH API // 

  app.post("/api/login/", function(req, res) {
    const { password, email } = req.body
    // console.log(req.body)
    db.Teacher.findOne({
      where: {
        email: email
      }
    })
      .then(teacher => {
        // console.log(teacher)
        if (!teacher) {return res.send('empty')}
        // if (!teacher) {return res.status(400).json({msg: 'Invalid Credentials'})
        // console.log(teacher.password)
        bcrypt.compare(password, teacher.password)
          .then(isMatch => {
            console.log(isMatch)
            // if(!isMatch) return res.status(400).json({msg: 'Invalid Credentials'})
            if(!isMatch) {return res.send('empty')}

            jwt.sign( 
              { id: teacher.id, email: teacher.email, name: teacher.name },                         
              // { id: teacher.id },              
              // { email: teacher.email },
              config.get('JwtSecret'),
              { expiresIn: 3600 },
              (err, token) => {
                if(err) throw err;
                res.json({
                  token,
                  teacher: {
                    id: teacher.id,
                    email: teacher.email,
                    name: teacher.name
                  }
                })
              }
            )
          })
      });
  });


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
      });
    }
  });


  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/login");
  });


};

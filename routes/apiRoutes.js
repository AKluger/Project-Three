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



module.exports = function(app) {
  

// TEACHER API //
// TEACHER API // 
// TEACHER API // 
// app.post("/api/teachers", function(req, res) { 
//   // console.log(req.body);
//   const { email, password, school, city, state } = req.body
//   // console.log(password);

//   if(!email || !password || !school || !city || !state) {
//     return res.status(400).json({msg: 'Please enter all fields'})
//   }

//   db.Teacher.findOne({ 
//       where: {
//         email: email
//       } 
//     })
//     .then(teacher => {
//         console.log(teacher);
//         if(teacher) return res.status(400).json({ msg:'User already exists'});
//         // res.json(teacher)// console.log(teacher);
//         const newTeacher = new Teacher({
//           email,
//           password,
//           school,
//           state,
//           city
//         });
        
//         bcrypt.genSalt(10, (err, salt) => {
//           bcrypt.hash(password, salt, (err, hash) => {
//             if (err) throw err;
//             console.log(hash);
//               newTeacher.password = hash;
//               newTeacher.save()
//                .then(teacher => {
//                  res.json({
//                    teacher: {
//                      id: teacher.id,
//                      email: teacher.email,

//                    }
//                  })
//                })

//           })
//         })
//   })
// })

// app.get('/library', passport.authenticate('jwt', {session: false}))

app.post("/api/teachers", function(req, res) { 
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
              db.Teacher.create({
                email: req.body.email,
                school: req.body.school,
                city: req.body.city,
                state: req.body.state,
                password: password,
                // avi: req.body.avi
              })
              .then(teacher => {

                jwt.sign( 
                  { email: teacher.email },
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
                        email: teacher.email
                      }
                    })
                  }

                )
                // console.log(teacher) 

              // .then(teacher => console.log(teacher) )
              })
              // .catch(function(err) {
              //   // console.log(err);
              //   res.status(422).json(err.errors[0].message);
              // });
            })
      })
    })

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
            // console.log(dbTeacher.password)
          });
      });

  // AUTH API // 
  // AUTH API // 
  // AUTH API // 
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

  app.post('/api/login/', (req, res) => {
    const user = {
      id: 1,
      username: 'troy',
      email: 'troy@gmail.com'
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




  
  // // Using the passport.authenticate middleware with our local strategy.
  // // If the user has valid login credentials, send them to the members page.
  // // Otherwise the user will be sent an error
  // app.post("/api/login", passport.authenticate("local"), function(req, res) {
  //   // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  //   // So we're sending the user back the route to the members page because the redirect will happen on the front end
  //   // They won't get this or even be able to access this page if they aren't authed
  //   res.json("/game");
  // });

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


};

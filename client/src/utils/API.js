import axios from "axios";
import bcrypt from "bcryptjs";

export default {
  // Gets all books
  getTeachers: function() {
    return axios.get("/api/teachers");
  },
  // Gets the book with the given id
  // getUser: function(id) {
  //   return axios.get("/api/teacher/" + id);
  // },
  getTeacher: function(userData) {
    return axios.post("/api/login/", userData);
      // .then(res => {console.log(res.data)})
      // })
    },

  deserializeUser: function(password, hash) {
    return bcrypt.compare(password, hash);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveTeacher: function(userData) {
    return axios.post("/api/teachers", userData);
  },
  logOutUser: function() {
    return axios.get("logout");
  }

};


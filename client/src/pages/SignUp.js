import React, { Component } from "react";

import './style.css'
import {Button, Col, Container, Row, Jumbotron, Form, Text} from 'react-bootstrap';
// import LoginBtn from "../components/LoginBtn";
// import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, LoginBtn } from "../components/LoginForm";
import { Redirect } from 'react-router-dom'
import axios from "axios";



class SignUp extends Component {
  state = {
    user: [],
    email: "",
    school: "",
    city: "",
    state: "",
    password: "",
    redirect: false,
    name: "",
    // isLoggedIn: false,
    redo: "",
    hash: "",
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect to='/Educator' />
  //   }
  // }

  componentWillMount() {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem("token");
  }


  authenticateUser = () => {
    this.setState({isAuthenticated: true});
    localStorage.setItem("234123jsfjodifisjf232304", this.state.isAuthenticated);

  }

  componentDidMount() {

  }

  

//   clearForm = () => {
//     // API.getUser()
//     //   .then(res =>
//         this.setState({email: "", username: "", password: ""})
//     //   )
//     //   .catch(err => console.log(err));
//   };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // async getUser (email) {
  //   const res = await axios('/api/teachers/'+email)
  //   return await res.send(res.data)
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.email && this.state.password && this.state.school) {
    // if (API.newUser(this.state.email, this.state.password)) {

      if (this.state.email && this.state.password && this.state.city && this.state.state && this.state.name) {
        API.saveTeacher({
          email: this.state.email,
          school: this.state.school,
          city: this.state.city,
          state: this.state.state,
          name: this.state.name,
          password: this.state.password,
        })
        .then(res => {
          if(res.data==='empty') {
            this.setState({redo: true})
          }
          localStorage.setItem('token', res.data.token)
        })
        .then(res => localStorage.setItem('token', res.data.token))
        .then(this.setState({email: "", school: "", password: "", state: "", city: "", name: ""}))
        .then(setTimeout(() => {
          this.setState({
              redirect: true,
            })
          }, 2000)
        )
        .catch(err => console.log(err));
  
          // this.setState({redirect: true}))
        // API.getUser(this.state.email)
        //  this.setState({email: "", school: "", password: "", state: "", city: ""})
        // // checking if password is valid
        // this.setState({redirect: true})
        //  }
        // .then(this.props.history.push("/"))
        //  .then(event.target.reset())
        // .then((API.getUser(this.state.email)))
        // .then(this.state.hash = )
        // .then(API.deserializeUser(this.state.password, this.state.hash))
      }
    }
  // };

  render() {

    if (this.state.redirect) {
      return <Redirect to='/educator' />
    }

    if (this.state.redo) {
      return window.location.reload()
    }

    return (
      <div >
        <Nav status={false}/>
        <Container fluid >
            <Row>
            <Col md={{ span: 4, offset: 4 }} className="text-center pt-4">
            <span className="headerText mb-2"> Sign-Up </span>
                <Form>
                <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email"
                />
                  <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Password"
                    type="password"
                />
                  <Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="Full Name"
                />
                <Input
                    value={this.state.school}
                    onChange={this.handleInputChange}
                    name="school"
                    placeholder="School (Optional)"
                />
                <Input
                    value={this.state.city}
                    onChange={this.handleInputChange}
                    name="city"
                    placeholder="City"
                />
                <Input
                    value={this.state.state}
                    onChange={this.handleInputChange}
                    name="state"
                    placeholder="State"
                />
                <LoginBtn
                    disabled={!(this.state.email && this.state.password && this.state.city && this.state.state)}
                    onClick={this.handleFormSubmit}
                    id="login-btn"
                >
                    Sign-Up
                </LoginBtn>
                </Form>
            </Col>
            </Row>
        </Container>
      </div>

    );
  }
}

export default SignUp;
import React, { Component } from "react";

import './style.css'
import { Button, Col, Container, Row, Form, Text } from 'react-bootstrap';
// import LoginBtn from "../components/LoginBtn";
import Nav from "../components/Nav";
import {withErrorHandling, DivWithErrorHandling} from "../components/ErrorDiv/ErrorDiv.js";
import API from "../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
import { Input, TextArea, LoginBtn } from "../components/LoginForm";
import { Redirect } from 'react-router-dom'
import axios from "axios";

class Login extends Component {
  state = {
    user: [],
    email: "",
    school: "",
    city: "",
    state: "",
    password: "",
    redirect: false,
    redo: false,
    hash: "",
    showError: false
  };

  componentWillMount() {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem("token");
  }


  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  

  // looking to trigger alert if formsubmit fails
  handleLoginErr(err) {
    this.setState((prevState, props) => {
      return { showError: !prevState.showError }
    })
  }


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
    // if (this.state.email && this.state.password && this.state.school && this.state.city && this.state.state) {
    if (this.state.email && this.state.password) {
      API.getTeacher({
        email: this.state.email,
        password: this.state.password,
      })
        .then(res => {
          if (res.data === 'empty') {
            this.setState({ redo: true })
          }
          localStorage.setItem('token', res.data.token)
        })
        .then(this.setState({ email: "", password: "" }))
        .then(setTimeout(() => {
          this.setState({
            redirect: true,
          })
        }, 2000)
        )
        .catch(this.handleLoginErr());
    }
  };

  render() {

    if (this.state.redirect) {
      return <Redirect to='/educator' />
    }

    // if (this.state.redo) {
    //   return window.location.reload()
    // }

    return (
      <DivWithErrorHandling showError={this.state.showError}>
        <Nav />
        <Container fluid >
          <Row>
            <Col md={{ span: 4, offset: 4 }} className="text-center pt-4">
              <span className="headerText mb-2"> Login </span>
              <Form className="signup-form">
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
                <Button
                  disabled={!(this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}
                  id="login-btn"
                >
                  Sign-In
                </Button>
              </Form>
            </Col>
          </Row>

        </Container>
      </DivWithErrorHandling>

    );
  }
}

export default Login;
import React, { Component } from "react";
import './style.css'
import { Button, Col, Container, Row, Form, Text } from 'react-bootstrap';
import Nav from "../components/Nav";
import { DivWithErrorHandling } from "../components/ErrorDiv/ErrorDiv.js";
import API from "../utils/API";
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

  handleFormSubmit = event => {
    event.preventDefault();

    if (this.state.email && this.state.password) {
      API.getTeacher({
        email: this.state.email,
        password: this.state.password,
      })
        .then(res => {
          if (res.data === 'empty') {
            this.setState({ redirect: false })
          }

          else {
            localStorage.setItem('token', res.data.token)
            this.setState({ redirect: true })
          }
        })
        .then(this.setState({ email: "", password: "" }))
        .catch(
          this.handleLoginErr());
    }
  };


  render() {
    console.log(this.state.redirect)
    if (this.state.redirect) {
      return <Redirect to='/educator' />
    }

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
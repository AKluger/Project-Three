import React, { Component } from "react";
import './style.scss'
import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import Nav from "../components/Nav";
import API from "../utils/API";
import { Input, ErrorBox, SuccessBox } from "../components/LoginForm";
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
    showError: false,
    errorMsg: "",
    success: false
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
            this.setState({ redirect: false, errorMsg: "Invalid email or password. Please try again." })
          }

          else {
            localStorage.setItem('token', res.data.token)
            this.setState({success: true})
            setTimeout(() => {
              this.setState({
                  redirect: true,
                })
              }, 2000)
          }
        })
        .then(this.setState({ email: "", password: ""}))
        .catch(
          this.handleLoginErr());
    }
  };


  render() {
    if (this.state.redirect) {
      return <Redirect to='/educator' />
    }


    return (
      <div>
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
                <ErrorBox 
                  error={this.state.errorMsg}> 
                </ErrorBox>
                <SuccessBox 
                  success={this.state.success}> 
                </SuccessBox>
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
      </div>

    );
  }
}

export default Login;
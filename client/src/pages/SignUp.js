import React, { Component } from "react";
import './style.scss'
import {Button, Col, Container, Row, Form} from 'react-bootstrap';
import Nav from "../components/Nav";
import API from "../utils/API";
import { Input, ErrorBox, SuccessBox } from "../components/LoginForm";
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
    redo: "",
    hash: "",
    errorMsg: "",
    successMsg: false
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  componentWillMount() {
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem("token");
  }


  authenticateUser = () => {
    this.setState({isAuthenticated: true});
    localStorage.setItem("234123jsfjodifisjf232304", this.state.isAuthenticated);

  }
  
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

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
              this.setState(  { redirect: false, errorMsg: "User already exists" })
            } else {
              localStorage.setItem('token', res.data.token)
              setTimeout(() => {
                this.setState({
                    redirect: true,
                  })
                }, 2000)
            }
          })
          .then(this.setState({email: "", school: "", password: "", state: "", city: "", name: "", success: true}))
          .catch(err => this.setState({ errorMsg: "User already exists", success: false}));
      }
    }

  render() {

    if (this.state.redirect) {
      return <Redirect to='/educator' />
    }

    return (
      <div >
        <Nav status={false}/>
        <Container fluid >
            <Row>
            <Col md={{ span: 4, offset: 4 }} className="text-center pt-4">
            <span className="headerText mb-2"> Sign-Up </span>
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
                  <Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="Name"
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
                <ErrorBox 
                  error={this.state.errorMsg}> 
                </ErrorBox>
                <SuccessBox 
                  success={this.state.success}> 
                </SuccessBox>
                <Button
                    disabled={!(this.state.email && this.state.password && this.state.city && this.state.state)}
                    onClick={this.handleFormSubmit}
                    id="login-btn"
                >
                    Sign-Up
                </Button>
                </Form>
            </Col>
            </Row>
        </Container>
      </div>

    );
  }
}

export default SignUp;
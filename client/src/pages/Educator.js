import React, { Component } from "react";
import {Button, Col, Container, Row, Jumbotron, Form} from 'react-bootstrap';
import Nav from "../components/Nav";
import API from "../utils/API";
import {TextArea } from "../components/LoginForm";
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import './style.css'

class Educator extends Component {
  state = {
    user: [],
    email: "",
    username: "",
    password: "",
    books: [],
    feedback: "",
    isLoggedIn: true
  };

  componentWillMount(){
    // Retrieve jwt token
    const token = localStorage.getItem("token") || null;

    if(token){
      axios.defaults.headers.common['Authorization'] = token;
      const decoded = jwtDecode(token);
      this.setState({email: decoded.email})
    } else {
      delete axios.defaults.headers.common['Authorization']
    }}

  //   clearForm = () => {
  //     // API.getUser()
  //     //   .then(res =>
  //         this.setState({email: "", username: "", password: ""})
  //     //   )
  //     //   .catch(err => console.log(err));
  //   };



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password && this.state.username) {
      API.saveUser({
        email: this.state.email,
        username: this.state.username,
        password: this.state.password,
      })

        .then(this.setState({ email: "", username: "", password: "" }))
        //   .then(event.target.reset())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Nav status={true} />
        
        <Container fluid className="p-0 educator">
        <Jumbotron  id="hero-educator" />
          <Row>
            <Col md={{ span: 6, offset: 3 }} className="text-center">
              <Form>
                <TextArea
                  value={this.state.feedback}
                  onChange={this.handleInputChange}
                  name="feedback"
                  placeholder="We'd love to hear your feedback!!!"
                />
                <Button
                id = "form-button" size="lg"
                  // disabled={!(this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Your Feedback
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Educator;

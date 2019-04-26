import React, { Component } from "react";
import { Button, Col, Container, Row, Jumbotron, Form, } from 'react-bootstrap';
import Nav from "../components/Nav";
import API from "../utils/API";
import { TextArea } from "../components/LoginForm";
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import FeedbackCard from "../components/FeedbackCard/Feedback.js"
import './style.css'

class Educator extends Component {

  state = {
    user: [],
    email: "",
    id: "",
    // username: "",
    // password: "",
    comments: [],
    feedback: "",
    isLoggedIn: true
  };

  componentWillMount() {
    // Retrieve jwt token
    const token = localStorage.getItem("token") || null;

    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
      const decoded = jwtDecode(token);
      this.setState({
        email: decoded.email,
        id: decoded.id
      })

    } else {
      delete axios.defaults.headers.common['Authorization']
    }
  }

  componentDidMount() {
    this.loadFeedback();
  }

  loadFeedback = () => {
    console.log("getting feedback")
    API.showFeedback()
      .then(res =>
        this.setState({
          comments: res.data
        })
      )
      .catch(err => console.log(err));
  }
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
    // if (this.state.email && this.state.password && this.state.username) {
    //   API.saveUser({
    //     email: this.state.email,
    //     username: this.state.username,
    //     password: this.state.password,
    //   
    if (this.state.email && this.state.feedback) {
      API.saveFeedback({
        email: this.state.email,
        note: this.state.feedback,
        TeacherId: this.state.id
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
        <Jumbotron id="hero-educator" className="jumbotron-fluid" />
        <Container fluid className="p-0 educator">

          <Row>
            <Col md={{ span: 6, offset: 3 }} className="text-center">
              <h1>We Welcome your feedback!</h1>
              <h3>Please leave your comments below to inform our team of how we may better design our product to suit your needs.</h3>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="text-center">

              <Form>
                <TextArea
                  value={this.state.feedback}
                  onChange={this.handleInputChange}
                  name="feedback"
                  placeholder="We'd love to hear your feedback!!!"
                />
                <Button
                  id="form-button" size="lg"
                  // disabled={!(this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}
                >
                  Submit Your Feedback
                </Button>
              </Form>
            </Col>
            {/* <Col md={{ span: 6, offset: 3 }} className="text-center"> */}
              {this.state.comments.length ? (
                <FeedbackCard className="m-3"
                  comments={this.state.comments}
                // buttonAction={this.deleteBook}
                // buttonClass="btn mt-1 mr-1 shadow-none"
                // buttonText="Delete Book"
                />
              ) : (<div className="col-md-8 offset-md-2 text-center feedback-section">
                <h3>No Feedback Yet!</h3>
              </div>
                )}

            {/* </Col> */}
          </Row>
        </Container>
      </div>

    );
  }
}

export default Educator;

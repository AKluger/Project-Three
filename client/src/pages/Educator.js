import React, { Component } from "react";
import { Button, Col, Container, Row, Jumbotron, Form, } from 'react-bootstrap';
import Nav from "../components/Nav";
import API from "../utils/API";
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import FeedbackCard from "../components/FeedbackCard/Feedback.js"
import { Redirect } from 'react-router-dom'
import './style.css'

class Educator extends Component {

  state = {
    user: [],
    email: "",
    id: "",
    name: "",
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
      // console.log(decoded);
      this.setState({
        email: decoded.email,
        id: decoded.id,
        name: decoded.name
      })

    } else {
      delete axios.defaults.headers.common['Authorization']
    }
  }

  componentDidMount() {
    // this.loadFeedback();
    const token = localStorage.getItem("token") || null;
    console.log(token)
    if (!token) {
      this.setState({ redirect: true });
    }
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



  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.feedback) {
      API.saveFeedback({
        email: this.state.email,
        name: this.state.name,
        note: this.state.feedback,
        TeacherId: this.state.id
      })
        .then(this.setState({ feedback: "" }))
        .then(setTimeout(() => { this.loadFeedback() }, 500))
        .catch(err => console.log(err));
    }
  };

  render() {

    if (this.state.redirect) {
      return <Redirect to='/' />

    }


    return (
      <div>
        <Nav status={true} />
        <Jumbotron id="hero-educator" className="jumbotron-fluid" />
        <Container fluid className="p-0 educator">

          <Row>
            <Col md={{ span: 6, offset: 3 }} className="text-center">
              <h1 className="educator">We welcome your feedback!</h1>
              <h3 className="educator">Please leave your comments below to inform our team of how we may better design our product to suit your needs.</h3>
            </Col>
            <Col md={{ span: 6, offset: 3 }} className="text-center">

              <Form>
                <Form.Group>
                  <Form.Control as="textarea" rows="3" value={this.state.feedback}
                    onChange={this.handleInputChange}
                    name="feedback"
                    placeholder="We'd love to hear your feedback!!!" />
                </Form.Group>
                <Button
                  id="form-button" size="lg"
                  onClick={this.handleFormSubmit}
                >
                  Submit Your Feedback
                </Button>
              </Form>
            </Col>
            {this.state.comments.length ? (
              <FeedbackCard className="m-3"
                comments={this.state.comments}
              />
            ) : (<div className="col-md-8 offset-md-2 text-center feedback-section mb-4">
              <h3>No Feedback Yet!</h3>
            </div>
              )}
          </Row>
        </Container>
      </div>

    );
  }
}

export default Educator;

import React, { Component } from "react";
// import LoginBtn from "../components/LoginBtn";
import Nav from "../components/Nav";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, LoginBtn } from "../components/LoginForm";
import './style.css'

class Educator extends Component {
  state = {
    user: [],
    email: "",
    username: "",
    password: "",
    books: [],
    feedback: ""
  };

  //   componentDidMount() {
  //     this.clearForm();
  //   }

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
        <Nav />
        
        <Container fluid>
        <div class="jumbotron" id="hero-educator" />
          <Row>
            <Col size="md-6" className="mx-auto">

              <form>
                <TextArea
                  value={this.state.feedback}
                  onChange={this.handleInputChange}
                  name="feedback"
                  placeholder="How may we improve?"
                />
                <LoginBtn
                  disabled={!(this.state.email && this.state.password)}
                  onClick={this.handleFormSubmit}
                >
                  Login
                </LoginBtn>
              </form>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Educator;

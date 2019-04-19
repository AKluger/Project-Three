import React, { Component } from "react";
// import LoginBtn from "../components/LoginBtn";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, LoginBtn } from "../components/LoginForm";

class Login extends Component {
  state = {
    user: [],
    email: "",
    username: "",
    password: ""
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

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

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
      
        .then(this.setState({email: "", username: "", password: ""}))
    //   .then(event.target.reset())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Nav/>
        <Jumbotron/>  
        <Container fluid>
            <Row>
            <Col size="md-6" className="mx-auto">
    
                <form>
                <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="Email"
                />
                <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="Username"
                />
                <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Password"
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

export default Login;

import React, { Component } from "react";
// import LoginBtn from "../components/LoginBtn";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
import { Input, TextArea, LoginBtn } from "../components/LoginForm";
import { Redirect } from 'react-router-dom'
import axios from "axios";
import { delay } from "popmotion";


class Login extends Component {
  state = {
    user: [],
    email: "",
    school: "",
    city: "",
    state: "",
    password: "",
    redirect: false,
    hash: ""
  };

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/Educator' />
    }
  }

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

  // async getUser (email) {
  //   const res = await axios('/api/teachers/'+email)
  //   return await res.send(res.data)
  // }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.school)
    // if (this.state.email && this.state.password && this.state.school) {
    if (this.state.email && this.state.password && this.state.school && this.state.city && this.state.state) {
      API.saveTeacher({
        email: this.state.email,
        school: this.state.school,
        city: this.state.city,
        state: this.state.state,
        password: this.state.password,
      })
      // API.getUser(this.state.email)
      
    .then((API.getUser(this.state.email)))
    // .then(this.state.hash = )
    // .then(API.deserializeUser(this.state.password, this.state.hash))
      //  this.setState({email: "", school: "", password: "", state: "", city: ""})
      // // checking if password is valid
      // this.setState({redirect: true})
    //  }
      // .then(this.setState({email: "", school: "", password: "", state: "", city: ""}))
      // // checking if password is valid
      // .then(this.setState({redirect: true}))
        
        // .then(this.props.history.push("/"))
        //  .then(event.target.reset())
        .catch(err => console.log(err));
    }
  };

  render() {

    if (this.state.redirect) {
      return <Redirect to='/' />
    }

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
                    value={this.state.school}
                    onChange={this.handleInputChange}
                    name="school"
                    placeholder="School"
                />
                <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="Password"
                    type="password"
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
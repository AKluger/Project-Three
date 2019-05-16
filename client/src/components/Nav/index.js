import React from 'react'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import './style.scss'
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom'

const navstyle = {
  paddingBottom: 0
}

export default class tempNav extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      isLoggedIn: false,
      redirect: false,
      name: "",

    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token") || null;
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
      const decoded = jwtDecode(token);
      this.setState({
        // name: decoded.name.toUpperCase()
      })

    }
    // console.log(localStorage.getItem('token'));
    this.tokenExists();
    // if(localStorage.getItem('token')) {
    //   this.LoggedIn = true
    // }
    // if(localStorage.getItem('token')===null) {
    //   this.setState({isLoggedIn: false})
    // }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  tokenExists() {
    if (localStorage.getItem('token')) {
      this.setState({ isLoggedIn: true }, () => {
        // console.log(this.state)
        // debugger
      })
    }
    // this.setState({isLoggedIn: false})
  }


  logoutUser() {
    // if(localStorage.getItem('token')==null) {
    this.setState({ isLoggedIn: false })
    this.setState({ redirect: true })
    // console.log(this.state.isLoggedIn)
    // }
  }

  render() {
    // if (!localStorage.getItem('token')) {
    //   this.setState({isLoggedIn:false})
    // }
    if (this.state.redirect) {
      return <Redirect to='/signup' />
    }
    // debugger

    const content = (!localStorage.getItem('token') || false) ? (

      // const content = (!this.props.status || !localStorage.getItem('token')) ? (

      <Navbar className="navbarcol" style={navstyle} expand="lg" id="welcome-nav">
        <Navbar.Brand className="jump" href="/"><span className="logotxt">WINC</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><span className="navtxt">Home   </span></Nav.Link>
            <Nav.Link href="/library"><span className="navtxt">Library   </span></Nav.Link>
            {/* <Nav.Link href="/educator"><span className="navtxt">Educator   </span></Nav.Link> */}
            {/* <Nav.Link href="/resources"><span className="navtxt">Resources   </span></Nav.Link> */}
            <Nav.Link href="/about"><span className="navtxt">About Us</span></Nav.Link>
          </Nav>
          <Nav>

            <div className="glyph">
              <Button
                href="/login"
                id="login-nav"
              >
                Sign-In
                </Button>
              <Button
                href="/signup"
                id="signin-nav"
              >
                Sign-Up
                </Button>
            </div>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    ) : (
        <Navbar className="navbarcol" style={navstyle} expand="lg">
          <Navbar.Brand className="jump" href="/"><span className="logotxt">WINC</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/"><span className="navtxt">Home   </span></Nav.Link>
              <Nav.Link href="/library"><span className="navtxt">Library   </span></Nav.Link>
              <Nav.Link href="/educator"><span className="navtxt">Educator   </span></Nav.Link>
              {/* <Nav.Link href="/resources"><span className="navtxt">Resources   </span></Nav.Link> */}
              <Nav.Link href="/about"><span className="navtxt">About Us</span></Nav.Link>
            </Nav>
            <Nav>
              <div>
                <Button
                  href="/login"
                  id="logout-nav"
                >
                  Logout
            </Button>
              </div>
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      );
    return (
      <div>
        {content}
      </div>
    );
  }
}
import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
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

    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token") || null;
    if(token){
      axios.defaults.headers.common['Authorization'] = token;
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
    // localStorage.getItem('token')
    // console.log(localStorage.getItem('token'))
    if(localStorage.getItem('token')) {
      this.setState({isLoggedIn: true}, () => {
        console.log(this.state)
        // debugger
      })
    }
    // this.setState({isLoggedIn: false})
    }
  

  logoutUser() {
    // if(localStorage.getItem('token')==null) {
      this.setState({isLoggedIn: false})
      this.setState({redirect: true})
      console.log(this.state.isLoggedIn)
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
    console.log(`Logged In: ${this.props.status}`) 
    console.log(`Token in Storage?: ${localStorage.getItem('token')}`)
    // const content = !this.props.status || !localStorage.getItem('token') ? (
    const content = (!localStorage.getItem('token') || false) ? (
      
    // const content = (!this.props.status || !localStorage.getItem('token')) ? (
      
      <Navbar className="navbarcol" style={navstyle} expand="lg">
        <Navbar.Brand className="jump" href="/"><span className="logotxt">WINC</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="mr-4"id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><span className="navtxt">Home   </span></Nav.Link>
            {/* <Nav.Link href="/library"><span className="navtxt">Library   </span></Nav.Link> */}
            <Nav.Link href="/educator"><span className="navtxt">Educator   </span></Nav.Link>
            <Nav.Link href="/resources"><span className="navtxt">Resources   </span></Nav.Link>
            <Nav.Link href="/about"><span className="navtxt">About Us</span></Nav.Link>
          </Nav>
          <Nav>

            <div className="glyph">

              <NavDropdown title={<span className="navtxt logintab"><FontAwesomeIcon className="" icon="user" /> </span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="/signup"><span className="droptxt">Register</span></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/login"><span className="droptxt">Login</span></NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    ) : (
    <Navbar className="navbarcol" style={navstyle} expand="sm">
        <Navbar.Brand className="jump" href="/"><span className="logotxt">WINC</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="/"><span className="navtxt">Home   </span></Nav.Link> */}
            <Nav.Link href="/library"><span className="navtxt">Library   </span></Nav.Link>
            <Nav.Link href="/educator"><span className="navtxt">Educator   </span></Nav.Link>
            <Nav.Link href="/resources"><span className="navtxt">Resources   </span></Nav.Link>
            <Nav.Link href="/about"><span className="navtxt">About Us</span></Nav.Link>
          </Nav>
          <Nav>


        <div className="glyph">
          <NavDropdown inline title={<span className="navtxt"><b><FontAwesomeIcon className="" icon="user"/> </b><span className="break">|</span></span>} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={this.tokenExists} href="/signup"><span className="droptxt">Logout</span></NavDropdown.Item>
            <NavDropdown.Divider />
            {/* <NavDropdown.Item href="/login"><span className="droptxt">Login</span></NavDropdown.Item> */}
          </NavDropdown>
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
  // }
  // return (
    
  // );
}
}


// WITH IF
// render() {
//     if (!localStorage.getItem('token') && (true)) {
//     return(
//       <Navbar className="navbarcol" style={navstyle} expand="sm">
//         <Navbar.Brand className="jump" href="/"><span className="logotxt">WINC</span></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse className="pr-5"id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="/"><span className="navtxt">Home   </span></Nav.Link>
//             {/* <Nav.Link href="/library"><span className="navtxt">Library   </span></Nav.Link> */}
//             <Nav.Link href="/educator"><span className="navtxt">Educator   </span></Nav.Link>
//             <Nav.Link href="/resources"><span className="navtxt">Resources   </span></Nav.Link>
//             <Nav.Link href="/about"><span className="navtxt">About Us</span></Nav.Link>
//           </Nav>
//           <Nav>

//             <div className="glyph">

//               <NavDropdown title={<span className="navtxt logintab"><FontAwesomeIcon className="" icon="user" /> </span>} id="basic-nav-dropdown">
//                 <NavDropdown.Item href="/signup"><span className="droptxt">Register</span></NavDropdown.Item>
//                 <NavDropdown.Divider />
//                 <NavDropdown.Item href="/login"><span className="droptxt">Login</span></NavDropdown.Item>
//               </NavDropdown>
//             </div>
//           </Nav>

//         </Navbar.Collapse>
//       </Navbar>
//     // ) : (
//     )
//   }
//   return(
//     <Navbar className="navbarcol" style={navstyle} expand="sm">
//         <Navbar.Brand className="jump" href="/"><span className="logotxt">WINC</span></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             {/* <Nav.Link href="/"><span className="navtxt">Home   </span></Nav.Link> */}
//             <Nav.Link href="/library"><span className="navtxt">Library   </span></Nav.Link>
//             <Nav.Link href="/educator"><span className="navtxt">Educator   </span></Nav.Link>
//             <Nav.Link href="/resources"><span className="navtxt">Resources   </span></Nav.Link>
//             <Nav.Link href="/about"><span className="navtxt">About Us</span></Nav.Link>
//           </Nav>
//           <Nav>


//         <div className="glyph">
//           <NavDropdown inline title={<span className="navtxt"><b><FontAwesomeIcon className="" icon="user"/> </b><span className="break">|</span></span>} id="basic-nav-dropdown">
//             <NavDropdown.Item onClick={this.tokenExists} href="/signup"><span className="droptxt">Logout</span></NavDropdown.Item>
//             <NavDropdown.Divider />
//             {/* <NavDropdown.Item href="/login"><span className="droptxt">Login</span></NavDropdown.Item> */}
//           </NavDropdown>
//           </div>
//         </Nav>
     
//     </Navbar.Collapse>
//     </Navbar>
//     );

//   // }
//   // return (
    
//   // );
// }
// }

// const tempNav = () => {
//   return(
//       <nav className="navbar  navbar-expand-md navbar-dark">
//         <a className="navbar-brand jump" href="/"> <span className="logotxt">WIN<div className="jump">C</div></span></a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item active">
//               <a className="nav-link" href="/"><span className="navtxt">Home   </span><span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/educator"><span className="navtxt">Educator   </span></a>
//             </li>
//           </ul>
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item dropdown myUserGlyph ">
//               <a className="nav-link" href="/"><span className="navtxt"><FontAwesomeIcon className="" icon="user"/> </span></a>
//               <ul className="dropdown-menu">
//                 <li><a href="/signup">Register</a></li>
//                 <li><a href="/login">Sign-in</a></li>
//               </ul>
//             </li>
//           </ul>
//         </div>
//       </nav>
//   )
// }

// export default tempNav


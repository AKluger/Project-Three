import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
const navstyle={
  paddingBottom: 0
}

export default class tempNav extends React.Component {
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar  className="navbarcol" style={navstyle} expand="sm">
        <Navbar.Brand className="jump" href="/"><span className="logotxt">WINC</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/"><span className="navtxt"><b>Home   </b><span className="break">|</span></span></Nav.Link>
            <Nav.Link href="/library"><span className="navtxt"><b>Library   </b><span className="break">|</span></span></Nav.Link>
            <Nav.Link href="/educator"><span className="navtxt"><b>Educator   </b><span className="break">|</span></span></Nav.Link>
           </Nav>  
            <Nav>
              <NavDropdown  inline title={<span className="navtxt"><b><FontAwesomeIcon className="" icon="user"/> </b><span className="break">|</span></span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="/signup"><span className="droptxt">Register</span></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/login"><span className="droptxt">Sign-in</span></NavDropdown.Item>
              </NavDropdown>
            </Nav>
         
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
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
//               <a className="nav-link" href="/"><span className="navtxt"><b>Home   </b><span className="break">|</span></span><span className="sr-only">(current)</span></a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="/educator"><span className="navtxt"><b>Educator   </b><span className="break">|</span></span></a>
//             </li>
//           </ul>
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item dropdown myUserGlyph ">
//               <a className="nav-link" href="/"><span className="navtxt"><b><FontAwesomeIcon className="" icon="user"/> </b><span className="break">|</span></span></a>
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


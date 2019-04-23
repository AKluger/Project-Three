import React, { Component } from "react";
import {Button, Col, Container, Row, Jumbotron, Badge} from 'react-bootstrap';
import Nav from "../components/Nav";
import API from "../utils/API";
import {TextArea } from "../components/LoginForm";
import './style.css'

function Welcome() {

//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };
{
    // lg={{ span: 12, offset: 0 }} className="text-center"
    return (
      <div>
        <Nav />
        
        <Container fluid className="p-0">
        <Jumbotron id="hero-educator" />
          <Row className="justify-content-md-center">
            <Col md="auto" md={8}>
            <h1 className="welcome"><Badge variant="success">Welcome</Badge> we're Winc-Stories, a team of developers providing resources for parents and educators to encourage youth to keep their cities clean.  Visit our library to discover a book or game, or click the educator tab to learn more</h1>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}

export default Welcome;

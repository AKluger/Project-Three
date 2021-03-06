import React from "react";
import { Col, Container, Row, Jumbotron, Badge } from 'react-bootstrap';
import Nav from "../components/Nav";
import './style.scss'

class Welcome extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <Container fluid className="p-0">
          <Jumbotron id="hero-educator" />
          <Row className="justify-content-md-center">
            <Col md={8}>
              <h1 className="welcome"><Badge id="welcome-badge">Welcome</Badge> we're Winc-Stories, a team of developers providing resources for parents and educators to encourage youth to keep their cities clean.  Kids can visit our <a href="/library" className="winc-link">library</a> to discover a book or game.  Educators please use our <a href="/signup" className="winc-link">sign-up page</a> for access to our feedback portal.</h1>
            </Col>
          </Row>
        </Container>
      </div>

    );
  }
}


export default Welcome;

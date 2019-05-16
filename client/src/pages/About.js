import React from "react";
import axios from 'axios'
import { Col, Container, Row, Jumbotron, Card, CardDeck } from 'react-bootstrap';
import Nav from "../components/Nav";
import './style.scss';
import alex from './images/alex_youth.jpg';
import monet from './images/monet_youth.jpg';
import ron from './images/ronald_youth.jpg';
import troy from './images/troy_youth.jpg';
class About extends React.Component {

    state = {
        isLoggedIn: false
    }
    componentDidMount() {
        // Retrieve jwt token
        const token = localStorage.getItem("token") || null;

        if (token) {
            axios.defaults.headers.common['Authorization'] = token;
        }

    }


    render() {

        return (
            <>
                <Nav status={this.state.isLoggedIn} />

                <Container fluid className="p-0">
                    <Jumbotron id="about-header" />
                    <Row className="justify-content-md-center p-1">
                        <Col md={8}>
                            <h1 className="h1-about"> Our Story: </h1>
                            <h4>Problem: </h4><p className="about-p">Our home city of Philadelphia has an epidemic of litter on the streets.  Faced with this dismal situation, we set out to have an impact that could raise awareness of the problem, engage the community to work towards a solution, and set our trajectory towards a cleaner future.  </p>
                            <h4>Solution: </h4><p className="about-p">This project began as a simple children's book idea that would send a positive message and encourage kids to avoid littering and pick up trash as they encounter it in the city.  With the power of digital storytelling and our abilities as web developers, the team expanded on this notion to produce a variety of books and games that could impact a diverse audience.  In addition, we have included resources for educators to provide feedback as we continue to build, and have built a framework for teachers to eventually track students' progress and learn more about opportunities to engage in cleanup efforts local to their schools.</p>
                            <p className="about-p">Thank you for taking the time to explore Winc-Stories, we hope it leaves you feeling optimistic about the future and more engaged with your community's efforts to prevent the trashing of our environment.</p></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <CardDeck className="p-4">
                            <Card style={{ width: '18rem' }} className="creator">
                                <Card.Img variant="top" className="creator-image" src={troy} alt="Troy Wynn" />
                                <Card.Body>
                                    <Card.Title id="creator-title">Troy Wynn</Card.Title>
                                    <Card.Subtitle className="mb-2" >Back-End Engineer</Card.Subtitle>
                                    <Card.Text></Card.Text>
                                    <a className="btn creator-btn" href="http://troy-wynn.com/" target="_blank" rel="noopener noreferrer">Portfolio</a >
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className="creator">
                                <Card.Img variant="top" src={monet} alt="Monet Thigpen" />
                                <Card.Body>
                                    <Card.Title id="creator-title">Monet Thigpen</Card.Title>
                                    <Card.Subtitle className="mb-2" >Front-End Developer, UI Designer &amp; Author</Card.Subtitle>
                                    <Card.Text>
                                    </Card.Text>
                                    <a className="btn creator-btn" href="http://www.monetthigpen.com" target="_blank" rel="noopener noreferrer">Portfolio</a >
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className="creator">
                                <Card.Img variant="top" className="creator-image" src={alex} alt="Alex Kluger" />
                                <Card.Body>
                                    <Card.Title id="creator-title">Alex Kluger</Card.Title>
                                    <Card.Subtitle className="mb-2" >Project Manager &amp; Author</Card.Subtitle>
                                    <Card.Text>
                                    </Card.Text>
                                    <a className="btn creator-btn" href="http://www.alexkluger.com" target="_blank" rel="noopener noreferrer">Portfolio</a >
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className="creator">
                                <Card.Img variant="top" className="creator-image" src={ron} alt="Ronald Glover" />
                                <Card.Body>
                                    <Card.Title id="creator-title">Ronald Glover</Card.Title>
                                    <Card.Subtitle className="mb-2" >React Developer</Card.Subtitle>
                                    <Card.Text>
                                    </Card.Text>
                                    <a className="btn creator-btn" href="http://www.ronaldglover.dev" target="_blank" rel="noopener noreferrer">Portfolio</a >
                                </Card.Body>
                            </Card>
                        </CardDeck>
                    </Row>
                </Container>
            </>
        );
    }
}

export default About;

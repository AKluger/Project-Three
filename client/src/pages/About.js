import React, { useState } from "react";
import { Button, Col, Container, Row, Jumbotron, CardColumns, Card, CardDeck } from 'react-bootstrap';
import Nav from "../components/Nav";
import './style.css'; 
import {useTransition, animated} from 'react-spring'

function About() {
//     const [items, set] = useState([{}])
// const transitions = useTransition(items, item => item.key, {
// from: { transform: 'translate3d(0,-40px,0)' },
// enter: { transform: 'translate3d(0,0px,0)' },
// leave: { transform: 'translate3d(0,-40px,0)' },
// })

    {
        return (
            <div>
                <Nav />

                <Container fluid className="p-0">
                    <Jumbotron id="about-header" />
                    <Row className="justify-content-md-center">
                        <Col md="auto" md={8}>
                            <h1 className="h1-about"> Our Story: </h1>
                            <h5>Problem: </h5><p>Our home city of Philadelphia has an epidemic of litter on the streets.  Faced with this dismal situation, we set out to have an impact that could raise awareness of the problem, engage the community to work towards a solution, and change our trajectory towards a cleaner future.  </p>
                            <h5>Solution: </h5><p>This project began as a simple children's book idea that would send a positive message and encourage kids to avoid littering and pick up trash as they encounter it in the city.  With the power of digital storytelling and our abilities as web developers, the team expanded on this notion to produce a variety of books and games that could impact a diverse audience.  In addition, we have included resources for educators to track their students' progress and learn more about opportunities to engage in cleanup efforts local to their schools.</p>
                            <p>Thank you for taking the time to explore Winc-Stories, we hope it leaves you feeling optimistic about the future and more engaged with your community's efforts to prevent the trashing of our environment.</p></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <CardDeck className="p-4">
                        {/* {transitions.map(({ item, props, key }) =>
<animated.div key={key} style={props}>{item.text} */}
                            <Card style={{ width: '18rem' }} className="creator">
                                <Card.Img variant="top" src="http://troy-wynn.com/assets/img/profile-picture.jpeg" />
                                <Card.Body>
                                    <Card.Title>Troy Wynn</Card.Title>
                                    <Card.Text></Card.Text>
                                    <Button>Portfolio</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className="creator">
                                <Card.Img variant="top" src="https://monetthigpen.github.io/Bootstrap-Portfolio/images/unnamed.jpg" />
                                <Card.Body>
                                    <Card.Title>Monet Thigpen</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Button>Portfolio</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className="creator">
                                <Card.Img variant="top" src="https://akluger.github.io/Bootstrap-Portfolio/assets/images/proheadshot.jpeg" />
                                <Card.Body>
                                    <Card.Title>Alex Kluger</Card.Title>
                                    <Card.Text>
                                    </Card.Text>
                                    <Button>Portfolio</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }} className="creator">
                                <Card.Img variant="top" src=""/>
                                <Card.Body>
                                    <Card.Title>Ronald Glover</Card.Title>
                                    <Card.Text>Yo Ron where's your portfolio at I need a pic
                                    </Card.Text>
                                    <Button>Portfolio</Button>
                                </Card.Body>
                            </Card>
                        {/* </animated.div>)} */}
                        </CardDeck>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default About;

import React from "react";
import Nav from "../components/Nav";
import {Button, Col, Card, Row, Jumbotron, ListGroup, Container} from 'react-bootstrap';

function Resources() {

    
    return (
        <div id="resource-background">
            <Nav />
            {/* <Container> */}
            <Jumbotron id="hero-ref" />
            
            <h1 className="text-center">First 5 U.N. Sustainable Development Goals</h1>
            <br></br>
            <Container>
            <Row className="text-center" id="rowOne" >
                {/* <Col id="res-float" sm={10}> */}
                
                    <Card border="primary"  className="cardpad" style={{ width: '20rem' }}>
                        <Card.Header>SUSTAINABLE DEVELOPMENT GOAL 1</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                End poverty in all its forms everywhere.

                            </Card.Text>
                            <br></br>
                            <br></br>
                            <Button variant="primary" href="https://sustainabledevelopment.un.org/sdg1">Learn More</Button>
                            
                        </Card.Body>
                    </Card>
              
                <br />
                <Card border="secondary" className="cardpad" style={{ width: '20rem' }}>
                    <Card.Header>SUSTAINABLE DEVELOPMENT GOAL 2</Card.Header>
                    <Card.Body>
                        <Card.Text>End hunger, achieve food security and improved nutrition and promote sustainable agriculture.</Card.Text>
                        <Button variant="secondary" href="https://sustainabledevelopment.un.org/sdg2">Learn More</Button>
                    </Card.Body>
                </Card>
                <br />

                <Card border="success" className="cardpad" style={{ width: '20rem' }}>
                    <Card.Header>SUSTAINABLE DEVELOPMENT GOAL 3</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Ensure healthy lives and promote well-being for all at all ages.
                        </Card.Text>
                        <br></br>
                        <Button variant="success" href="https://sustainabledevelopment.un.org/sdg3">Learn More</Button>
                    </Card.Body>
                </Card>
                <br />
                </Row>
                <Row className="text-center" id="rowTwo">
            
                <Card border="danger" className="cardpad" style={{ width: '20rem' }}>
                    <Card.Header>SUSTAINABLE DEVELOPMENT GOAL 4</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.
                        </Card.Text>
                        <Button variant="danger" href="https://sustainabledevelopment.un.org/sdg4">Learn More</Button>
                    </Card.Body>
                </Card>
                <br />

                <Card border="warning" className="cardpad" style={{ width: '20rem' }}>
                    <Card.Header>SUSTAINABLE DEVELOPMENT GOAL 5</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Achieve gender equality and empower all women and girls.
                            </Card.Text>
                            <Button variant="warning" href="https://sustainabledevelopment.un.org/sdg5">Learn More</Button>
                        </Card.Body>
                </Card>
                <br />
               
                {/* </Col> */}
            </Row>
            </Container> 
            {/* </Container> */}
            
        </div>
    
    );
}
    
    
    export default Resources;
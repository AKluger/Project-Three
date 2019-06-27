import React from "react";
import { Button, Card, Col, Container, Row, Jumbotron, Form, } from 'react-bootstrap';
import "./style.scss";

function ProductCard(props) {
  return (
    <Card  className="suscard" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.imageLink} />
        <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Button variant="primary" href={props.sellersLink}>Buy It</Button>
        </Card.Body>
    </Card>
  );
}

export default ProductCard;

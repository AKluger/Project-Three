import React from 'react';
import './feedback.css';
import { Card, Container, CardColumns } from 'react-bootstrap';

function FeedbackCard(props) {

    return (
        <Container fluid>
            <CardColumns className="text-center m-1">
                {props.comments.map(comment => (
                    <Card className="m-2 col-md-10" key={comment.id}>
                        <Card.Body>
                            <Card.Title>Comment left by: {comment.name} </Card.Title>
                            <Card.Text>{comment.note}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </CardColumns>
        </Container>
    )
}

export default FeedbackCard;
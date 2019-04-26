import React from 'react';
import './feedback.css';
import { Card, Col, CardDeck } from 'react-bootstrap';

// maps comments for both search and saved pages, type of button decided in ternary on comment having mongo id or google id
function FeedbackCard(props) {

    return (
        <>
        <Col md={{ span: 8, offset: 2 }} className="text-center d-flex justify-content-center mb-4">
        {/* <div className="col-md-8 offset-md-2"> */}
            {props.comments.map(comment => (
                <Card style={{ width: '18rem' }} className="m-4 col-md-4" key={comment.id}> 
                    <Card.Body>
                        {/* <div className="d-flex justify-content-between"> */}
                            <Card.Title>Comment left by: {comment.TeacherId} </Card.Title>
                            <Card.Text>{comment.note}</Card.Text>
        
                                {/* <a className="btn btn-beige mr-1 mt-1 shadow-none" href={comment.link} target="_blank" */}
                                    {/* rel="noopener noreferrer">View Book</a> */}
                                {/* <button className={props.buttonClass}
                                    onClick={props.buttonAction}
                                    id={comment.id ? comment.id : comment.googleId}>
                                    {props.buttonText}
                                </button> */}
                         
                        {/* </div> */}

                    </Card.Body>
                </Card>
            ))}
            </Col>
        </>
    )
}

export default FeedbackCard;
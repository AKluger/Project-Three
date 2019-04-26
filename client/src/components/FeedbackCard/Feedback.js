import React from 'react';
import './feedback.css';

// maps comments for both search and saved pages, type of button decided in ternary on comment having mongo id or google id
function BookCard(props) {

    return (
        <div className="col-md-8 offset-md-2">
            {props.comments.map(comment => (
                <div className="card mt-4" key={comment.id}> 
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <h4 className="card-title">{comment.note}</h4>
                            <div>
                                {/* <a className="btn btn-beige mr-1 mt-1 shadow-none" href={comment.link} target="_blank" */}
                                    {/* rel="noopener noreferrer">View Book</a> */}
                                {/* <button className={props.buttonClass}
                                    onClick={props.buttonAction}
                                    id={comment.id ? comment.id : comment.googleId}>
                                    {props.buttonText}
                                </button> */}
                                </div>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookCard;
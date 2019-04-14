import React from 'react'
import { Link } from "react-router-dom";

import './style.css'

const TempLibrary= () => {
    return(
        <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
            <Link to="/prettybooks">
                <img className='bookstyle mx-auto px-auto' src='https://cdn.theatlantic.com/media/old_wire/img/upload/2012/09/13/jamecover4.gif' alt='book cover' />
            </Link>
            </div>
            <div className='col-md-4'>
            <Link to="/prettybooks">
                <img className='bookstyle mx-auto px-auto' src='https://bookcover4u.com/pro/Children-book-cover-design-P1477806791CHB-Under-the-ocean-ocean-kids-book-cover-design-creatspace-kindleunder-the-ocean.jpg' alt='book cover' />
            </Link>
            </div>
            <div className='col-md-4'>
            <Link to="/prettybooks">
                <img className='bookstyle mx-auto px-auto'  src='https://i.kym-cdn.com/photos/images/facebook/000/726/383/1a9.jpg' alt='book cover' />
            </Link>
            </div>
        </div>
        </div>
    )
}

export default TempLibrary
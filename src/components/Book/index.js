import React, { Component } from 'react'
import FlipPage from 'react-flip-page'
import './style.css'

class Book extends Component{
    
    render(){
        return(
            <FlipPage orientation='horizontal' height='700' width='700'>
                <article>
                    <img src='https://memegenerator.net/img/instances/75105663.jpg' className='pages'/>
                </article>
                <article>
                    <img src='https://i.imgur.com/dTrVeqa.jpg' className='pages'/>
                </article>
                <article>
                    <img src='https://66.media.tumblr.com/9359ef3c2d8ba99df7237874cee5cde1/tumblr_o87coaWRhM1vvm5d7o1_1280.jpg' className='pages'/>
                </article>
                <article>
                    <p className='pageText'></p>
                </article>
            </FlipPage>
        )
    }
}

export default Book
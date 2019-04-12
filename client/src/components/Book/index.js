import React, { Component } from 'react'
import FlipPage from 'react-flip-page'
import SplitText from 'react-pose-text'
import './style.css'

class Book extends Component{

    render(){
        const charPoses = {
            exit: { opacity: 0, y: 20 },
            enter: {
              opacity: 1,
              y: 0,
              delay: ({ charIndex }) => charIndex * 170
            }
          };
        return(
            <FlipPage orientation='horizontal' height='700' width='700'>
                <article>
                    <img src='https://memegenerator.net/img/instances/75105663.jpg' alt='meme' className='pages'/>
                </article>
                <article>
                    <img src='https://i.imgur.com/dTrVeqa.jpg' alt='meme' className='pages'/>
                </article>
                <article>
                    <img src='https://66.media.tumblr.com/9359ef3c2d8ba99df7237874cee5cde1/tumblr_o87coaWRhM1vvm5d7o1_1280.jpg' className='pages' alt='meme'/>
                </article>
                <article>
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses} className='pageText'>
                        This is our pokemon text
                    </SplitText>
                </article>
            </FlipPage>
        )
    }
}

export default Book
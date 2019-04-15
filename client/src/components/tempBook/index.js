import React, { Component } from "react";
import FlipPage from "react-flip-page";
import SplitText from "react-pose-text";
// import Buttons from "../PageButtons";
import "../../prettyCity.json"

import "./style.css";

class BookPages extends Component{
    // constructor(props) {
    //     super(props);
    //     this.turn = React.createRef();

    //   }

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
            <FlipPage orientation='horizontal' className="margin" height='600' width='950' ref={(component) => { this.flipPage = component; }}>
                   
                <article>
                    {/* <Buttons /> */}
                    <img src="${props}" alt='city' className='pages'/>
                    
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
export default BookPages

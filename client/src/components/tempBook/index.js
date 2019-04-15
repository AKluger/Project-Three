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
            <div className="page">
                <FlipPage orientation='horizontal' className="margin" height='600' width='950' ref={(component) => { this.flipPage = component; }}>
                    
                    <article>
                        {/* <Buttons /> */}
                        <img src='https://lh3.googleusercontent.com/tlVJY-VbvAau5XryjtNK31yr-AyhdobZyPYc-Vxtvgf6JfOB2s9qz4uUg19zOA2EIsORHgBkZOSPRmkUZnrWzCS-feP_0-lcTBq5W1HBmuPPEr5VeCYFt-bCe6rdzvb8NiYtPKvR166W5hEFwB-6xU5ikKqVk681_ZkYrKDYseq5FLerVGgrnDyOzEeEzqELx4R8gp-rpP-1d787IiathO2b4ZEcRWz4XhqGhfb_6vx2AhjL7eAdM3qH_OfNRHm5-K0KDt8h6DRfZ6ldDGk0yAawxXTxDa6ZZ3pMuVX19-YBqCikF-i1J9TPS1vUvDmq7DF9G4YKxOFRNZIhbChlen6bV-Vp02WULIIaqaQupBKJoMAVAmNb88GWQwfTHgsbIPXqbRmF3dK83joJqa1GrDuD-0ZWPwfaF817u7sAZUMPIPhNIOce4vAfE6gUBgx4W4sjFjef7gpnY6P8ny9nFVNCNcdFyFihVrsF52QXVsu3ftMOfe_z7d9-hLANJcVSHyTgfmo8a9v1skMxTlbJdyRfUYz3sbT6GU6QzRMmzCV2zLn2kWBpRIcOjkB_uV9Gud_DI9G-G6K1bj4JOcIWAlUNA5E-eSGrua124RbwDG9VzG4H4C7MbckCmXzoFjWKm_2hIzqAoA_bV7sgSqzBHbF2vzV1uaxYsJOb5FKNpPyxB55ASkENHVcOEvrM-MKE_HK-pm8ZxkBbw5di54bR=w694-h925-no' alt='city' className='pages'/>
                        
                    </article>
                    <article>
                        <SplitText initialPose="exit" pose="enter" charPoses={charPoses} className='pageText'>
                            This is our pokemon text
                        </SplitText>
                    </article>
                </FlipPage>
            </div>
            
        )
    }
}
export default BookPages

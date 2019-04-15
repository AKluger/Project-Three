import React, { Component } from "react";
import FlipPage from "react-flip-page";
import SplitText from "react-pose-text";
import "./style.css";

class BookPages extends Component{
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
            
            <FlipPage orientation='horizontal' className="margin" height='600' width='950'>
                   
                {/* <article className="pg">
                    <img src="https://lh3.googleusercontent.com/Yn4GYN--9CMcARGlgEvnYq_09Q4-3Bugsi4VIM6aNDSsj-E15o3COB6i8Si__IE_twfD_BQ0awj3Z2M6G3iC4FuR_sA-TocAmgGvDGc0doGUNRWvVPt3d3SdTUroQaxlTYSnNkc6IKEUb-Wfioz27HoSqlp8zjewFxPkrAc7wcUZZDCs__TBjTCBGRJTGs1BRLle3rBZOMaxhSzo0Px_EdTipMDrq1FDKj-JWyIN1PzdFzzTBwRljcnAoKY7OZ_BI9lTDgeTuaqb72mwrppw9uhMx8GC-K5Yoy57RfcgClVLLwuJ7D28EudVEZRJgmMIG9Ld-_kk2lLetCHgY29s2wkaJe7eX8tAPOgSd8uKYzCkDXXoj9FF781OR8Gc0yAF1dqKLveYl0YmBpZmxO7rHs3q2idd2nE2PUOg12gTPUpTEzQCshG5jrESZPaNxlBpetJ6toJJGPN9-8tP9lJknDg6cmMTOMKBDVUCjas0qAv94z5Ya6X0VHvDuDSuC3Uq3ZC2VHSoAsnLUHc8tCPE2K8kfhtO9sHRDu50J4HJIR9ZIBsPso8ZyJkkYpGfT43H2r0OQuKQyF9TFlqO3sREXtNuDn4qAIJxJXat-EXsoyJ_d5TFAawo3tu9p4miN-hYyp5pr0LZiFZ-GKhhZzB1fRhBY6dUN9ZErVyeUHeukxPHfnDT-U1V01BN9Li34dJoHygGltsiKz9Zc2Rds6LY=w1234-h925-no" alt='meme' className='pages'/>
                </article> */}
                    
                <article>
                    <img src='https://lh3.googleusercontent.com/tlVJY-VbvAau5XryjtNK31yr-AyhdobZyPYc-Vxtvgf6JfOB2s9qz4uUg19zOA2EIsORHgBkZOSPRmkUZnrWzCS-feP_0-lcTBq5W1HBmuPPEr5VeCYFt-bCe6rdzvb8NiYtPKvR166W5hEFwB-6xU5ikKqVk681_ZkYrKDYseq5FLerVGgrnDyOzEeEzqELx4R8gp-rpP-1d787IiathO2b4ZEcRWz4XhqGhfb_6vx2AhjL7eAdM3qH_OfNRHm5-K0KDt8h6DRfZ6ldDGk0yAawxXTxDa6ZZ3pMuVX19-YBqCikF-i1J9TPS1vUvDmq7DF9G4YKxOFRNZIhbChlen6bV-Vp02WULIIaqaQupBKJoMAVAmNb88GWQwfTHgsbIPXqbRmF3dK83joJqa1GrDuD-0ZWPwfaF817u7sAZUMPIPhNIOce4vAfE6gUBgx4W4sjFjef7gpnY6P8ny9nFVNCNcdFyFihVrsF52QXVsu3ftMOfe_z7d9-hLANJcVSHyTgfmo8a9v1skMxTlbJdyRfUYz3sbT6GU6QzRMmzCV2zLn2kWBpRIcOjkB_uV9Gud_DI9G-G6K1bj4JOcIWAlUNA5E-eSGrua124RbwDG9VzG4H4C7MbckCmXzoFjWKm_2hIzqAoA_bV7sgSqzBHbF2vzV1uaxYsJOb5FKNpPyxB55ASkENHVcOEvrM-MKE_HK-pm8ZxkBbw5di54bR=w694-h925-no' alt='meme' className='pages'/>
                </article>
                {/* <article>
                    <img src='https://images-na.ssl-images-amazon.com/images/I/51yQeNJ42qL._SX348_BO1,204,203,200_.jpg' className='pages' alt='meme'/>
                </article> */}
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

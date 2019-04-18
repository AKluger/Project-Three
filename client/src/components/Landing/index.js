import React from 'react'
import Nav from '../Nav'
import Jumbotron from '../Jumbotron'
import Library from '../tempLibrary'
import "./style.css"


const Landing = () => {
    return(
        <div className="wrapper" >
        <Nav/>
        <Jumbotron />
        <div className="wrapperImg">    
            <Library />
        </div>
        
        </div>
    )
}

export default Landing
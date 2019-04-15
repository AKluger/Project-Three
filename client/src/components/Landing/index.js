import React from 'react'
import Nav from '../tempNav'
import Jumbo from '../tempJombo'
import Library from '../tempLibrary'
import "./style.css"


const Landing = () => {
    return(
        <div className="wrapper" >
        <Nav />
        <Jumbo />
        <div className="wrapperImg">    
            <Library />
        </div>
        
        </div>
    )
}

export default Landing
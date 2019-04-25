import React from 'react'
import Nav from '../Nav'
import EducatorNav from '../EducatorNav'
import Jumbotron from '../Jumbotron'
import Library from '../tempLibrary'
import "./style.css"


const EduLanding = () => {
    return(
        <div className="wrapper" >
        <EducatorNav/>
        <div className="wrapperImg">    
            <Library />
        </div>
        
        </div>
    )
}

export default EduLanding
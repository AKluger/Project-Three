import React from 'react'
import Nav from '../Nav'
import Library from '../Library'
import "./style.css"

const Landing = () => {
    return(
        <div className="wrapperImg"> 
          <Nav/> 
            <Library />
        </div>
    )
}

export default Landing
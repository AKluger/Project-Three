import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

const tempNav = () => {
  return(
      <nav className="navbar fixed-top navbar-expand-lg ">
        <a className="navbar-brand jump" href="/"> <span className="logotxt">WIN<div className="jump">C</div></span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/"><span className="navtxt"><b>Home   </b><span className="break">|</span></span><span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><span className="navtxt"><b>Parent   </b><span className="break">|</span></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><span className="navtxt"><b>Educator   </b><span className="break">|</span></span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/"><span className="navtxt"> <FontAwesomeIcon icon="user" /> <span className="break">|</span></span></a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default tempNav
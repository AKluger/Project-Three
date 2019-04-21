import React from 'react'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import kid from './kids.jpg'
import kid2 from './kids2.jpg'
import kid3 from './kids3.jpg'
import bin1 from './recycle.png'
import bin2 from './recycle2.png'
import bin3 from './recycle3.png'
import hand1 from './hand.jpg'
import hand2 from './hand2.jpg'
import hand3 from './hand3.jpg'

import './style.css'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

function TempLibrary() {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return(
        <div className='container'>
        <div className='row text-center'>
            <div className='col-md-4'>
            <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <Link to="/game">
                <animated.img className='bookstyle' src='https://i.pinimg.com/originals/2a/a2/cb/2aa2cb4f63198bcf8de30ff658fceb3c.png' alt='book cover' style={{ transform: props.xy.interpolate(trans1) }}/>
                <animated.img src={kid} className='kidstyle' alt='kids' style={{ transform: props.xy.interpolate(trans2) }}/>
            </Link>
            </div>
            </div>
            <div className='col-md-4'>
            <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <Link to="/bobbysWalk">
                <animated.img className='bookstyle' src='https://monetthigpen.github.io/The/Bobbys_walk/IMG_24.jpg' alt='book cover' style={{ transform: props.xy.interpolate(trans1) }}/>
                <animated.img src={kid2} className='kidstyle' alt='kids' style={{ transform: props.xy.interpolate(trans2) }}/>
            </Link>
            </div>
            </div>
            <div className='col-md-4'>
            <div className="container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <Link to="/prettybooks">
                <animated.img className='bookstyle'  src='https://monetthigpen.github.io/The/prettyCover.JPG' alt='book cover' style={{ transform: props.xy.interpolate(trans1) }}/>
                <animated.img src="https://www.wonderschool.com/images/school/badges/infanttoddler-lvl2.svg" className='handstyle' alt='bins' style={{ transform: props.xy.interpolate(trans4) }}/> 
            </Link>
            </div>
            </div>
        </div>
        </div>
    )
}

export default TempLibrary

// We must credit the authors of any free illustrations we use with a link. 
// <a href="https://www.freepik.com/free-photos-vectors/people">People vector created by freepik - www.freepik.com</a>
// <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by freepik - www.freepik.com</a>
// <a href="https://www.freepik.com/free-photos-vectors/food">Food vector created by photoroyalty - www.freepik.com</a>
// <a href="https://www.freepik.com/free-photos-vectors/flower">Flower vector created by makyzz - www.freepik.com</a>
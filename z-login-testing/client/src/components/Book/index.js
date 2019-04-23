import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import Nav from '../../Components/Nav';
import PagesContainer from "../../Components/PagesContainer";
import Pages from './game.json';
import FlipPage from "react-flip-page";
import './style.css'
import Start from '../../Components/Modal';
import bin3 from '../tempLibrary/recycle.png'
import glassBottle from '../../tempImages/glassBottle.png'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

function Book(){
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const [pages] = useState(Pages)
  let [kid, setKid] = useState("")

  const pickCharacter = e => {
    console.log(e) 
    setKid(kid = e)
  }

      const theEndStyle = {
        alignItems: 'flex-end',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        padding: 5,
        width: '100%',
        height: '100%'
      };

      let width = window.innerWidth * .8
      let height = window.innerHeight * 1.1
      let key = 0

      return (
        <div className="pages">
          <Nav/>
          <Start character={pickCharacter}/>
          <PagesContainer >
          <FlipPage orientation='horizontal' className="margin" height={JSON.stringify(height)} width={JSON.stringify(width)}>
          {pages.map(page => (
              <article  key={page.id}>
                <div className='page-image' key={key++} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                  <animated.img src={eval(kid)} alt='kids' className='kids' style={{ transform: props.xy.interpolate(trans1) }}/>
                  {page.trash ? (<img src={bin3} alt='bin' className='bin' key={key++}/>) :(<div></div>)}
                  {page.trash ? (<img src={page.trash} alt='trash' className={page.cssClass} key={key++}/>) :(<div></div>)}
                  <img src={page.imageLink} alt={page.imageTitle} style={theEndStyle} className='main' key={key++}/>
                </div>
                  <div className="text-center page-text">{page.text.map(line=>(<h2 key={key++}>{line}</h2>))}</div>
              </article> 
          ))} 
          </FlipPage>
          </PagesContainer>
        </div>
        
      );
      
}

export default Book

// <a href="https://www.freepik.com/free-photos-vectors/food">Food vector created by macrovector - www.freepik.com</a>

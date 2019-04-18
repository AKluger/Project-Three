import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import Nav from '../../components/Nav';
import PagesContainer from "../../components/PagesContainer";
import Pages from './bobbysWalkStart.json';
import PosPages from './bobbyWalkPos.json';
import FlipPage from "react-flip-page";
import './style.css'
import Start from '../../components/Modal';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

function BobbyWalk(){
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const [pages] = useState([...Pages, ...PosPages])
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

export default BobbyWalk
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import Nav from '../Nav';
import PagesContainer from "../PagesContainer";
import Pages from '../../prettyCity.json';
import FlipPage from "react-flip-page";
import kid from './character1.png'
import './style.css'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

function Book(){
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const [pages] = useState(Pages)

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
        let height = window.innerHeight * 1.7

        return (
          <div>
            <Nav/>
            <PagesContainer >
            <FlipPage orientation='horizontal' className="margin" height={JSON.stringify(height)} width={JSON.stringify(width)}>
            {pages.map(page => (
                <article className="pg">
                  <div className='page' onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                    <animated.img src={kid} alt='kids' className='kids' style={{ transform: props.xy.interpolate(trans1) }}/>
                    <img src={page.imageLink} alt={page.imageTitle} style={theEndStyle} className='main'/>
                  </div>
                    <div className="text-center">{page.text.map(line=>(<h2>{line}</h2>))}</div>
                </article> 
            ))} 
            </FlipPage>
            </PagesContainer>
          </div>
          
        );
      
}

export default Book

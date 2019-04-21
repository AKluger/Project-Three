import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import Nav from '../../components/Nav';
import PagesContainer from "../../components/PagesContainer";
import Pages from './prettyCity.json';
import FlipPage from "react-flip-page";
import './style.css'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

function PrettyCity() {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const [pages] = useState(Pages)
  const [score] = useState(0);


  const bookStyle = {
    position: 'relative',
      alignItems: 'flex-end',
      display: 'flex',
    //   justifyContent: 'center',
      width: '100%',
      height: '100%'
  };

  let width = window.innerWidth * .8
  let height = window.innerHeight * 1
  let key = 0;

  return (
    <div className="pages">
      <Nav />
      <PagesContainer >
        <FlipPage orientation='horizontal' height={JSON.stringify(height) - 102} width={JSON.stringify(width)} style={bookStyle}>
          {pages.map(page => (
            <article key={page.id}>
              <div className='page-image' onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                <img src={page.imageLink} alt={page.imageTitle} className='main imgs' key={key++} />
              </div>
              <div className="text-center pretty-text pt-2">{page.text.map(line => (<h2 className="pretty-text" key={key++}>{line}</h2>))}</div>
            </article>
          ))}
        </FlipPage>
      </PagesContainer>
    </div>

  );

}

export default PrettyCity
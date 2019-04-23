import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import Nav from '../../components/Nav';
import PagesContainer from "../../components/PagesContainer";
import Pages from './bobbysWalkStart.json';
import PosPages from './bobbyWalkPos.json';
import negPages from './bobbyWalkNeg.json';
import FlipPage from "react-flip-page";
import './style.css'
// import Start from '../../components/Modal';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]


function BobbyWalk(){
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const [pages, setPages] = useState([...Pages, ...PosPages])
  console.log(pages);


  const handleButtonClick = event => {
    event.preventDefault();
    console.table(negPages)
    setPages(negPages);
 
    //flipbook.remove
    //document.getElementByClassName("pages")
  };
  

  //  button onclick bad path updates/replaces state with neg otherwise continue...


  let width = window.innerWidth > 900 ? window.innerWidth * .6 : window.innerWidth * .9;
  let height = window.innerHeight < 768 ? window.innerHeight * 1.2 : window.innerHeight * 1;
  let key = 0;

      return (
        <div className="pages">
          <Nav/>
          
          <PagesContainer id="pageContainer">
          <FlipPage orientation='horizontal'  height={JSON.stringify(height)} width={JSON.stringify(width)}>
          {pages.map(page => (
              <article  key={page.id}>
                <div className='page-image' key={key++} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                  <img src={page.imageLink} alt={page.imageTitle}  className='main imgsb' key={key++}/>
                </div>
                <button onClick={handleButtonClick} className={page.cssClass}>Bobby doesn't want to be that special somebody</button>
                  <div className="text-center page-text">{page.text.map(line=>(<h2 className="page-text" key={key++}>{line}</h2>))}</div>
              </article> 
          ))} 
          </FlipPage>
          </PagesContainer>
        </div>
        
      );
      
}

export default BobbyWalk
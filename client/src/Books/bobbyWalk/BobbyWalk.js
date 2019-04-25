import React, { useState, useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import Nav from '../../components/Nav'
import PagesContainer from '../../components/PagesContainer'
import Pages from './bobbysWalkStart.json'
import PosPages from './bobbyWalkPos.json'
import negPages from './bobbyWalkNeg.json'
import FlipPage from "react-flip-page"
import {  Button } from 'react-bootstrap'
import first from './audio/pageOne.mp4'
import second from './audio/pageTwo.mp4'
import third from './audio/pageThree.mp4'
import './style.css'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]

function BobbyWalk(){
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const [pages, setPages] = useState([...Pages, ...PosPages])
  const [count, setCount] = useState(-1)
  const firstPage = useRef(null)
  // const secondPage = useRef(null)
  // const thirdPage = useRef(null)
  console.log(pages)

  const handleButtonClick = event => {
    event.preventDefault()
    console.table(negPages)
    setPages(negPages)
  }

  const startReading = (oldPageIndex, direction) => {
    // setCount(count + 1)
    // firstPage.current.load()
    // firstPage.current.play()
    // Pages[0].src.load()
    pages[0].audio.play()
  }
  
  const bookStyle = {
    position: 'relative',
    alignItems: 'flex-end',
    display: 'flex',
    width: '100%',
    height: '100%'
  }
  // useEffect(setCount(count + 1))
  //  button onclick bad path updates/replaces state with neg otherwise continue...

  let bookAudio = [ first, second, third ]
  let width = window.innerWidth > 900 ? window.innerWidth * .6 : window.innerWidth * .9
  let height = window.innerHeight < 768 ? window.innerHeight * 1.2 : window.innerHeight * 1
  let key = 0
  
      return (
        <div className="pages">
          <Nav/>
          <PagesContainer id="pageContainer">
          <FlipPage orientation='horizontal' flipOnTouch={true} onPageChange={startReading} height={JSON.stringify(height)} width={JSON.stringify(width)} style={bookStyle}>
          {pages.map(page => (
              <article  key={page.id}>
                <div className='page-image' key={key++} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                  <img src={page.imageLink} alt={page.imageTitle}  className='main imgsb' key={key++}/>
                </div>
                <audio>
                <source src={page.src} type="audio/mp4" >
                </source>
                </audio>
                <Button variant="outline-dark" onClick={handleButtonClick} className={page.cssClass}> Click here and turn page for Bobby  to <b>NOT</b> be that "Special Somebody"</Button>
                
                  <div className="text-center bobby-text">{page.text.map(line=>(<h2 className="bobby-text" key={key++}>{line}</h2>))}</div>
                  <Row>
                    <Col sm={4}>
                    <Button  variant="outline-success" className={page.cssClass}> Bobby wants to be that Special Somebody</Button>
                    </Col>
                    <Col sm={2}></Col>
                    <Col sm={4}>
                    <Button  variant="outline-secondary" onClick={handleButtonClick} className={page.cssClass}> Bobby does <b>NOT</b> want be that Special Somebody</Button>
                    </Col>
                  </Row>
              </article>
             
          ))} 
          </FlipPage>
          </PagesContainer>
          <audio ref={firstPage}>
                <source src={bookAudio[count]} type="audio/mp4" >
                </source>
            </audio>
            {/* <audio ref={secondPage}>
                <source src={second} type="audio/mp4" >
                </source>
            </audio>
            <audio ref={thirdPage}>
                <source src={third} type="audio/mp4" >
                </source>
            </audio> */}
        </div>
        
      );
      
}

export default BobbyWalk
import React, { useState } from 'react'
import Nav from '../../components/Nav'
import PagesContainer from '../../components/PagesContainer'
import Pages from './bobbysWalkStart.json'
import PosPages from './bobbyWalkPos.json'
import negPages from './bobbyWalkNeg.json'
import FlipPage from "react-flip-page"
import { Button, Row, Col } from 'react-bootstrap'
import './style.css'

function BobbyWalk() {
  const [pages, setPages] = useState([...Pages, ...PosPages])

  const handleButtonClick = event => {
    event.preventDefault()
    setPages(negPages)
  }

  const bookStyle = {
    position: 'relative',
    alignItems: 'flex-end',
    display: 'flex',
    width: '100%',
    height: '100%'
  }

  //  button onclick bad path updates/replaces state with neg otherwise continue...
  let width = window.innerWidth > 900 ? window.innerWidth * .6 : window.innerWidth * .9
  let height = window.innerHeight < 768 ? window.innerHeight * 1.2 : window.innerHeight * 1
  let key = 0

  return (
    <div className="pages">
      <Nav />
      <PagesContainer id="pageContainer">
        <FlipPage orientation='horizontal' flipOnTouch={true} height={JSON.stringify(height)} width={JSON.stringify(width)} style={bookStyle}>
          {pages.map(page => (
            <article key={page.id}>
              <div className='page-image' key={key++}>
              <div style={{backgroundImage: `url(${page.imageLink})`}} alt={page.imageTitle} className='main imgsb' key={key++}>
                {/* <img src={page.imageLink} alt={page.imageTitle} className='main imgsb' key={key++} /> */}
                <span className='bwLeftArrows'><i className="bwLeft"></i></span>
                <span className='bwRightArrows'><i className="bwRight"></i></span>
                </div>
              </div>

              <div className="text-center bobby-text-div">{page.text.map(line => (<h2 className="bobby-text" key={key++}>{line}</h2>))}</div>
              <Row className="text-center">
                <Col sm={4}>
                  <Button variant="outline-success" className={page.cssClass} id="btn-margin"> Bobby wants to be that Special Somebody</Button>
                </Col>
                <Col sm={4}></Col>
                <Col sm={4}>
                  <Button variant="outline-secondary" onClick={handleButtonClick} className={page.cssClass} id="btn-margin"> Bobby does <b>NOT</b> want be that Special Somebody</Button>
                </Col>
              </Row>
            </article>
          ))}
        </FlipPage>
      </PagesContainer>
    </div>

  );

}

export default BobbyWalk

import React from 'react'
import Nav from '../../components/Nav'
import PagesContainer from "../../components/PagesContainer"
import Draggable from 'react-draggable'
import Pages from '../game/gameCity.json'
import recycleBin from '../../components/Library/recycle2.png'
import { Card, Button, Row, Col } from 'react-bootstrap'
import Instructions from './startModal'
import Winning from './winModal'
import './style.css'


class trashFall extends React.Component {
  constructor(props) {
    super(props)
    this.congrats = React.createRef()
    this.startGame = React.createRef()
    this.trash1 = React.createRef()
    this.trash2 = React.createRef()
    this.trash3 = React.createRef()
    this.trash4 = React.createRef()
    this.trash5 = React.createRef()
    this.Bin = React.createRef()
    this.backimg = React.createRef()
    this.state = {
      myBin: recycleBin,
      pages: Pages,
      makes: 0,
      misses: 0
    }
  }

  componentDidMount() {
    if ((window.innerWidth < 1025) && (window.innerHeight < 769)) {
      // style the bin here
      this.Bin.current.style.top = '460px'
      // style the background img here
      this.backimg.current.style.height = '580px'

    }
  }

  start = e => {

    // array of recyclable imgs 
    const fallingSky = [this.trash1.current, this.trash2.current,
    this.trash3.current, this.trash4.current, this.trash5.current]

    // random is a random img
    const random = fallingSky[Math.floor(Math.random() * fallingSky.length)];

    // makes img visible and makes it fall
    random.style.visibility = "visible"
    random.style.transition = "ease 1.5s"
    random.style.transform = "translate(0px, 490px)"

    // makes img go back to the top of the screen
    setTimeout(() => {
      random.style.transform = "translate(0px, 0px)"
    }, 1600)

    // makes img invisible after they have fallen and get the x value of both trash and bin
    setTimeout(() => {
      random.style.visibility = "hidden"
      let rand = Math.ceil(random.getBoundingClientRect().x / 100) * 100
      let bin = Math.ceil(this.Bin.current.getBoundingClientRect().x / 100) * 100
      let size = 100
      if (window.innerWidth === 1440) size = 0;
      if (rand === (bin + size)) this.setState({ makes: this.state.makes + 1 })
      else this.setState({ misses: this.state.misses + 1 })
    }, 800)

  }

  won = e => {
    this.congrats.current.handleShow()

  }

  render() {

    if (this.state.makes === 10) {
      this.congrats.current.handleShow()
      this.setState({ makes: 0 })
      this.setState({ misses: 0 })
      clearInterval(this.loop)
    }

    return (
      <div className="pages">
        <Nav />
        <Instructions />
        <Winning ref={this.congrats} />
        <PagesContainer >
          <article>
            <Row className='page-image' >
              <Col>
                <img src={Pages[0].imageLink} alt={Pages[0].imageTitle} id="backgroundStyle" ref={this.backimg} />
                <Draggable axis="x" >
                  <img src={recycleBin} alt='bin' ref={this.Bin} className='gameBin2' />
                </Draggable>
                <img src={Pages[0].trash} ref={this.trash1} alt='trash' className='gameTrash2' />
                <img src={Pages[0].trash} ref={this.trash2} alt='trash' className='gameTrash3' />
                <img src={Pages[0].trash} ref={this.trash3} alt='trash' className='gameTrash4' />
                <img src={Pages[0].trash} ref={this.trash4} alt='trash' className='gameTrash5' />
                <img src={Pages[0].trash} ref={this.trash5} alt='trash' className='gameTrash6' />
              </Col>
              <Col id="scorestyle">
                <Row>
                  <Card className='scoreboard'>
                    <Card.Body className="scorecard"><b>Score:</b> {this.state.makes}</Card.Body>
                  </Card>
                </Row>
                <Row className="gamecol">
                  <Card className='scoreboard'>
                    <Card.Body className="scorecard"><b>Missed:</b> {this.state.misses}</Card.Body>
                  </Card>
                </Row>
                <Row className="gamecol">
                  <Button className='scoreboard' id="startbutton" variant="primary" size="lg" onClick={() => this.loop = setInterval(this.start, 3000)} ref={this.startGame}>
                    Start
                      </Button>
                </Row>
              </Col>


            </Row>
          </article>
        </PagesContainer>
      </div>

    );
  }
}

export default trashFall

// <a href="https://www.freepik.com/free-photos-vectors/food">Food vector created by macrovector - www.freepik.com</a>

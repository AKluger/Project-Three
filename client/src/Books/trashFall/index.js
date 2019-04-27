import React from 'react'
import Nav from '../../components/Nav'
import PagesContainer from "../../components/PagesContainer"
import Draggable from 'react-draggable'
import Pages from '../game/gameCity.json'
import recycleBin from '../../components/tempLibrary/recycle2.png'
import { Card, Button } from 'react-bootstrap';
import './style.css'

class trashFall extends React.Component{
  constructor(props) {
    super(props)
    this.trash1 = React.createRef()
    this.trash2 = React.createRef()
    this.trash3 = React.createRef()
    this.trash4 = React.createRef()
    this.trash5 = React.createRef()
    this.Bin = React.createRef()
    this.state = {
      myBin: recycleBin,
      pages: Pages,
      makes: 0,
      misses: 0
    }
  }

  start = e => {  
    // array of recyclable imgs 
      const fallingSky = [ this.trash1.current, this.trash2.current, 
        this.trash3.current, this.trash4.current, this.trash5.current ]

    // random is a random img
      const random = fallingSky[Math.floor(Math.random()*fallingSky.length)];

    // makes img visible and makes it falls
      random.style.visibility = "visible"
      random.style.transition = "ease 1.5s"
      random.style.transform = "translate(0px, 490px)"

    // makes img go back to the top of the screen
      setTimeout(() => {
        random.style.transform = "translate(0px, 0px)"
      }, 1400)

    // makes img invisible after they have fallen and get the x vaule both trash and bin
      setTimeout(() => {
        random.style.visibility = "hidden" 
        let rand = Math.ceil(random.getBoundingClientRect().x/100)*100
        let bin = Math.ceil(this.Bin.current.getBoundingClientRect().x/100)*100
        console.log(rand)
        console.log(bin)
        console.log(random.getBoundingClientRect())
        if(rand === bin) this.setState({makes: this.state.makes + 1})
        else this.setState({misses: this.state.misses + 1}) 
      }, 700)

  }
  check = () => {
    // let rand = Math.ceil(random.getBoundingClientRect().x/100)*100
    let bin = Math.ceil(this.Bin.current.getBoundingClientRect().x/100)*100
    // console.log(rand)
    console.log(bin)
  }

    render(){
      const backgroundStyle = {
        alignItems: 'flex-end',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        height: '680px',
        marginTop: '20px'
      };
      let trash = ""

      return (
        <div className="pages">
          <Nav/>
          <PagesContainer >
              <article>
                <div className='page-image' >
                  <img src={Pages[0].imageLink} alt={Pages[0].imageTitle} style={backgroundStyle} />
                  <Card className='scoreboard'>
                    <Card.Body>Your score: {this.state.makes}</Card.Body>
                  </Card>
                  <Card className='scoreboard'>
                    <Card.Body>Your misses: {this.state.misses}</Card.Body>
                  </Card>
                  <Button className='scoreboard' variant="primary" size="lg" onClick={()=> setInterval(this.start, 3000)}>
                    Start
                  </Button>
                  <Draggable axis="x" >
                      <img src={recycleBin} alt='bin' ref={this.Bin} className='gameBin2' />
                  </Draggable>
                  <img src={Pages[0].trash} ref={this.trash1} alt='trash' className='gameTrash2' />
                  <img src={Pages[0].trash} ref={this.trash2} alt='trash' className='gameTrash3' />
                  <img src={Pages[0].trash} ref={this.trash3} alt='trash' className='gameTrash4' />
                  <img src={Pages[0].trash} ref={this.trash4} alt='trash' className='gameTrash5' />
                  <img src={Pages[0].trash} ref={this.trash5} alt='trash' className='gameTrash6' />   
                </div>
              </article> 
            {/* onClick={this.pickBin2} */}
          </PagesContainer>
        </div>
        
      );
    }
}
//  onClick={this.start}
export default trashFall

// <a href="https://www.freepik.com/free-photos-vectors/food">Food vector created by macrovector - www.freepik.com</a>

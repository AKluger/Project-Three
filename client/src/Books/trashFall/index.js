import React from 'react';
import { animated } from 'react-spring'
import Nav from '../../components/Nav';
import PagesContainer from "../../components/PagesContainer";
import Draggable from 'react-draggable';
import Pages from '../game/gameCity.json';
import recycleBin from '../../components/tempLibrary/recycle2.png'
import trashBin from '../../components/tempLibrary/trashCan.png'
import './style.css'

class trashFall extends React.Component{
  // const [pages] = useState(Pages)
  // const[score, setScore] = useState(0)
  // const [myBin, setBin] = useState(recycleBin)
  // let [kid, setKid] = useState("")
  // 
  constructor(props) {
    super(props);
    this.state = {
    myBin: recycleBin,
    pages: Pages,
    score: 0
    }
  }

  pickBin2 = e => {
    console.log("clicked") 
    this.setState({myBin: trashBin})
    if(this.state.myBin === trashBin){
      this.setState({myBin: recycleBin})
    } 
    this.state.pages[this.state.score].recycle = !this.state.pages[this.state.score].recycle
    console.log(this.state.pages[this.state.score].recycle)
  }
  cleanUp2 = e => {
    if(this.state.score < 7 && this.state.pages[this.state.score].recycle === true){
    // trash = e.target.style
    console.log(this.state.score)
    // trash.visibility = "hidden"
    // document.querySelector(".gameBin").classList.add("shake")
    }
  }
  turnPage2 = e => { 


  }
  turnScore2 = e => { 
    // setScore(score + 1) 
    // setBin(recycleBin)
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
                  <img src={Pages[this.state.score].imageLink} alt={Pages[this.state.score].imageTitle} style={backgroundStyle} />
                  <Draggable>
                    <img src={this.state.myBin} alt='bin' className='gameBin2'  />
                  </Draggable>
                  <img src={Pages[this.state.score].trash} alt='trash' className='gameTrash2' />
                </div>
              </article> 
            {/* onClick={this.pickBin2} */}
          </PagesContainer>
        </div>
        
      );
    }
}

export default trashFall

// <a href="https://www.freepik.com/free-photos-vectors/food">Food vector created by macrovector - www.freepik.com</a>

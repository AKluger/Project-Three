import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import Nav from '../../components/Nav';
import PagesContainer from "../../components/PagesContainer";
import Pages from './gameCity.json';
import Start from '../../components/Modal';
import recycleBin from '../../components/tempLibrary/recycle2.png'
import trashBin from '../../components/tempLibrary/trashCan.png'
import bubble from '../../components/tempLibrary/speech_bubble.png'
import './style.css'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

function Book(){
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const [pages] = useState(Pages)
  const[score, setScore] = useState(0)
  const [myBin, setBin] = useState(recycleBin)
  let [kid, setKid] = useState("")
  let trash = ""

  const pickCharacter = e => {
    console.log(e) 
    setKid(kid = e)
  }
  const pickBin = e => {
    console.log("clicked") 
    setBin(trashBin)
    if(myBin === trashBin){setBin(recycleBin)} 
    pages[score].recycle = !pages[score].recycle
    console.log(pages[score].recycle)
  }
  const cleanUp = e => {
    if(score < 7 && pages[score].recycle === true){
    trash = e.target.style
    console.log(score)
    trash.visibility = "hidden"
    // get code to shake can   
    setTimeout(turnPage, 3000 )
    setTimeout(turnScore, 2000 )
    document.querySelector(".goodJob").style.visibility = "visible"
    document.querySelector(".bubble").style.visibility = "visible"
    document.querySelector(".gameBin").style.visibility = "hidden"
    }
  }
  const turnPage = e => { 
    trash.visibility = "visible"    
    document.querySelector(".gameBin").style.visibility = "visible"
    document.querySelector(".goodJob").style.visibility = "hidden"
    document.querySelector(".bubble").style.visibility = "hidden"
  }
  const turnScore = e => { 
    setScore(score + 1) 
    setBin(recycleBin)
  }
      const theEndStyle = {
        alignItems: 'flex-end',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        padding: 0,
        height: '900px',
        marginTop: '20px'
      };
      let key = 0
      return (
        <div className="pages">
          <Nav/>
          <Start character={pickCharacter}/>
          <PagesContainer >
          
              <article>
                <div className='page-image' onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                  <animated.img src={eval(kid)} alt='kids' className='gameKids' style={{ transform: props.xy.interpolate(trans1) }}/>
                  <img src={pages[score].imageLink} alt={pages[score].imageTitle} style={theEndStyle}/>
                  <img src={myBin} alt='bin' className='gameBin' onClick={pickBin}/>
                  <img src={pages[score].trash} alt='trash' className='gameTrash' onClick={cleanUp}/>
                  <animated.img src={bubble} alt='textBubble' className='bubble' style={{ transform: props.xy.interpolate(trans1)}}/>
                  <animated.p className="text-center goodJob" style={{ transform: props.xy.interpolate(trans1)}}>GOOD JOB!!!!!</animated.p>
                </div>
                  <div className="text-center gameText">{Pages[score].text.map(line=>(<p key={key++}>{line}</p>))}</div>
              </article> 
            
          </PagesContainer>
        </div>
        
      );
      
}

export default Book

// <a href="https://www.freepik.com/free-photos-vectors/food">Food vector created by macrovector - www.freepik.com</a>

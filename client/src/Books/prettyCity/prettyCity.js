import React, { useState, useRef } from 'react';
// import { useSpring} from 'react-spring'
import Nav from '../../components/Nav';
import PagesContainer from "../../components/PagesContainer";
import { Image } from "react-bootstrap";
import AudioModal from '../../components/AudioModal';
import Pages from './prettyCity.json';
import FlipPage from "react-flip-page";
import './prettyCity.css'

// const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
// const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`

function PrettyCity() {
  // const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const [pages] = useState(Pages);
  // let [pageNumber, setPageNumber] = useState(0);
  let [narration, setAudio] = useState(false);
  const firstPage = useRef(null);

  const pageColor = 'linear-gradient(344deg, rgba(255,255,255,1) 0%, rgba(241,241,255,1) 56%, rgba(242,242,239,1) 100%)';

  const bookStyle = {
    position: 'relative',
    alignItems: 'flex-end',
    display: 'flex',
    height: '100%',
    width: '100%',
    marginBottom: '93px',
  };

  const toggleAudio = e => {
    console.log(e)
    setAudio(e)
  }


  const startReading = () => {

    if (narration) {
      firstPage.current.load()
      firstPage.current.play()

    }
    if (firstPage.current.id == 17) { narration = false }
  }

  let width = window.innerWidth > 900 ? window.innerWidth * .6 : window.innerWidth * .9;
  let height = window.innerHeight < 768 ? window.innerHeight * 1.2 : window.innerHeight * 1.2;
  let key = 0;

  return (
    <div className="pages">
      <Nav />
      <AudioModal audio={toggleAudio} />
      <PagesContainer >
        <FlipPage orientation='horizontal' flipOnTouch={true} onPageChange={startReading} height={JSON.stringify(height)} width={JSON.stringify(width)} pageBackground={pageColor} style={bookStyle}>
          {pages.map(page => (
            <article key={page.id}>
              <div className='page-image'>
                <Image src={page.imageLink} alt={page.imageTitle} className='main imgs' key={key++} />
                <span className='pcLeftArrows'></span><i className="arrow pcLeft"></i>
                <span className='pcRightArrows'></span><i className="arrow pcRight"></i>
              </div>
              <div className="text-center pretty-text pt-2">
                {page.text.map(line => (<h2 className=" pretty-line" key={key++}>{line}</h2>))}
              </div>
              <audio ref={firstPage} id={page.id}>
                <source src={page.audioLink} type="audio/mp4" >
                </source>
              </audio>
            </article>
          ))}
        </FlipPage>
      </PagesContainer>
    </div>

  );

}

export default PrettyCity


// onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}

// function PrettyCity() {
//   const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
//   const [pages] = useState(Pages);

//   const pageColor = 'linear-gradient(344deg, rgba(255,255,255,1) 0%, rgba(241,241,255,1) 56%, rgba(242,242,239,1) 100%)';
//   const bookStyle = {
//     position: 'relative',
//     // alignItems: 'flex-end',
//     // display: 'flex',
//     height: '100%',
//     width: '100%',
//     marginBottom: '93px',
//     // overflow: 'hidden'

//     // minWidth: '90vw',
//     // minHeight: '100vh'

//   };

//   let width = window.innerWidth > 900 ? window.innerWidth * .6 : window.innerWidth * .9;
//   let height = window.innerHeight < 768 ? window.innerHeight * 1.2 : window.innerHeight * 1.11;
//   let key = 0;

//   return (
//     <div className="pages">
//       <Nav />
//       <PagesContainer >
//     <Container fluid className = "page-container">
//         <FlipPage orientation='horizontal' uncutPages={true}  style={bookStyle} pageBackground={pageColor} perspective={'80em'} responsive={true} className="text-center">
//           {pages.map(page => (
//             <article key={page.id}>
//               <div className='page-image' onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
//                 <Image src={page.imageLink} alt={page.imageTitle} className='imgs' key={key++} />
//               </div>
//               {/* <div className="text-center pretty-text pt-2"> */}
//               {page.text.map(line => (<h2 className=" pretty-line" key={key++}>{line}</h2>))}
//               {/* </div> */}
//             </article>
//           ))}
//         </FlipPage>
//         </Container>
//       </PagesContainer>
//     </div>

//   );

// }
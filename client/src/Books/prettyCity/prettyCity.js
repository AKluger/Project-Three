/* eslint eqeqeq: "off" */
import React, { useState, useRef } from 'react';
import Nav from '../../components/Nav';
import PagesContainer from "../../components/PagesContainer";
import { Image } from "react-bootstrap";
import AudioModal from '../../components/AudioModal';
import Pages from './prettyCity.json';
import FlipPage from "react-flip-page";
import './prettyCity.css'

function PrettyCity() {
  const [pages] = useState(Pages);
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
//     <div className="pages">
//       <Nav />
//       <AudioModal audio={toggleAudio} />
//       <PagesContainer >
//         <FlipPage orientation='horizontal' flipOnTouch={true} onPageChange={startReading} height={JSON.stringify(height)} width={JSON.stringify(width)} pageBackground={pageColor} style={bookStyle}>
//           {pages.map(page => (
//             <article key={page.id}>
//               <div className='page-image'>
//                 <Image src={page.imageLink} alt={page.imageTitle} className='main imgs' key={key++} />
//                 <span className='pcLeftArrows'></span><i className="arrow pcLeft"></i>
//                 <span className='pcRightArrows'></span><i className="arrow pcRight"></i>
//               </div>
//               <div className="text-center pretty-text pt-2">
//                 {page.text.map(line => (<h2 className=" pretty-line" key={key++}>{line}</h2>))}
//               </div>
//               <audio ref={firstPage} id={page.id}>
//                 <source src={page.audioLink} type="audio/mp4" >
//                 </source>
//               </audio>
//             </article>
//           ))}
//         </FlipPage>
//       </PagesContainer>
//     </div>

//   );

// }

// export default PrettyCity


<div className="pages">
<Nav />
<AudioModal audio={toggleAudio} />
<PagesContainer >
  <FlipPage orientation='horizontal' flipOnTouch={true} onPageChange={startReading} height={JSON.stringify(height)} width={JSON.stringify(width)} pageBackground={pageColor} style={bookStyle}>
    {pages.map(page => (
      <article key={page.id}>
        <div className='page-image'>
          <div style={{backgroundImage: `url(${page.imageLink})`}} alt={page.imageTitle} className='main imgs' key={key++}>
          <span className='pcLeftArrows'><i className="arrow pcLeft"></i></span>
          <span className='pcRightArrows'><i className="arrow pcRight"></i></span>
          </div>
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
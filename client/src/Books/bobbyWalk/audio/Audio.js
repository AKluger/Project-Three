import React from 'react';
import first from './pageOne.mp4'
import second from './pageTwo.mp4'
import third from './pageThree.mp4'

class narration extends React.Component {

    render() {
        return (
          <div className="voice">
            <audio ref={(one) => { this.one = one; }} id='one'>
                <source src={first} type="audio/mp4" >
                </source>
            </audio>
            <audio ref={(two) => { this.two = two; }}>
                <source src={second} type="audio/mp4" >
                </source>
            </audio>
            <audio ref={(three) => { this.three = three; }}>
                <source src={third} type="audio/mp4" >
                </source>
            </audio>
          </div>
        )
    }
}


export default narration
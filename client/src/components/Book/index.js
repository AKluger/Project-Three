import React, { Component } from 'react';
import Nav from '../tempNav';
import PagesContainer from "../PagesContainer";
import Pages from '../../prettyCity.json';
import FlipPage from "react-flip-page";

class Book extends Component{

  
state = {
  pages: Pages
};

    render() {

      const theEndStyle = {
        alignItems: 'flex-end',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        padding: 5,
        width: '100%',
        height: '100%'
      };

      const charPoses = {
        exit: { opacity: 0, y: 20 },
        enter: {
            opacity: 1,
            y: 0,
            delay: ({ charIndex }) => charIndex * 170
        }
    };

        return (
          <div>
            <Nav/>
            <PagesContainer>
            <FlipPage orientation='horizontal' className="margin" height='1300' width='1750'  >
            {this.state.pages.map(page => (
                <article className="pg">
                    <img src={page.imageLink} alt={page.imageTitle} style={theEndStyle} />
                    <div className="text-center">{page.text.map(line=>(<h2>{line}</h2>))}</div>
                </article>
            ))} 
              </FlipPage>
            </PagesContainer>
          </div>
          
        );
      }
}

export default Book

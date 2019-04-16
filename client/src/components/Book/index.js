import React, { Component } from 'react';
import BookPages from '../tempBook';
import Nav from '../tempNav';
import PagesContainer from "../PagesContainer";
// import Buttons from "../PageButtons";

class Book extends Component{

    render() {
        return (
          <div>
            <Nav/>
            <PagesContainer >
              <BookPages />
              {/* <Buttons />   */}
            </PagesContainer>
          </div>
        );
      }
}

export default Book
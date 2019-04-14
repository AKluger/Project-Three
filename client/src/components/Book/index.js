import React, { Component } from 'react';
import BookPages from '../tempBook';
import Nav from '../tempNav';
import PagesContainer from "../PagesContainer";

class Book extends Component{

    render() {
        return (
          <div>
            <Nav/>
            <PagesContainer>
              <BookPages />
            </PagesContainer>
          </div>
          
        );
      }
}

export default Book
import React from 'react'
import {Modal, Button} from 'react-bootstrap'

class Start extends React.Component {
    constructor(props, context) {
      super(props, context);

      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: true,
        kid: ""
      };
    }
  
    handleClose() {
      this.setState({ show: false })
    }

    // componentDidUpdate() {
    //     console.log(this.state.kid);
    // }

    render() {
        const Effects = {
            height: 175
        }
      return (
        <>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Pick Your Character</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src='https://monetthigpen.github.io/The/PrettyCityImgs/character1.png' alt='kid' style={Effects} 
                onClick={()=>  this.props.character("pages[0].character1") }/>
                <img src='https://monetthigpen.github.io/The/PrettyCityImgs/character2.png' alt='kid' style={Effects} 
                onClick={()=> this.props.character("pages[0].character2") }/>
                <img src='https://monetthigpen.github.io/The/PrettyCityImgs/character3.png' alt='kid' style={Effects} 
                onClick={()=> this.props.character("pages[0].character3") }/>
                <img src='https://monetthigpen.github.io/The/PrettyCityImgs/character4.png' alt='kid' style={Effects} 
                onClick={()=> this.props.character("pages[0].character4") }/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }
  
export default Start
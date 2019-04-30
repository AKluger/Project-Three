import React from 'react'
import { Modal, Button } from 'react-bootstrap';


class Instructions extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: true,
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
    }
  
    render() {
      return (
        <>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Game instructions</Modal.Title>
            </Modal.Header>
            <Modal.Body>Recyclable items are all around us and around our communities.  In this game they are literally 
                falling from the sky.  Catch 10 cans in your recycling bin to clean up the community.  Press the start button
                on the right to start the game.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose}>
                Play
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
}
  
export default Instructions
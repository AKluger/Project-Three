import React from 'react'
import { Modal, Button } from 'react-bootstrap';


class Winning extends React.Component {
    constructor(props, context) {
      super(props, context);
      this.congrats = React.createRef()
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
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
          <Modal show={this.state.show} onHide={this.handleClose} ref={this.congrats}>
            <Modal.Header closeButton>
              <Modal.Title>You Won!!!!!!!!!!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Thanks to you our community is cleaned up and we can breath fresh air and enjoy a pretty city.
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={this.handleClose}>
                Congratulations
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
}
  
export default Winning
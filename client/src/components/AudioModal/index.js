import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class AudioModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: true
    };
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleNo() {
    this.props.audio(false)
  }

  handleYes() {
     this.props.audio(true)
  }



  render() {

    const modalBtn = {
      backgroundColor: 'white',
      backgroundImage: 'linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)',
      color: 'black',
      margin: "3%",
      fontFamily: '"Cabin", sansSerif',
      borderRadius: "10px 10px 10px 10px",
      padding: "15px"
  
    }

    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered>
          <Modal.Header >
          <h3 className='col-md-12 modal-title text-center'>Would you like audio narration?</h3>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Button style = {modalBtn}
              onClick={() => {this.handleNo(); this.handleClose()}}>No Thanks</Button>
            <Button style = {modalBtn}
              onClick={() => {this.handleYes(); this.handleClose()}}>Yes Please</Button>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default AudioModal
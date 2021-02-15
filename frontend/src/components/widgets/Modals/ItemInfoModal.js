import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Image, Button } from "react-bootstrap";
import burger from "../../../images/burger.jpg";
// import { openModal, closeModal } from "../../../actions/addAction";

class ModalButton extends Component {
  render() {
    // const { modalOpen, open } = this.props.testReducer;
    // const { id, img, name, price, info } = this.props.testReducer.modalProduct;
    let modalOpen = false;
    const modal = () => {
      if (!modalOpen) {
        return null;
      } else {
        return (
          <Modal show={false} size="sm" centered>
            <Modal.Header>
              <Modal.Title>
                <h6>Name Info</h6>
              </Modal.Title>
              <div
                style={{ cursor: "pointer" }}
                // onClick={() => this.props.closeModal(id)}
              >
                <i className="fas fa-times-circle"></i>
              </div>
            </Modal.Header>
            <Modal.Body>
              <Image src={burger} fluid className="mx-auto align-center" />
              <h5 className="text-center">Name</h5>
              <h5 className="text-muted text-center">Price: {`12`}$</h5>
              <div className="d-flex flex-column justify-content-center align-center">
                <div
                  // onClick={() => this.props.closeModal(id)}
                  className="text-center align-center"
                ></div>
                <div style={{ textAlign: "center" }}>
                  <p>{`Product description`}</p>
                </div>
                <div
                  // onClick={() => this.props.closeModal(id)}
                  className="text-center align-center"
                >
                  <Button variant="dark" as={Link} to="/MainMenu-Order-Online">
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        );
      }
    };
    return modal();
  }
}

export default ModalButton;

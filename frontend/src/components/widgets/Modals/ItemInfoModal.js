import React from "react";
import { Link } from "react-router-dom";
import { Modal, Image, Button } from "react-bootstrap";
import { generatePublicUrl } from "../../../urlConfig";


const ModalButton = (props) => {
  const info = props?.modalInfo;
  const handleClose = () => props.show = false;
  const modal = () => {
    if (!props.show) {
      return null;
    } else {
      return (
        <Modal show={props.show} onHide={handleClose} size="sm" centered>
          <Modal.Header>
            <Modal.Title>
              <h6>{info.name} Info</h6>
            </Modal.Title>
            <div style={{ cursor: "pointer" }} onClick={handleClose}>
              <i className="fas fa-times-circle"></i>
            </div>
          </Modal.Header>
          <Modal.Body>
            <Image
              src={generatePublicUrl(info.img)}
              fluid
              className="mx-auto align-center"
            />
            <h5 className="text-center">{info.name}</h5>
            <h5 className="text-muted text-center">Price: {info.price} $</h5>
            <div className="d-flex flex-column justify-content-center align-center">
              <div
                // onClick={() => this.props.closeModal(id)}
                className="text-center align-center"
              ></div>
              <div style={{ textAlign: "center" }}>
                <p>{info.description}</p>
              </div>
              <div
                // onClick={() => this.props.closeModal(id)}
                className="text-center align-center"
              >
                <Button variant="dark" as={Link} to="/shop">
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
};

export default ModalButton;

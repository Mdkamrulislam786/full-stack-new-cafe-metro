import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import YouTube from "../Youtube/youtube";

const Modals = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button size="lg" variant="success" onClick={handleShow}>
        {props.cta}
      </Button>

      <Modal size="lg" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Watch the video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <YouTube video={props.video} />,
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modals;

import React, { useState, useRef } from "react";
import { Overlay, Tooltip } from "react-bootstrap";
import "./sideiconbar.css";

const SideIconBar = () => {
  const [show, setShow] = useState(false);
  const target = useRef(null);
  return (
    <>
      <div className="icon-bar">
        <a disabled href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"  className="facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#Contact" disabled className="phone" ref={target} onClick={() => setShow(!show)}>
          <i className="fas fa-phone-alt"></i>
        </a>
        <Overlay target={target.current} show={show} placement="right">
          {(props) => (
            <Tooltip id="overlay-example" {...props}>
              Cafe-Metro: +8801826291501 <br /> +8801826291501
            </Tooltip>
          )}
        </Overlay>

        <a disabled href="https://www.youtube.com/"  target="_blank"  rel="noopener noreferrer"className="youtube">
          <i className="fa fa-youtube"></i> 
        </a>
        <a disabled href="https://www.linkedin.com/"  target="_blank" rel="noopener noreferrer" className="linkedin">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>
    </>
  );
};

export default SideIconBar;

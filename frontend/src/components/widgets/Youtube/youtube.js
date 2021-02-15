import React from "react";
import './youtube.css'

const YouTube = (props) => {
  const videoSrc =
    `https://www.youtube.com/embed/${props.video}`
  return (
    <div className="modal-container">
      <iframe
        className="player"
        type="text/html"
        width="100%"
        height="100%"
        src={videoSrc}
        frameBorder="0"
        title="None"
      />
    </div>
  );
};

export default YouTube;

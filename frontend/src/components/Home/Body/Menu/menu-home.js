import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./MenuMain/menuhome.css";
import Modals from "../../../widgets/Modals/modal";

const MenuHome = (props) => {
  let showButton = (props) => {
    if (props.to) {
      return (
        <Button variant="success" as={Link} to={props.to}>
          Show Me
        </Button>
      );
    } else {
      return <Modals cta={props.cta} video={props.video} />;
    }
  };
  return (
    <>
      <div id="menuhome">
        <div className={props.className}>
          <h3>{props.h3}</h3>
          <p>{props.p}</p>
          {showButton(props)}
        </div>
      </div>
    </>
  );
};

export default MenuHome;

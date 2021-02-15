import React from "react";
import "./button.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Buttons = (props) => {
  let template = null;

  switch (props.type) {
    case "greenButton":
      template = (
        <>
        
          <Button as={Link} to={props.linkTo} onClick={props.onClick} className="btns1 btn1">
           {props.cta}
          </Button>
        
        </>
      );
      break;
    case "redButton":
      template = (
        <>
         
            <Button as={Link} to={props.linkTo} className="btns btn2">
             {props.cta}
            </Button>
          
        </>
      );
      break;
    default:
      template = null;
  }
  return template;
};

export default Buttons;

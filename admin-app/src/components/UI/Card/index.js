import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div className="card" {...props}>
      {(props.headerleft === "true" || props.headerRight) && (
        <div
          className={
            props?.status === "delivered" ? "cardHeaderGrey" : "cardHeaderGreen"
          }
        >
          {props.headerleft && (
            <div>
              <b>Order Num:</b> {props.ordernum}
            </div>
          )}
          {props.headerRight && props.headerRight}
        </div>
      )}
      {props.children}
    </div>
  );
};

export default Card;

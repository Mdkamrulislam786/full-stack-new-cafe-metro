import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./CartItems.css";
import burger from "../../images/burger.jpg";
import { generatePublicUrl } from "../../urlConfig";

const CartItems = ({ cartItem, onQuantityInc, onQuantityDec, ...props }) => {
  const [qty, setQty] = useState(cartItem.qty);
  const { _id, name, price, img } = cartItem;
  const onQuantityIncrement = () => {
    setQty(qty + 1);
    onQuantityInc(_id, qty + 1);
  };

  const onQuantityDecrement = () => {
    if (qty <= 1) return;
    setQty(qty - 1);
    onQuantityDec(_id, qty - 1);
  };
  return (
    <Container fluid>
      <Row className="text-center text-capitalize my-2">
        <Col xs={2} className="mx-auto">
          <Image
            src={generatePublicUrl(img)}
            alt="products"
            className="cartImg"
          />
        </Col>
        <Col xs={2} className="mx-auto">
          {name}
        </Col>
        <Col xs={2} className="mx-auto">
          {price} $
        </Col>
        <Col xs={2} className="mx-auto">
          <div className="d-flex justify-content-center">
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={onQuantityDecrement}
              >
                -
              </span>
              <span className="btn btn-black mx-1"> {qty} </span>
              <span
                className="btn btn-black mx-1"
                onClick={onQuantityIncrement}
              >
                +
              </span>
            </div>
          </div>
        </Col>
        <Col xs={2} className="mx-auto">
        
            <div
              className="cart-icon"
              onClick={() => props.onRemoveCartItem(_id)}
            >
              <i className="fas fa-trash"></i>
            </div>
      
        </Col>
        <Col xs={2} className="mx-auto">
          {price * qty} $
        </Col>
      </Row>
    </Container>
  );
};
export default CartItems;

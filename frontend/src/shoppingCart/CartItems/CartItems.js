import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import "./CartItems.css";
import burger from "../../images/burger.jpg";

const CartItems = () => {
  // const { name, img, price, total, numbers } = item;

  return (
    <Row className="text-center text-capitalize my-2">
      <Col xs={2} className="mx-auto">
        <Image src={burger} alt="products" className="cartImg" />
      </Col>
      <Col xs={2} className="mx-auto">
        burger
      </Col>
      <Col xs={2} className="mx-auto">
        12 $
      </Col>
      <Col xs={2} className="mx-auto">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1">-</span>
            <span className="btn btn-black mx-1">1</span>
            <span className="btn btn-black mx-1">+</span>
          </div>
        </div>
      </Col>
      <Col xs={2} className="mx-auto">
        <div className="cart-icon">
          <i className="fa fa-trash" />
        </div>
      </Col>
      <Col xs={2} className="mx-auto">
        12 $
      </Col>
    </Row>
  );
};
export default CartItems

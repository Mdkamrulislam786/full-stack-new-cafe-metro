import React, { useState } from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import "./CartItems.css";
import burger from "../../images/burger.jpg";
import { generatePublicUrl } from "../../urlConfig";

const CartItems = ({
  cartItem,
  onQuantityInc,
  onQuantityDec,
  onRemoveCartItem,
  keepRemove,
}) => {
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
    <div className="cartitems">
      <Container>
        <Row className="text-center text-capitalize my-2">
          <Col xs={2} className="mx-auto text-center">
            <Image
              src={generatePublicUrl(img)}
              alt="products"
              className="cartImg"
            />
          </Col>
          <Col xs={2} className="mx-auto text-center">
            {name}
          </Col>
          <Col xs={2} className="mx-auto text-center">
            {price} tk
          </Col>
          <Col xs={2} className="mx-auto text-center">
            <div className="d-flex justify-content-center">
              <span
                className="btn btn-black mx-1 cartitems__btn "
                onClick={onQuantityDecrement}
              >
                -
              </span>
              <span className="btn btn-black mx-1 cartitems__btn ">
                {" "}
                {qty}{" "}
              </span>
              <span
                className="btn btn-black mx-1 cartitems__btn "
                onClick={onQuantityIncrement}
              >
                +
              </span>
            </div>
          </Col>
          <Col xs={2} className="mx-auto text-center">
            {keepRemove ? null : (
              <div className="cart-icon" onClick={() => onRemoveCartItem(_id)}>
                <i className="fas fa-trash"></i>
              </div>
            )}
          </Col>
          <Col xs={2} className="mx-auto text-center">
            {price * qty} tk
          </Col>
        </Row>
      </Container>
      <hr/>
    </div>
  );
};
export default CartItems;

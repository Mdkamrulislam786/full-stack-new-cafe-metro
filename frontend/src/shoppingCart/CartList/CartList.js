import React from "react";
import { Container } from "react-bootstrap";
import CartItems from "../CartItems/CartItems";

const CartList = () => {
  return (
    <Container fluid>
      <CartItems />
    </Container>
  );
};

export default CartList;

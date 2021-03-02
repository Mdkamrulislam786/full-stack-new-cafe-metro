import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../cart.css";
const CartTotals = ({ totalPrice }) => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          flexDirection: "column",
        }}
        className="cartTotals"
      >
        <h5 className="mb-0">
          <span style={{ color: "green" }}>Total : </span>
          <strong>{totalPrice} tk</strong>
        </h5>
        <p style={{ marginBottom: 0 }}>Witout delivery charges</p>
        <Button
          className="text-uppercase"
          as={Link}
          to="/checkout"
          size="sm"
          variant="success"
        >
          Checkout
        </Button>
      </div>
    </Container>
  );
};

export default CartTotals;

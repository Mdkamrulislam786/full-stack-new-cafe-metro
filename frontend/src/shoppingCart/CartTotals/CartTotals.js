import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const CartTotals = () => {
  // const { cartTotal } = value;
  return (
    <Fragment>
      <Container className="d-flex justify-content-end">
        <Row>
          <Col>
            <Link to="Shopping-Cart">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                // onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <h5 className="text-title d-flex justify-content-end mb-3 px-5">
              <span>Total : </span>
              <strong>12 tk</strong>
            </h5>
            <div className="d-flex justify-content-center  mb-3">
              <Button as={Link} to="/checkout" variant="success">
                Proceed To Checkout
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default CartTotals;

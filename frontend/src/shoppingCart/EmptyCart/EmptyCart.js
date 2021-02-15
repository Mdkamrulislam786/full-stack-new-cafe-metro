import React, { Fragment } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const EmptyCart = () => {
  const history = useHistory();
  return (
    <Fragment>
      <Container>
        <Row>
          <Col className="text-center mt-5 mb-5">
            <h1 style={{ fontFamily: "Robotto Condensed" }}>
              Your Cart is Empty
            </h1>
            <Button onClick={() => history.push("/shop")}>
              Go To Strore
            </Button>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default EmptyCart;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

let data = [
  "item",
  "name",
  "price",
  "number",
  "remove",
  "total",
];

const CartColumns = () => {
  return (
    <div>
      <Container className="text-center">
        <Row>
          {data.map((item, index) => {
            return (
              <Col className="mx-auto" xs={2} key={index}>
                <p
                  className="text-uppercase cart-col-p"
                  style={{
                    fontWeight: "600",
                    fontFamily: "Robotto",
                  }}
                >
                  {item}
                </p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CartColumns;

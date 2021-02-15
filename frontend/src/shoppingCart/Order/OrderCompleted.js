import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Order.css";

const OrderCompleted = () => {
  return (
    <div className="OrderComplete">
      <Container>
        <Row>
          <Col>
            <div className="OrderComplete__msg">
              <h2>Thank You</h2>
              <h4>Your order was completed successfully</h4>
              <p>
                Order Number: <span>2101</span>
              </p>
              <p>We'll prepare your order and deliver it very soon</p>
              <p>To Track your Order Call Us Now: +8801826391501 </p>
              <Button variant="dark" as={Link} to="/shop">
                See Menu
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderCompleted;

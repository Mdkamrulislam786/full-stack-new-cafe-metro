import React from "react";
import { Col, Container, Row, Button, Table } from "react-bootstrap";
import "./Order.css";
import img from "../../assets/pastry.jpg";
import { Link } from "react-router-dom";
const Order = () => {
  return (
    <div className="order">
      <Container>
        <Row>
          <Col xl={6}>
            <div className="order__address">
              <h5>Delivery Details</h5>
              <p>
                Name: <span> Kamrul Islam</span>
              </p>
              <p>
                Mobile Number: <span> 01826391501</span>
              </p>
              <p>
                Email: <span> kamrulislam.ki01@gmail.com</span>
              </p>
              <p>
                Delivery Address: <span>164/7,south rajasion,savar,dhaka</span>{" "}
              </p>
            </div>
          </Col>
          <Col xl={6}>
            <div className="order__items">
              <h5>Item Details</h5>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img className="order__img" src={img} alt="item" />
                    </td>
                    <td>Black Forset</td>
                    <td>2</td>
                    <td>220 tk</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Black Forset</td>
                    <td>2</td>
                    <td>220 tk</td>
                  </tr>
                  <tr>
                    <td style={{ textAlign: "end" }} colSpan="3">
                      TotalPrice:
                    </td>
                    <td>220tk</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="order__button">
            <Button
              as={Link}
              to="/order-completed"
              variant="success"
              type="submit"
            >
              Place Order
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Order;

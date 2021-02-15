import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Table,
} from "react-bootstrap";
import "./Checkout.css";
import { Link } from "react-router-dom";
import img from "../../assets/pastry.jpg";

const Checkout = () => {
  return (
    <div className="checkout">
      <Container>
        <h4>Fill up the form and check your order to proceed</h4>
        <Row>
          <Col xl={8}>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="First Name" />
                </Form.Group>
              </Form.Row>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control placeholder="Active mobile number" />
                <Form.Label>Email (optional)</Form.Label>
                <Form.Control placeholder="Enter e-mail" />
              </Form.Group>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Delivery Address(detailed & accurate)</Form.Label>
                <Form.Control placeholder="164/7,south rajasion,savar,dhaka" />
              </Form.Group>
              <Form.Group id="formGridCheckbox">
                <Form.Check
                  type="checkbox"
                  label="I confirm that the above info are accurate"
                />
              </Form.Group>

              <Button as={Link} to="/order" variant="primary" type="submit">
                Proceed to Order
              </Button>
            </Form>
          </Col>
          <Col xl={4}>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Checkout;

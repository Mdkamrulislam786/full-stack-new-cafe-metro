import React from "react";
import { Nav, Row, Tab, Col, Container } from "react-bootstrap";
import AccountInfo from "./AccountInfo";
import Orders from "./Orders/insex";
import "./Profile.css";
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__name">
        <h1>Welcome John</h1>
        <p>You can check your order history & profile info here</p>
      </div>
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Orders</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <AccountInfo />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                 <Orders/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Profile;

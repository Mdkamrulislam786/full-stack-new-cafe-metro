import React from "react";
import { Nav, Row, Tab, Col, Container, Button } from "react-bootstrap";
import AccountInfo from "./AccountInfo";
import Orders from "./Orders/insex";
import "./Profile.css";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return !user ? (
    <h2 style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      Login to see your profile
    </h2>
  ) : (
    <div className="profile">
      <div className="profile__name">
        <h3>Welcome {user.firstName}</h3>
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
                  <AccountInfo user={user} />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Orders userName={user.firstName} />
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

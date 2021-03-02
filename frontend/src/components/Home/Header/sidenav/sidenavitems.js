import React from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";
import { Nav, NavDropdown } from "react-bootstrap";
import {
  signout,
} from "../../../../actions";
import { useDispatch, useSelector } from "react-redux";

const SideNavItems = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  };



  const renderLoggedInMenu = () => (
    <>
      <Nav.Link as={Link} to="/profile">
        <i className="fas fa-id-card-alt icon" />
        Profile
      </Nav.Link>
      <Nav.Link
        onClick={() => {
          logout();
        }}
      >
        <i className="fas fa-id-card-alt icon" /> Logout
      </Nav.Link>
    </>
  );
  const renderNonLoggedInMenu = () => (
    <>
      <Nav.Link as={Link} to="/signin">
        <i className="fas fa-id-card-alt icon" /> Login
      </Nav.Link>
      <Nav.Link as={Link} to="/signup">
        <i className="fas fa-id-card-alt icon" /> Signup
      </Nav.Link>
    </>
  );
  const showItems = () => {
    return (
      <>
        <Nav className="flex-column option">
          <Nav.Link as={Link} to="/">
            <i className="fas fa-home icon"></i>Home
          </Nav.Link>

          <Nav.Link as={Link} to="/shop">
            <i className="fas fa-mug-hot icon"></i> Menu
          </Nav.Link>

            <NavDropdown
              title={<i className="fas fa-clipboard-list icon">Our Services</i>}
            >
              <NavDropdown.Item
                as={Link}
                to="/Catering-services"
                href="#action/3.1"
              >
                <i className="fas fa-wine-glass-alt icon"></i> Catering Services
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/Wedding-services"
                href="#action/3.2"
              >
                <i className="fas fa-ring icon"></i> Wedding services
              </NavDropdown.Item>
            </NavDropdown>

          <Nav.Link as={Link} to="/our-story">
            <i className="fas fa-user" /> Our Story
          </Nav.Link>
          <Nav.Link href="#ContactUs">
            <i className="fas fa-id-card-alt icon" /> Contact Us
          </Nav.Link>
          {auth.authenticate ? renderLoggedInMenu() : renderNonLoggedInMenu()}
        </Nav>
      </>
    );
  };


  return (
    <div>
      {showItems()}
    </div>
  );
};

export default SideNavItems;

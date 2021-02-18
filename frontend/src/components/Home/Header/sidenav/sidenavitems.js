import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidenav.css";
import { Nav, NavDropdown } from "react-bootstrap";
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu,
} from "../../../MaterialUI";
import {
  login,
  signout,
  getCartItems,
  signup as _signup,
} from "../../../../actions";
import { useDispatch, useSelector } from "react-redux";

const SideNavItems = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [signup, setSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // state cart value
  const cart = useSelector((state) => state.cart);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(_signup(user));
  };

  const userLogin = () => {
    if (signup) {
      userSignup();
    } else {
      dispatch(login({ email, password }));
    }
  };

  const logout = () => {
    dispatch(signout());
  };

  useEffect(() => {
    if (auth.authenticate) {
      setLoginModal(false);
    }
  }, [auth.authenticate]);

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
      <Nav.Link
        onClick={() => {
          setLoginModal(true);
        }}
      >
        <i className="fas fa-id-card-alt icon" /> Login
      </Nav.Link>
      <Nav.Link
        onClick={() => {
          setLoginModal(true);
          setSignup(true);
        }}
      >
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

  const ShowModal = () => {
    return (
      <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">
              <div className="loginInputContainer">
                {auth.error && (
                  <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                )}
                {signup && (
                  <MaterialInput
                    type="text"
                    label="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                )}

                <MaterialInput
                  type="text"
                  label="Email/Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MaterialInput
                  type="password"
                  label="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // rightElement={<a href="#">Forgot?</a>}
                />
                <MaterialButton
                  title={signup ? "Register" : "Login"}
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  style={{
                    margin: "40px 0 20px 0",
                  }}
                  onClick={userLogin}
                />
                <p style={{ textAlign: "center" }}>OR</p>
                <MaterialButton
                  title="Request OTP"
                  bgColor="#ffffff"
                  textColor="#2874f0"
                  style={{
                    margin: "20px 0",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <div>
      {showItems()}
      {ShowModal()}
    </div>
  );
};

export default SideNavItems;

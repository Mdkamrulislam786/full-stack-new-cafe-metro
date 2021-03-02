import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signup as _signup } from "../../../actions";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [signup, setSignup] = useState(false);
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (auth.authenticate) {
      setSignup(true);
    }
  }, [auth.authenticate]);

  const userSignup = () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      setError("All Feilds are required");
      return;
    }

    dispatch(_signup(user));
    if (auth.error ?? auth.authenticate === false) {
      return;
    } else {
      setShow(true);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      history.push("/signin");
    }
  };

  return signup ? (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>You are Loged in</h2> <br />
      <Button as={Link} to="/profile">
        Go to Profile
      </Button>
    </div>
  ) : (
    <Container onClick={error ? () => setError("") : null}>
      <Alert
        show={show}
        variant="success"
        onClose={() => setShow(false)}
        dismissible
      >
        <Alert.Heading>Signup successfull</Alert.Heading>
        <p>Welcome to New cafe metro, Plz Login</p>
      </Alert>

      <div className="login">
        <Card style={{ maxWidth: "500px", padding: "1rem" }}>
          <form>
            <h2>Sign Up</h2>
            {auth.error && (
              <div style={{ color: "red", fontSize: 12, textAlign: "center" }}>
                {auth.error}
              </div>
            )}
            {error ? (
              <div style={{ color: "red", fontSize: 12, textAlign: "center" }}>
                {error}
              </div>
            ) : null}
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <Button className="btn btn-success submit-btn" onClick={userSignup}>
              Sign Up
            </Button>
          </form>

          <p className="forgot-password text-right">
            Already Have an account? <Link to="/signin">Login</Link>
          </p>
        </Card>
      </div>
    </Container>
  );
};

export default Signup;

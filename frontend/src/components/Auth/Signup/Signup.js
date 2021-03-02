import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signup as _signup } from "../../../actions";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [signup, setSignup] = useState(false);
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (auth.authenticate) {
      setSignup(true);
    }
  }, [auth.authenticate]);

  const userSignup = async () => {
    const user = { firstName, lastName, email, password };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      return;
    }

    dispatch(await _signup(user));
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    history.push("/signin");
  };

  return signup ? (
    <h2>You are Loged In Go to <Link to="/profile">Profile</Link> </h2>
  ) : (
    <Container>
      {auth.error && (
        <div style={{ color: "red", fontSize: 12 }}>{auth.error}</div>
      )}
      <div className="login">
        <Card style={{ maxWidth: "500px", padding: "1rem" }}>
          <form>
            <h2>Sign Up</h2>
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

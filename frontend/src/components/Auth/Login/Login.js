import React, { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../../actions";
import "../Auth.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = async () => {
    if (email === "" || password === "") {
      setError("Both Email and password  are required");
      return;
    }
    dispatch(await login({ email, password }));
    setEmail("");
    setPassword("");
    history.push("/profile");
  };

  return (
    <Container onClick={error ? () => setError("") : null}>
      <div className="login">
        <Card style={{ maxWidth: "500px", padding: "1rem" }}>
          <form>
            <h2>Log In</h2>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
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
            <Button className="btn btn-success submit-btn" onClick={userLogin}>
              Submit
            </Button>
            <p className="forgot-password text-right">
              Don't have an account? <Link to="/signup">Signup</Link>
            </p>
            <p className="forgot-password text-right">
              Forgot <Link to="/reset">password?</Link>
            </p>
          </form>
        </Card>
      </div>
    </Container>
  );
};

export default Login;

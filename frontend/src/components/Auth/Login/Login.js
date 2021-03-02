import React, { useState, useEffect } from "react";
import { Alert, Button, Card, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { login } from "../../../actions";
import "../Auth.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const [send, setSend] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const history = useHistory();

  const userLogin = async () => {
     setSend(true);
    if (email === "" || password === "") {
      setError("Both Email and password  are required");
      return;
    }
    dispatch(login({ email, password }));
    if (auth.authenticate === false) {
      setError("Email or password  is wrong");
      return;
    } else {
      setShow(true);
      setEmail("");
      setPassword("");
      history.push("/profile");
    }
  };
  useEffect(() => {
    console.log("auth", auth);
  }, [send]);

  return auth.authenticate ? (
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
        <Alert.Heading>Login successfull</Alert.Heading>
        <p>Welcome to New cafe metro</p>
      </Alert>
      <div className="login">
        <Card
          style={{
            maxWidth: "500px",
            padding: "1rem",
            boxShadow: "30px 30px 50px 60px #ccc !important",
          }}
        >
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
              Login
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

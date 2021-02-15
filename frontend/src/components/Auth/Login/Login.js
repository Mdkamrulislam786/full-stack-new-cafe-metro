import React from "react";
import { Button } from "react-bootstrap";
import "../Auth.css";
const Login = ({ email, password, onSubmit }) => {
  return (
    <div>
      <form>
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <Button
          type="submit"
          onSubmit={onSubmit}
          className="btn btn-success submit-btn"
        >
          Submit
        </Button>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

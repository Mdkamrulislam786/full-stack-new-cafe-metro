import React from "react";

const Signup = ({ firstName, lastName, email, password, onSubmit }) => {
  return (
    <div>
      <form>
        <h3>Sign Up</h3>

        <div className="form-group">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>

        <div className="form-group">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>

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

        <button
          type="submit"
          onSubmit={onSubmit}
          className="btn btn-success submit-btn"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;

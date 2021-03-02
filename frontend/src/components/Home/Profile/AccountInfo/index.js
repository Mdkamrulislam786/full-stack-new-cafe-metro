import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const AccountInfo = ({ user }) => {
  const { email, fullName, role } = user;
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Full Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">{fullName}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Email</h6>
          </div>
          <div className="col-sm-9 text-secondary">{email}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Role</h6>
          </div>
          <div className="col-sm-9 text-secondary">{role}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-2">Change password!</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <Button as={Link} to="/reset">
              Reset
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;

import React from "react";

const AccountStatus = () => {
  return (
    <div className="account-status">
      <h3>Accounts Status</h3>
      <p>In process</p>
      <div className="progressbar">
        <div className="progress"></div>
      </div>
      <p className="text-center">
        <strong>Estimated Process</strong>
      </p>
      <p className="text-center">4-5 business days</p>
      <button>View status</button>
    </div>
  );
};

export default AccountStatus;

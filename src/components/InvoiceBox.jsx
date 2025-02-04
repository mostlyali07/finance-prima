import React from "react";

const InvoiceBox = ({ boxHeading,headingNumber, percentage, successTabClass }) => {
  return (
    <div className="invoice-sec w-100">
      <h5 className="w-100">{boxHeading}</h5>
      <div className="w-100 d-flex align-items-center justify-content-between">
        <h2>{headingNumber}</h2>
        <div className={successTabClass}>
          <span>{percentage}</span>
        </div>
      </div>
    </div>
  );
};

export default InvoiceBox;
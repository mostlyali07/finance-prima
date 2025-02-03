import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

const BoxNumber = ({ icon, headingNumber, symbol, description }) => {
  return (
    <div className="box-number">
      <div className="d-flex align-items-center justify-content-between mb-3">
        {icon}
        <BiDotsVerticalRounded size={24} />
      </div>
      <h2>
        {symbol}
        {headingNumber}
      </h2>
      <p>{description}</p>
    </div>
  );
};

export default BoxNumber;

import React from "react";
import { GoDotFill } from "react-icons/go";

const UpcomingWidget = () => {
  return (
    <div className="upcoming-widget">
      <GoDotFill />
      <div>
        <h4>Upcoming meeting</h4>
        <h6>Feb 22 at 6:00 PM</h6>
        <p>You have been invited to attend a meeting of the Board Directors.</p>
      </div>
    </div>
  );
};

export default UpcomingWidget;

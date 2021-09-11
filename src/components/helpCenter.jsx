import React from "react";
import help_cent_icon from "../assests/icons/help-center-icon.svg";

const HelpCenter = () => {
  return (
    <div className="help-center">
      <div style={{ cursor: "pointer" }}>
        <img src={help_cent_icon} alt="help center" />
        <span> Help center</span>
      </div>
    </div>
  );
};

export default HelpCenter;

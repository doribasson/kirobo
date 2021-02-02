import React from "react";
import "./card1.css";

const Card1 = ({ myDevice: { hostType, deviceType, deviceName } }) => {
  return (
    <div className="card1">
      <p>{`Host type: ${hostType}`}</p>
      <p>{`Device type: ${deviceType}`}</p>
      <p>{`Device name: ${deviceName}`}</p>
    </div>
  );
};

export default Card1;

import React from "react";
import "./style.css";

const Payref = ({ refNo }) => {
  return (
    <div className="payref">
      <div className="grids">
        <div className="grid-item">
          <p>Your Referral Statistics</p>
          <h1>{refNo}</h1>
        </div>

        <div className="grid-item">
          <p>Cash Price per referral</p>
          <h1>$5</h1>
        </div>

        <div className="grid-item">
          <p>Paid Referrees</p>
          <h1>{refNo}</h1>
        </div>

        <div className="grid-item">
          <p>Total Billings</p>
          <h1>$0</h1>
        </div>
      </div>
    </div>
  );
};

export default Payref;

import React, { useState } from "react";

const International_SIM_Cards = () => {
  const [destination, setDestination] = useState("All destinations");

  return (
    <div className="insurance-container">
      <div className="health-container">
        {/* Breadcrumb */}
        <p className="breadcrumb">
          Study Abroad, Overseas Education... / Student Essentials / International SIM Cards
        </p>

        {/* Heading */}
        <h1 className="main-heading">
          International SIM Cards Services for International Students
        </h1>

        {/* Recommendation Section */}
        <div className="recommend-box">
          <p>Discover recommended products for your study destination.</p>
          <select
            className="destination-dropdown"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          >
            <option>All destinations</option>
            <option>Australia</option>
            <option>UK</option>
            <option>Canada</option>
            <option>USA</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default International_SIM_Cards;

import { useState } from "react";
import React from 'react'

const Forex_Cards = () => {
  const [destination, setDestination] = useState("All destinations");
  return (
    <div className="insurance-container">
      <div className="health-container">
        {/* Breadcrumb */}
        <p className="breadcrumb">
          Study Abroad, Overseas Education... / Student Essentials / Forex Cards
        </p>

        {/* Heading */}
        <h1 className="main-heading">
          Forex Card services for International Students
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

      {/* Top Banner */}
      <section className="insurance-banner">
        <h1>Forex Cards for International Students</h1>
        <p>
          Ensure peace of mind while studying abroad. Get coverage for doctor visits,
          hospital stays, emergency ambulance services, and prescription medicine.
        </p>
        <button className="cta-btn">
          Apply for Student Visa Forex Card
        </button>
      </section>

      {/* Options Section */}
      <section className="insurance-options">
        <div className="option-card">
          <h2>Compare and choose what’s right for you</h2>
          <p>
            Explore plans from trusted providers that meet the strict conditions of
            registered health funds. Find the coverage that fits your needs.
          </p>
          <button className="option-btn">Buy Plans</button>
        </div>

        <div className="option-card">
          <h2>Apply online for a quick turnaround</h2>
          <p>
            Get insured fast with our streamlined online application. No paperwork,
            no hassle—just protection when you need it most.
          </p>
          <button className="option-btn">Apply Now</button>
        </div>
      </section>
    </div>
  )
}

export default Forex_Cards

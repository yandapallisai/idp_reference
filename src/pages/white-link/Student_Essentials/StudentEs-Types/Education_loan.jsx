import React, { useState } from "react";
import "./Education_loan.css";

const partners = [{
    name: "ICICI Bank iSMART Education Loans",
    logo: "/assets/ICICI_Bank_iSMART_logo.png",
    features: [
      "Tax Saving (ITR sec-80E)",
      "Covers tuition fee & more",
      "Track and apply online",
    ],
    destinations: ["AU", "CA", "GB", "IE", "NZ", "US"],
  },
  {
    name: "Avanse",
    logo: "/assets/Avanse_logo_cropped.png",
    features: ["Covers tuition fee & more", "Track and apply online"],
    destinations: ["AU", "CA", "GB", "IE", "NZ", "US"],
  },
  {
    name: "Credila",
    logo: "/assets/Credila-Logo-Sept24.png",
    features: [
      "Tax Saving (ITR sec-80E)",
      "Covers tuition fee & more",
      "Track and apply online",
    ],
    destinations: ["AU", "CA", "GB", "IE", "NZ", "US"],
  },

  
  {
    name: "Poonawalla Fincorp Limited",
    logo: "/assets/PFL-logo (1).jpeg",
    features: [
      "Tax Saving (ITR sec-80E)",
      "Covers tuition fee & more",
      "Track and apply online",
    ],
    destinations: ["AU", "CA", "GB", "IE", "NZ", "US"],
  },
  {
    name: "Union Bank of India Services Limited",
    logo: "/assets/UBI_SL_Logo.jpeg",
    features: [
      "Tax Saving (ITR sec-80E)",
      "Covers tuition fees & more",
      "Track and apply online",
    ],
    destinations: ["AU", "CA", "GB", "IE", "NZ", "US"],
  },
 {
    name: "State Bank of India (SBI)",
    logo: "/assets/SBI.png",
    features: [
      "Tax Saving (ITR sec-80E)",
      "Covers tuition fee & more",
      "Track and apply online",
    ],
    destinations: ["AU", "CA", "GB", "IE", "NZ", "US"],
  },


  

];

const Education_loan = () => {
  const [selectedDestination, setSelectedDestination] = useState("All");

  const filteredPartners =
    selectedDestination === "All"
      ? partners
      : partners.filter((p) => p.destinations.includes(selectedDestination));

  return (
    <div className="education-loan-wrapper">
      <div className="breadcrumb">
        Study Abroad / Student Essentials / Study Abroad Loan
      </div>

      <div className="header">
        <h1>Education Loan to Study Abroad</h1>
      </div>

      <div className="filter-section">
        <p>Discover recommended products for your study destination.</p>
        <select
          className="filter-select"
          onChange={(e) => setSelectedDestination(e.target.value)}
        >
          <option value="All">All destinations</option>
          <option value="AU">Australia</option>
          <option value="CA">Canada</option>
          <option value="GB">UK</option>
          <option value="US">USA</option>
          <option value="IE">Ireland</option>
          <option value="NZ">New Zealand</option>
        </select>
      </div>

      <div className="description">
        <h2>Education loan</h2>
        <p>
          We've partnered with trusted financial institutions to offer a
          one-stop solution for education loans. Our partners help make your
          study abroad journey convenient and simple.
        </p>
      </div>

      <div className="partner-grid">
        {filteredPartners.map((bank, i) => (
          <div key={i} className="partner-card">
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3>{bank.name}</h3>
                <img src={bank.logo} alt={`${bank.name} logo`} />
              </div>
              <ul>
                {bank.features.map((f, index) => (
                  <li key={index}>{f}</li>
                ))}
              </ul>
              <p>Available for: {bank.destinations.join(", ")}</p>
            </div>
            <div className="button-group">
              <button className="button-primary" aria-label={`Enquire about ${bank.name}`}>
                Enquire now
              </button>
              <button className="button-secondary" aria-label={`Learn more about ${bank.name}`}>
                Learn more
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education_loan;
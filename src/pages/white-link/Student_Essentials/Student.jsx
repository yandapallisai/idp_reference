import React, { useState } from "react";
import "./StudentEss.css";
import StudentEssFrom from "./StudentEssFrom/StudentEssFrom";
import ServicesSection from "./StudentEssFrom/ServiceSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGraduationCap,
  faMoneyBillTransfer,
  faHeartPulse,
  faUniversity,
  faHouse,
  faSimCard,
  faUserShield,
  faCreditCard,
  faIdCard,
} from "@fortawesome/free-solid-svg-icons";

const essentials = [
  {
    title: "Education loan",
    icon: faGraduationCap,
    desc: "Easy access to finances so you don’t delay your dreams.",
  },
  {
    title: "Money transfer",
    icon: faMoneyBillTransfer,
    desc: "Safe, secure and fast payments to your institution and other key services.",
  },
  {
    title: "Health Insurance",
    icon: faHeartPulse,
    desc: "Your choice, your health cover, your peace of mind abroad.",
  },
  {
    title: "Student banking",
    icon: faUniversity,
    desc: "Open a bank account before you arrive.",
  },
  {
    title: "Accommodation",
    icon: faHouse,
    desc: "Student apartment or homestay, the choice is yours.",
  },
  {
    title: "Sim cards",
    icon: faSimCard,
    desc: "No SIM? No problem – We’ve got it covered.",
  },
  {
    title: "Guardianship",
    icon: faUserShield,
    desc: "If you’re under 18, we’ll find you a guardian.",
  },
  {
    title: "Forex",
    icon: faCreditCard,
    desc: "Unlock the world with a hassle-free Forex Card – Your Perfect Travel Companion.",
  },
  {
    title: "Student Identity Card",
    icon: faIdCard,
    desc: "Start enjoying global student discounts on food, fashion, travel, and more.",
  },
];

const Student = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    destination: "",
    startTime: "",
    office: "",
    counsellingMode: "",
    studyLevel: "",
    funding: "",
    agreeTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="essentials-container">
      <div></div>
      <p className="breadcrumb">
        Study Abroad, Overseas Education... / Student Essentials Services...
      </p>
      <h1 className="heading">Student Essentials</h1>

      {/* Filter and recommendation section */}
      <div className="recommend-section">
        <p>Discover recommended products for your study destination.</p>
        <select className="destination-select">
          <option>All</option>
          <option>Australia</option>
          <option>UK</option>
          <option>Canada</option>
          <option>USA</option>
        </select>
      </div>

      {/* Essentials cards */}
      <div className="essentials-grid">
        {essentials.map((item, index) => (
          <div key={index} className="card">
            <FontAwesomeIcon icon={item.icon} className="icon" />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <button className="learn-btn">Learn more →</button>
          </div>
        ))}
      </div>

      {/* Bottom Section */}
      <div className="bottom-banner">
        <div className="banner-left">
          <img
            src="./assets/MAY19-ARTICLE-WEB-13.jpg_.webp"
            alt="Students"
            className="banner-img"
          />
        </div>
        <div className="banner-right">
          <h2>Simplifying your study abroad experience.</h2>
          <p>Watch how we take care of the boring stuff, so you don’t have to.</p>
          <button className="free-btn">Avail FREE counselling</button>
        </div>
      </div>

      {/* Form and Service Section */}
      <StudentEssFrom />
      <ServicesSection />
    </div>
  );
};

export default Student;

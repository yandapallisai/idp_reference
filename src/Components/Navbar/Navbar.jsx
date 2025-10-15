import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faAngleDown, faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

// Black bar dropdown data
const balckDropworn = {
  "Find-us": {
    path: "/pages/black-link/Find",
    items: [
      { label: "IDP Australia", path: "/find-us/australia" },
      { label: "IDP Bahrain", path: "/find-us/bahrain" },
      { label: "IDP Bangladesh", path: "/find-us/bangladesh" },
      { label: "IDP Cambodia", path: "/find-us/cambodia" },
      { label: "IDP Canada", path: "/find-us/canada" },
      { label: "IDP China", path: "/find-us/china" },
      { label: "IDP Egypt", path: "/find-us/egypt" },
      { label: "IDP Ghana", path: "/find-us/ghana" },
      { label: "IDP Hong Kong", path: "/find-us/hong-kong" },
      { label: "IDP Indonesia", path: "/find-us/indonesia" },
      { label: "IDP Iran", path: "/find-us/iran" },
      { label: "IDP Jordan", path: "/find-us/jordan" },
      { label: "IDP Kenya", path: "/find-us/kenya" },
      { label: "IDP Korea", path: "/find-us/korea" },
      { label: "IDP Kuwait", path: "/find-us/kuwait" },
      { label: "IDP Lebanon", path: "/find-us/lebanon" },
      { label: "IDP Malaysia", path: "/find-us/malaysia" },
      { label: "IDP Mauritius", path: "/find-us/mauritius" },
      { label: "IDP Middle East", path: "/find-us/middle-east" },
      { label: "IDP Nepal", path: "/find-us/nepal" },
    ],
  },
};



const dropdownData = {
  "Study-abroad-steps": {
    path: "/study-abroad/why-study-abroad",
    items: [
      { label: "Why study abroad?", path: "/study-abroad/why-study-abroad" },
      { label: "Where and what to study?", path: "/study-abroad/where-to-study" },
      { label: "How do I apply?", path: "/study-abroad/how-to-apply" },
      { label: "After receiving an offer", path: "/study-abroad/after-offer" },
      { label: "Prepare to depart", path: "/study-abroad/prepare-to-depart" },
      { label: "Arrive and thrive", path: "/study-abroad/arrive-and-thrive" },
    ],
  },
  "Study-destinations": {
    path: "/pages/white-link/StudyDestinations/StudyDs",
    items: [
      { label: "Study in Australia", path: "/pages/white-link/StudyDestinations/StudyDs" },
      { label: "Study in Canada", path: "/pages/white-link/StudyDestinations/StudyDs" },
      { label: "Study in Ireland", path: "/pages/white-link/StudyDestinations/StudyDs" },
      { label: "Study in UK", path: "/pages/white-link/StudyDestinations/StudyDs" },
      { label: "Study in USA", path: "/pages/white-link/StudyDestinations/StudyDs" },
    ],
  },
  "Find-a-course": {
    path: "/pages/white-link/Find1",
    items: [
      { label: "Undergraduate", path: "/pages/white-link/Find1" },
      { label: "Postgraduate", path: "/pages/white-link/Find1" },
      { label: "Diploma", path: "/pages/white-link/Find1" },
      { label: "Certificate", path: "/pages/white-link/Find1" },
      { label: "Short Courses", path: "/pages/white-link/Find1" },
    ],
  },
  "IELTS": {
    path: "/pages/white-link/IELTS",
    items: [
      { label: "IELTS Academic", path: "/pages/white-link/IELTS" },
      { label: "IELTS General Training", path: "/pages/white-link/IELTS" },
      { label: "IELTS Preparation", path: "/pages/white-link/IELTS" },
      { label: "Test Dates", path: "/pages/white-link/IELTS" },
    ],
  },

  "Student-essentials": {
    path: "/pages/white-link/Student_Essentials",
    items: [
      { label: "Education Loan", path: "/pages/white-link/Student_Essentials/EducationLoan" },
      { label: "Money Transfer", path: "/pages/white-link/Student_Essentials/Money_Transfer" },
      { label: "Health Insurance", path: "/pages/white-link/Student_Essentials/HealthInsurance" },
      { label: "Student Banking", path: "/pages/white-link/Student_Essentials/StudentBanking" },
      { label: "Accommodation", path: "/pages/white-link/Student_Essentials/Accommodation" },
      { label: "International SIM Cards", path: "/pages/white-link/Student_Essentials/InternationalSimCards" },
      { label: "Guardian_Ship", path: "/pages/white-link/Student_Essentials/Guardian_Ship" },
      { label: "Forex Cards", path: "/pages/white-link/Student_Essentials/ForexCards" },
      { label: "ISIC", path: "/pages/white-link/Student_Essentials/ISIC" },
    ],
  },


};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    closeDropdown();
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Top Black Bar */}
      <div className="black-container">
        <ul className="black-links">
          <li className="black-li">
            <Link to="/pages/NewAndA">News and articles</Link>
          </li>
          <li className="black-li">
            <Link to="/pages/Events">Events</Link>
          </li>

          {/* Find-us Dropdown */}
          <li
            className="black-li1 has-dropdown"
            onMouseEnter={() => setOpenDropdown("Find-us-black")}
            onMouseLeave={closeDropdown}
          >
            <button className="nav-button" onClick={() => toggleDropdown("Find-us-black")}>
              Find us <FontAwesomeIcon icon={faAngleDown} />
            </button>

            {openDropdown === "Find-us-black" && (
              <ul
                className="find-us-dropdown"
                onMouseEnter={() => setOpenDropdown("Find-us-black")}
                onMouseLeave={closeDropdown}
              >
                {/* Special Button on Top */}
                <li >
                  <Link to="/pages/black-link/Find/Find" style={{ textDecoration: "none" }}>
                    <button

                    >
                      Find nearest IDP Offices
                    </button>
                  </Link>
                </li>

                {/* Office Links */}
                {balckDropworn["Find-us"].items.map((item, idx) => (
                  <li key={idx}>
                    <Link to={item.path} onClick={closeDropdown} style={{ color: "#fff", textDecoration: "none" }}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li className="black-li2">
            <Link to="/pages/English">
              <FontAwesomeIcon icon={faGlobe} /> English
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Navbar */}
      <nav className="main-navbar">
        <Link to="/">
          <img src="/assets/idp-logo.svg" alt="Logo" className="logo" />
        </Link>

        <div className="nav-links-wrapper">
          <ul className="nav-links">
            {Object.entries(dropdownData).map(([key, items]) => (
              <li
                key={key}
                className="nav-item"
                onMouseEnter={() => setOpenDropdown(key)}
                onMouseLeave={closeDropdown}
              >
                <Link
                  to={items.path}
                  className="nav-button"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === key}
                >
                  {key
                    .split("-")
                    .map((w) => w[0].toUpperCase() + w.slice(1))
                    .join(" ")}
                </Link>

                {openDropdown === key && (
                  <ul className="white-dropdown">
                    {items.items.map((item, idx) => (
                      <li key={idx} className="white-dropdown-item">
                        <Link
                          to={item.path}
                          onClick={closeDropdown}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-buttons">
          <Link to="/pages/white-link/Avail">
            <button className="login-btn">Avail Free counselling</button>
          </Link>
          <Link to="/pages/white-link/SignIN">
            <button className="signup-btn">Sign in</button>
          </Link>
        </div>

        <div className="right-icons">

          <Link to="/ShortList" className="icon-btn heart">
            <FontAwesomeIcon icon={faRegularHeart} />
          </Link>

          <Link to="/pages/white-link/SignIN" className="icon-btn account">
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile Sidebar */}
        <div className={`mobile-sidebar ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="mobile-links">
            {Object.entries(dropdownData).map(([key, items]) => (
              <li key={key}>
                <Link to={items.path} onClick={toggleMobileMenu}>
                  {key.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ")}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/pages/white-link/Avail">
                <button className="login-btn" onClick={toggleMobileMenu}>
                  Avail Free counselling
                </button>
              </Link>
            </li>
            <li>
              <Link to="/pages/white-link/SignIN">
                <button className="signup-btn" onClick={toggleMobileMenu}>
                  Sign in
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)} />}
      </nav>
    </>
  );
};

export default Navbar;

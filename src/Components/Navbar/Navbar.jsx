import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faAngleDown, faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";

// Inline styles for dropdowns and nav elements
const styles = {
  navButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "inherit",
    color: "inherit",
    display: "flex",
    alignItems: "center",
    gap: "3px",
  },
  dropdownMenu: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "0 4px 8px rgba(18, 2, 2, 0.1)",
    listStyle: "none",
    padding: "10px 0",
    marginTop: "5px",
    borderRadius: "4px",
    zIndex: 1000,
    minWidth: 200,
  },
  dropdownItem: {
    padding: "8px 20px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },
  navItem: {
    cursor: "pointer",
    position: "relative",
  },
  secondLevelMenu: {
    position: "absolute",
    top: 0,
    left: "100%",
    backgroundColor: "#f5f5f5",
    boxShadow: "0 4px 8px rgba(18, 2, 2, 0.1)",
    listStyle: "none",
    padding: "10px 0",
    marginTop: 0,
    borderRadius: "4px",
    zIndex: 1001,
    minWidth: 260,
    height: "100%",
  },
};
const balckDropworn ={"Find-us": {
    path: "/pages/Find",
    items: [
      { label: "Our Office", path: "/pages/Find" },
      { label: "Office Hours", path: "/pages/Find" },
      { label: "Phone & Email", path: "/pages/Find" },
      { label: "Facebook", path: "/pages/Find" },
      { label: "Instagram", path: "/pages/Find" },
      { label: "LinkedIn", path: "/pages/Find" },
      { label: "YouTube", path: "/pages/Find" },
      { label: "Map Location", path: "/pages/Find" },
      { label: "Book Appointment", path: "/pages/Find" },
      { label: "Support Center", path: "/pages/Find" },
    ],
    },}

// Corrected dropdown paths matching App.js routes
const dropdownData = {
  "Study-abroad-steps": {
    path: "/pages/white-link/StudyAb",
    items: [
      { label: "Why study abroad?", path: "/pages/white-link/StudyAb" },
      { label: "Where and what to study?", path: "/pages/white-link/StudyAb" },
      { label: "How do I apply?", path: "/pages/white-link/StudyAb" },
      { label: "After receiving an offer", path: "/pages/white-link/StudyAb" },
      { label: "Prepare to depart", path: "/pages/white-link/StudyAb" },
      { label: "Arrive and thrive", path: "/pages/white-link/StudyAb" },
    ],
  },
  "Study-destinations": {
    path: "/pages/white-link/StudyDs",
    items: [
      { label: "Study in Australia", path: "/pages/white-link/StudyDs" },
      { label: "Study in Canada", path: "/pages/white-link/StudyDs" },
      { label: "Study in Ireland", path: "/pages/white-link/StudyDs" },
      { label: "Study in UK", path: "/pages/white-link/StudyDs" },
      { label: "Study in USA", path: "/pages/white-link/StudyDs" },
    ],
  },
  "Find-a-course": {
    path: "/pages/white-link/Find1",
    items: [
      { label: "Course Advice", path: "/pages/CourseA" },
      { label: "Courses with Instant Offer", path: "/pages/Courseof" },
      { label: "Study Abroad cources", path: "/pages/Sabroad" },
      { label: "Find scholorships", path: "/pages/Scholar" },
      { label: "Find Universities", path: "/pages/FindU" },
      { label: "University Rankings - THE", path: "/pages/Uranking" },
      { label: "Complete University Guide (CUG)", path: "/pages/Cug" },
    ],
  },
  "IELTS": {
    path: "/pages/white-link/IELTS",
    items: [
      { label: "Book an IELTS Test", path: "/pages/Book" },
      { label: "What is IELTS?", path: "/pages/what" },
      { label: "IELTS Preparation", path: "/pages/Prep" },
      { label: "Test Dates", path: "/pages/white-link/IELTS" },
    ],
  },
  "Student-essentials": {
    path: "/pages/white-link/Student",
    items: [
      { label: "Accommodation", path: "/pages/white-link/Student" },
      { label: "Health Insurance", path: "/pages/white-link/Student" },
      { label: "Student Visa", path: "/pages/white-link/Student" },
      { label: "Travel Tips", path: "/pages/white-link/Student" },
    ],
  },
};

// Second-level submenu for specific items
const submenuData = {
  "University Rankings - THE": [
    { label: "QS World University Rankings", path: "/pages/Qsworld" },
  ],
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSecondLevel, setOpenSecondLevel] = useState(null);
  const [dropdownHeight, setDropdownHeight] = useState(null);

  const dropdownRef = React.useRef(null);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
    setOpenSecondLevel(null);
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

  useEffect(() => {
    if (openDropdown && dropdownRef.current) {
      setDropdownHeight(dropdownRef.current.clientHeight);
    } else {
      setDropdownHeight(null);
    }
  }, [openDropdown]);

  return (
    <>
      {/* Top Black Bar with quick links */}
     
     {/* Top Black Bar with quick links */}
<div className="black-container" style={{ position: "sticky", top: 0, zIndex: 9999 }}>
  <ul className="black-links" style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
    <li className="black-li">
      <Link to="/pages/NewAndA">News and articles</Link>
    </li>
    <li className="black-li">
      <Link to="/pages/Events">Events</Link>
    </li>

    {/*  Black Bar Find-us Dropdown */}
    <li
      className="black-li1"
      style={{ position: "relative" }}
      onMouseEnter={() => setOpenDropdown("Find-us-black")}
      onMouseLeave={closeDropdown}
    >
      <button
        style={{ ...styles.navButton, fontSize: "1rem" }}
        onClick={() => toggleDropdown("Find-us-black")}
      >
        Find us <FontAwesomeIcon icon={faAngleDown} />
      </button>

      {openDropdown === "Find-us-black" && (
        <ul
          style={{
            ...styles.dropdownMenu,
            top: "100%",
            left: 0,
            minWidth: 220,
            backgroundColor: "#222", 
            
            color: "#fff",
            zIndex: 10000, 
          }}
        >
          {balckDropworn["Find-us"].items.map((item, idx) => (
            <li key={idx} style={{ ...styles.dropdownItem, color: "#fff" }}>
              <Link
                to={item.path}
                onClick={closeDropdown}
                style={{ color: "#fff", textDecoration: "none" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>

    <li className="black-li1">
      <Link to="/pages/English">
        <FontAwesomeIcon icon={faGlobe} /> English
      </Link>
    </li>
  </ul>
</div>

          
      {/* Main Navigation Bar */}
      <nav className="main-navbar">
        {/* Logo */}
        <Link to="/">
          <img src="/assets/idp-logo.svg" alt="Logo" className="logo" />
        </Link>

        {/* Desktop Navigation with Dropdowns */}
        <ul className="nav-links">
          {Object.entries(dropdownData).map(([key, items]) => (
            <li
              key={key}
              style={styles.navItem}
              onMouseEnter={() => setOpenDropdown(key)}
              onMouseLeave={closeDropdown}
            >
              <button
                style={styles.navButton}
                onClick={() => toggleDropdown(key)}
                aria-haspopup="true"
                aria-expanded={openDropdown === key}
              >
                {key
                  .split("-")
                  .map((w) => w[0].toUpperCase() + w.slice(1))
                  .join(" ")}{" "}
                <FontAwesomeIcon icon={faAngleDown} />
              </button>

              {openDropdown === key && (
                <ul style={styles.dropdownMenu} ref={dropdownRef}>
                  {items.items.map((item, idx) => (
                    <li
                      key={idx}
                      style={styles.dropdownItem}
                      onMouseEnter={() => setOpenSecondLevel(item.label)}
                      onMouseLeave={() => setOpenSecondLevel(null)}
                    >
                      <Link
                        to={item.path}
                        onClick={closeDropdown}
                        style={{ color: "#161111ff", textDecoration: "none" }}
                      >
                        {item.label}
                      </Link>

                      {submenuData[item.label] && openSecondLevel === item.label && (
                        <ul style={{
                          ...styles.secondLevelMenu,
                          height: dropdownHeight ? dropdownHeight : styles.secondLevelMenu.height,
                        }}>
                          {submenuData[item.label].map((sub, sIdx) => (
                            <li key={sIdx} style={styles.dropdownItem}>
                              <Link
                                to={sub.path}
                                onClick={closeDropdown}
                                style={{ color: "#161111ff", textDecoration: "none" }}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="nav-buttons">
          <Link to="/pages/white-link/Avail">
            <button className="login-btn">Avail Free counselling</button>
          </Link>
          <Link to="/pages/white-link/SignIN">
            <button className="signup-btn">Sign in</button>
          </Link>
        </div>

        {/* Right Icons */}
        <div className="right-icons">
          <Link to="#" className="icon-btn heart">
            <FontAwesomeIcon icon={faRegularHeart} />
          </Link>
          <Link to="#" className="icon-btn account">
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
                  {key
                    .split("-")
                    .map((w) => w[0].toUpperCase() + w.slice(1))
                    .join(" ")}
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

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </nav>
    </>
  );
};

export default Navbar;

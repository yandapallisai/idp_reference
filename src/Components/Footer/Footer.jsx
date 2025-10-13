
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import './Footer.css'; // Import external CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h2>About IDP</h2>
          <ul>
            <li><Link to="/">About us</Link></li>
            <li><Link to="/study-abroad/why-study-abroad">Study abroad counselling</Link></li>
            <li><Link to="/coming-soon">IDP Careers</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Useful Links</h2>
          <ul>
            <li><Link to="/pages/white-link/Find1">Find a course</Link></li>
            <li><Link to="/coming-soon">Find scholarships</Link></li>
            <li><Link to="/pages/white-link/StudyDestinations/StudyDs">Find a university</Link></li>
            <li><Link to="/coming-soon">Ask IDP</Link></li>
            <li><Link to="/coming-soon">Cost of living</Link></li>
            <li><Link to="/coming-soon">Statement of Purpose</Link></li>
            <li><Link to="/coming-soon">Letter of Recommendation</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>IELTS</h2>
          <ul>
            <li><Link to="/pages/white-link/IELTS">What is IELTS?</Link></li>
            <li><Link to="/pages/white-link/IELTS">Why take IELTS with IDP?</Link></li>
            <li><Link to="/pages/white-link/IELTS">IELTS Preparation</Link></li>
            <li><Link to="/pages/white-link/IELTS">Book a test</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h2>Connect with IDP</h2>
          <ul>
            <li><Link to="/pages/Events">Events</Link></li>
            <li><Link to="/coming-soon">Corporate responsibility</Link></li>
            <li><Link to="/pages/black-link/Find/Find">Our offices</Link></li>
            <li><Link to="/coming-soon">Customer Grievances</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-row">
        <ul>
          <li><Link to="/coming-soon"><FontAwesomeIcon icon={faFacebook} /></Link></li>
          <li><Link to="/coming-soon"><FontAwesomeIcon icon={faTwitter} /></Link></li>
          <li><Link to="/coming-soon"><FontAwesomeIcon icon={faInstagram} /></Link></li>
          <li><Link to="/coming-soon"><FontAwesomeIcon icon={faLinkedin} /></Link></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>© 2023 IDP Education</p>
        <p>IELTS is jointly owned by IDP: IELTS Australia, British Council and Cambridge English.</p>
        <p>Cambridge English is part of Cambridge University Press & Assessment.</p>
      </div>
      <div className="footer-row">

        <ul>
          <li><Link to="/coming-soon">Investors</Link></li>
          <li><Link to="/coming-soon">Terms of use</Link></li>
          <li><Link to="/coming-soon">Privacy policy</Link></li>
          <li><Link to="/coming-soon">Diclaimer</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
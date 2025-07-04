import React from 'react';
import '../styles/Footer.css';

const Footer = () => (
  <footer className="footer-container">
    <div className="footer-content">
      <div className="footer-section">
        <h4>WHAT'S INCLUDED IN FAAS</h4>
        <ul>
          <li>Transactional Bookkeeping</li>
          <li>Controller Level Compliance & Reporting</li>
          <li>SIMPL – Cloud Software Platform</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>WHAT'S INCLUDED IN ADVISORY SERVICES</h4>
        <ul>
          <li>Financial Planning & Analysis</li>
          <li>Technical Accounting & Clean-Up</li>
          <li>CFO Advisory Support</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>INDUSTRIES WE SERVE</h4>
        <ul>
          <li>Software/SaaS</li>
          <li>Professional Services</li>
          <li>Marketplace eCommerce</li>
          <li>Health Tech/Services</li>
          <li>Investment Management Firms</li>
          <li>Nonprofits</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>CONTACT US</h4>
        <address>
          Consero Global LLC<br />
          1717 West 6th Street, Suite 100<br />
          Austin, TX 78703<br />
          866.588.0495
        </address>
      </div>
    </div>
  </footer>
);

export default Footer; 
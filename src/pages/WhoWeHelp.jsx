import React from 'react';
import'../styles/WhoWeHelp.css';

const WhoWeHelp = () => {
  return (
    <>
      <div className="who-we-help-container">
        <div className="who-we-help-content">
          {/* WHO WE HELP */}
          <div className="who-we-help-section">
            <h3>WHO WE HELP</h3>
            <p>
              For Investors, CEOs, and CFOs. We can provide clear, in-depth, and up-to-the-minute insight into your business, allowing you to spend less time on finances, and more time on the big picture.
            </p>
            <a href="#">
              Are you outgrowing your current finance & accounting software stack?
            </a>
          </div>
          {/* BY ROLE */}
          <div className="by-role">
            <h4>BY ROLE</h4>
            <a href="#">CEOs</a>
            <a href="#">CFOs</a>
            <a href="#">PE & VC Investors</a>
          </div>
          {/* BY INDUSTRY */}
          <div className="by-industry">
            <h4>BY INDUSTRY</h4>
            <div>FAAS For:</div>
            <a href="#">Software/SaaS</a>
            <a href="#">Professional Services</a>
            <a href="#">Marketplace eCommerce</a>
            <a href="#">Health Tech/Services</a>
            <a href="#">Investment Management Firms</a>
            <a href="#">Nonprofits</a>
          </div>
        </div>
      </div>
      <div className="whats-included-footer">
        <div className="whats-included-footer-content">
          <div>
            <h4>WHAT'S INCLUDED IN FAAS</h4>
            <ul>
              <li>Transactional Bookkeeping</li>
              <li>Controller Level Compliance & Reporting</li>
              <li>SIMPL – Cloud Software Platform</li>
            </ul>
          </div>
          <div>
            <h4>WHAT'S INCLUDED IN ADVISORY SERVICES</h4>
            <ul>
              <li>Financial Planning & Analysis</li>
              <li>Technical Accounting & Clean-Up</li>
              <li>CFO Advisory Support</li>
            </ul>
          </div>
          <div>
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
          <div>
            <h4>CONTACT US</h4>
            <div>Consero Global LLC</div>
            <div>1717 West 6th Street, Suite 100</div>
            <div>Austin, TX 78703</div>
            <div>866.588.0495</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeHelp;
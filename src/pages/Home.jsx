import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-hero">
      <div className="hero-overlay">
        <h2>FINANCE & ACCOUNTING SOLUTIONS FOR GROWTH STAGE CHALLENGES</h2>
        <h1>Financial clarity and efficiency made easy</h1>
        <div className="features-row">
          <div className="feature-col">
            <h3>Finance as a Service</h3>
            <div className="feature-underline" />
            <p>Cutting edge technology, processes, and people in a fully-managed solution to deliver precise financial visibility and improved operational scalability, plus a lower and more predictable cost structure.</p>
            <div className="feature-logo">   
            </div>
          </div>
          <div className="feature-col">
            <h3>Flex Finance</h3>
            <div className="feature-underline" />
            <p>Keep your existing technology and processes. We can manage the back-office F&A function from end-to-end process, including closing the books. When you need skilled talent, we can supplement your F&A team.</p>
            <div className="feature-logo-row">
              <span>QuickBooks</span>
              <span>Sage</span>
              <span>NetSuite</span>
              <span>Xero</span>
            </div>
          </div>
          <div className="feature-col">
            <h3>Advisory Services</h3>
            <div className="feature-underline" />
            <p>Expert advice and strategies to help you grow.<br />
              <ul>
                <li>FP&A and Reporting</li>
                <li>Technical Accounting & Clean-Up</li>
                <li>CFO Advisory Services</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="clients-section">
        <h2>Our Clients</h2>
        <div className="client-logos">
          <span className="client-logo">Base10</span>
          <span className="client-logo">recoveryone</span>
          <span className="client-logo">ok2charge</span>
          <span className="client-logo">findhelp</span>
          <span className="client-logo">Allied</span>
        </div>
      </div>
      <div className="who-we-serve-section">
        <h3>WHO WE SERVE</h3>
        <h2>Institutional investor-backed businesses achieve financial clarity and operational scalability.</h2>
        <p>Providing a modern approach to building your finance function with a blend of software and services to meet your needs.</p>
        <div className="serve-cards-row">
          <div className="serve-card">
            <h4>PE & VC Investors</h4>
            <p>Consero provides PE & VC backed companies with the rigor and sophistication of a Fortune 100 Finance & Accounting function.</p>
            <button>See How</button>
          </div>
          <div className="serve-card">
            <h4>CEOs</h4>
            <p>CEOs partnering with Consero have exponentially more time to focus on driving the strategy and growth of their business vs. tactical finance and accounting activities.</p>
            <button>See How</button>
          </div>
          <div className="serve-card">
            <h4>CFOs</h4>
            <p>CFOs value partnering with Consero because Consero's reliable and scalable back office affords significantly more time to partner with their CEO and investors on M&A and growth activities vs. tactical accounting tasks.</p>
            <button>See How</button>
          </div>
        </div>
      </div>
      <div className="info-section">
        <div className="info-img" />
        <div className="info-content">
          <h4>WHAT IS FINANCE AS A SERVICE?</h4>
       
          <div className="info-content-text">
          <p>Consero's Finance as a Service is disrupting the way businesses build and maintain their finance function. For over a decade, the expert team at Consero has refined processes and incorporated software to provide stakeholders with clear insight into company performance and guidance to identify opportunities that can improve performance.</p>
          <p>Through the combination of enterprise-level, industry-leading software and a dedicated team of experienced finance professionals, Consero delivers the services necessary to support your company's daily operations, accelerate growth, and prepare you for the future.</p>
          </div>
          <button className="cta-btn">See How We Manage the Back Office Financial Operations</button>
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
    </div>
  );
};

export default Home;
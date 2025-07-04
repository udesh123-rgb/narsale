import React from 'react';
import '../styles/Insights.css';
const allResources = [
  {
    type: 'Accounting Software',
    title: 'SIMPL® Demo: Upgraded UI + Tips from a Super User',
    date: 'June 30, 2025',
    description: "Consero's SIMPL® platform UI updates unite enterprise-grade reporting capabilities with a first-class user experience.",
    image: 'https://source.unsplash.com/random/350x200?finance,software',
  },
  {
    type: 'Events and Webinars',
    title: 'Nonprofit Financial Management: How to Prepare for Increased Oversight',
    date: 'June 18, 2025',
    description: "Transformation strategies to prepare for the new era of nonprofit financial management.",
    image: 'https://source.unsplash.com/random/350x200?webinar,meeting',
  },
  {
    type: 'Accounting Software',
    title: '6 ERP Implementation Best Practices + Considerations [2025 Webinar]',
    date: 'May 28, 2025',
    description: "A complete guide on how to select an ERP implementation partner, avoid common pitfalls, and plan a successful roll-out step-by-step.",
    image: 'https://source.unsplash.com/random/350x200?erp,accounting',
  },
];

const featuredResources = [
  {
    type: 'Accounting Software | Accounting Software',
    title: '9 Best QuickBooks Alternatives for Scaling Businesses [2025]',
    image: 'https://source.unsplash.com/random/500x300?quickbooks,accounting',
    large: true,
  },
  {
    type: 'Article | Reporting',
    title: 'Why is Accurate and Timely Financial Reporting Important for SaaS Companies?',
    image: 'https://source.unsplash.com/random/250x150?reporting,saas',
  },
  {
    type: 'Article | Finance as a Service',
    title: 'What is Finance as a Service? How it Works + Benefits of Outsourced Finance and Accounting',
    image: 'https://source.unsplash.com/random/250x150?finance,service',
  },
];

const Insights = () => (
  <>
    <div className="insights-bg">
      {/* Hero Section */}
      <div className="insights-hero">
        <div className="insights-hero-text">
          <h1>Insights</h1>
          <p>
            Stay informed and find the solution to your finance and accounting challenges with Consero's research, events and webinars, case studies, and more.
          </p>
        </div>
        <div className="insights-hero-img">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
            alt="Insights"
          />
        </div>
      </div>

      {/* All Resources Section */}
      <div className="insights-section">
        <h2 className="insights-section-title">All Resources</h2>
        <div className="insights-section-underline"></div>
        <div className="insights-filters">
          <input className="insights-search" type="text" placeholder="Search..." />
          <div className="insights-filter-buttons">
            <button>All</button>
            <button>Article</button>
            <button>Case Study</button>
            <button>CEO / CFO</button>
            <button>Events and Webinars</button>
            <button>Private Equity</button>
            <button>Video</button>
            <button>Video Testimonials</button>
            <button>Whitepaper</button>
          </div>
        </div>
        <div className="insights-resources">
          {allResources.map((res, idx) => (
            <div key={idx} className="insights-resource-card">
              <img src={res.image} alt={res.title} />
              <div className="insights-resource-type">{res.type}</div>
              <h3>{res.title}</h3>
              <div className="insights-resource-date">
                <span role="img" aria-label="calendar">📅</span> {res.date}
              </div>
              <p>{res.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Resources Section */}
      <div className="insights-section">
        <h2 className="insights-section-title">Featured Resources</h2>
        <div className="insights-section-underline"></div>
        <div className="insights-featured">
          <div className="insights-featured-large">
            <img src={featuredResources[0].image} alt={featuredResources[0].title} />
            <div className="insights-featured-type">{featuredResources[0].type}</div>
            <h3>{featuredResources[0].title}</h3>
          </div>
          <div className="insights-featured-small">
            {featuredResources.slice(1).map((res, idx) => (
              <div key={idx} className="insights-featured-card">
                <img src={res.image} alt={res.title} />
                <div className="insights-featured-type">{res.type}</div>
                <h3>{res.title}</h3>
              </div>
            ))}
          </div>
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

export default Insights;
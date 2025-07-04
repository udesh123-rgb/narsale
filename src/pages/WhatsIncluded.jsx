import React from 'react';
import '../styles/WhatsIncluded.css';

const coreServices = [
  {
    icon: "📒",
    type: "CORE SERVICE",
    title: "Transactional Bookkeeping",
    description: "Manage your books without the cost of building and managing a full in-house finance department. From payroll and expenses to billing and reporting, we take care of it all so you can focus on your core business.",
  },
  {
    icon: "📊",
    type: "CORE SERVICE",
    title: "Controller Services",
    description: "Growth is exciting and often painful. Transactions tend to increase along with your growth. As part of our managed platform, you receive Controller Services which offers more than oversight of financial transactions and processing. We provide insights, timely and accurate financial reporting, and strategy management that guide you toward stable and scalable financial success.",
  },
];

const addOnServices = [
  {
    icon: "📒",
    type: "ADD-ON SERVICE",
    title: "Financial Planning & Analysis",
    description: "By knowing where you are today, you can better understand tomorrow. Our experienced financial leaders work with you to provide the financial insights, guidance, and oversight you need to make confident business decisions.",
  },
  {
    icon: "🤝",
    type: "ADD-ON SERVICE",
    title: "Strategic CFO Support",
    description: "As an add-on service to our managed Finance as a Service platform, you'll have access to high-level strategic CFO resources. As a CFO, you are most valuable when offering insight and guidance to the business. Whether you need budgeting and fundraising support, you'll get proven and trusted experts with our Strategic CFO Support to convert insights into specific action and focus on the big picture.",
  },
];

const blueCards = [
  {
    title: "For Investors",
    description: "Consero solves the most common portco challenges by clearing obstacles in finance and accounting and offering companies the ability to scale. With our cloud-based platform, you get a real-time, comprehensive view of your portcos business performance.",
  },
  {
    title: "For CEOs",
    description: "Know where you are and where you are going. By making finances easy to digest and insightful, we help you make better informed decisions so you can focus on driving your business forward.",
  },
  {
    title: "For CFOs",
    description: "Leverage our pre-built enterprise-grade software stack and reliable back office services in as little as 30 days. While we handle transactions and finance operations, you can focus on strategic initiatives and critical objectives.",
  },
];

const clientLogos = [
  { name: "dropoff", src: "https://via.placeholder.com/100x40?text=dropoff" },
  { name: "IDERA", src: "https://via.placeholder.com/100x40?text=IDERA" },
  { name: "insurity", src: "https://via.placeholder.com/100x40?text=insurity" },
  { name: "MEDFIRST", src: "https://via.placeholder.com/100x40?text=MEDFIRST" },
  { name: "patientslikeme", src: "https://via.placeholder.com/100x40?text=patientslikeme" },
];

const WhatsIncluded = () => (
  <div className="whats-included-bg">
    {/* 1. Core Service Cards */}
    <div className="whats-included-section">
      <div className="whats-included-flex">
        {coreServices.map((service, idx) => (
          <div key={idx} className="whats-included-card">
            <div className="icon">{service.icon}</div>
            <div className="type">{service.type}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </div>

    {/* 2. Blue Cards Section */}
    <div className="whats-included-blue-section">
      <div className="whats-included-blue-header">
        <div className="subtitle">WHATEVER YOUR ROLE, CONSERO CAN HELP</div>
        <h1>Consero Delivers Financial Control and Insight to Fuel Growth</h1>
        <div className="underline"></div>
      </div>
      <div className="whats-included-flex">
        {blueCards.map((card, idx) => (
          <div key={idx} className="whats-included-blue-card">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </div>

    {/* 3. Finance as a Service is the Solution */}
    <div className="whats-included-faas-section">
      <div className="whats-included-faas-content">
        <div className="faas-text">
          <div style={{ color: "#666", fontSize: 16, marginBottom: 8 }}>
            DISRUPTING THE TRADITIONAL FINANCE FUNCTION
          </div>
          <h1 className="faas-title">
            Finance as a Service is the Solution
          </h1>
        </div>
        <div className="faas-img">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Finance as a Service" />
        </div>
      </div>
      <div className="whats-included-clients">
        {clientLogos.map((logo, idx) => (
          <img key={idx} src={logo.src} alt={logo.name} />
        ))}
      </div>
    </div>

    {/* 4. Add-On Service Cards */}
    <div className="whats-included-section">
      <div className="whats-included-flex">
        {addOnServices.map((service, idx) => (
          <div key={idx} className="whats-included-card">
            <div className="icon">{service.icon}</div>
            <div className="type">{service.type}</div>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button>Learn More</button>
          </div>
        ))}
      </div>
    </div>

    {/* 5. Footer Section */}
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

export default WhatsIncluded;
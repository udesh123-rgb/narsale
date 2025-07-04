import React from 'react';
import '../styles/AboutUs.css';

const AboutUs = () => {
  return (
    <>
      <div className="aboutus-page">
        <div className="aboutus-main-content">
          {/* Hero Section */}
          <section className="aboutus-hero">
            <div className="aboutus-hero-content">
              <div className="aboutus-hero-title-group">
                <div className="aboutus-hero-subtitle">WHAT WE OFFER</div>
                <h1 className="aboutus-hero-title">Explore Consero's Financial Services</h1>
                <div className="aboutus-hero-underline" />
              </div>
              <div className="aboutus-hero-services">
                <div>
                  <button className="aboutus-service-btn">Outsourced Bookkeeping</button>
                  <button className="aboutus-service-btn">Controller Services</button>
                </div>
                <div>
                  <button className="aboutus-service-btn">Financial Planning</button>
                  <button className="aboutus-service-btn">Strategic CFO Support</button>
                </div>
              </div>
            </div>
          </section>

          {/* Quote Section */}
          <section className="aboutus-quote-section">
            <div className="aboutus-quote-bg">
              <div className="aboutus-quote-text">
                <h2>With Consero's Finance as a Service, you gain financial clarity, operational efficiency, and the power to scale, effortlessly.</h2>
                <button className="aboutus-cta-btn">Meet with Us</button>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="aboutus-mission-vision-section">
            <div className="aboutus-mission-vision-row">
              <div className="aboutus-mission">
                <h3>Our Mission</h3>
                <p>To disrupt the way businesses achieve the financial clarity and scalability needed to drive them forward.</p>
              </div>
              <div className="aboutus-vision">
                <h3>Our Vision</h3>
                <p>To make the traditional in-house finance and accounting function as obsolete as the old school flip phone.</p>
              </div>
            </div>
          </section>

          {/* Promise Section */}
          <section className="aboutus-promise-section">
            <div className="aboutus-promise-row">
              <img className="aboutus-promise-img" src="https://source.unsplash.com/random/600x300?business,meeting" alt="Team meeting" />
              <div className="aboutus-promise-content">
                <h2>Our Promise to You</h2>
                <div className="aboutus-promise-underline" />
                <ul>
                  <li>Unify and clarify your numbers and processes.</li>
                  <li>Reduce the time you spend on finances by 90%.</li>
                  <li>Provide a solution that scales at the speed of your business.</li>
                  <li>Enable growth as a driving force behind your business's momentum and profitability.</li>
                  <li>To do all of the above within 90 days, <strong>guaranteed</strong>.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section className="aboutus-about-section">
            <div className="aboutus-about-row">
              <div className="aboutus-about-text">
                <div className="aboutus-about-subtitle">WHO WE ARE</div>
                <h1>About Consero Global</h1>
                <div className="aboutus-about-underline" />
                <p>Consero was founded in early 2006 with the goal of providing small and mid-market companies with a superior alternative to building and maintaining an in-house finance function.</p>
                <p>Since then we have expanded our solution offering strategy and funding services, operational financial services, financial controller services, bookkeeping and administration services and debuting our proprietary cloud-based software platform, SIMPL.</p>
              </div>
              <img className="aboutus-about-img" src="https://source.unsplash.com/random/400x300?office,team" alt="About Consero" />
            </div>
          </section>

          {/* Awards Section */}
          <section className="aboutus-awards-section">
            <div className="aboutus-awards-row">
              <div className="aboutus-awards-text">
                <h4>Awards & Accolades</h4>
                <p>We're fortunate to have our hard work recognized by the following organizations:</p>
              </div>
              <img src="https://source.unsplash.com/random/100x100?award,medal" alt="Award 1" className="aboutus-award-img" />
              <img src="https://source.unsplash.com/random/100x100?growth,success" alt="Award 2" className="aboutus-award-img" />
              <img src="https://source.unsplash.com/random/100x100?badge,achievement" alt="Award 3" className="aboutus-award-img" />
              <img src="https://source.unsplash.com/random/100x100?trophy,win" alt="Award 4" className="aboutus-award-img" />
            </div>
          </section>
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
    </>
  );
};

export default AboutUs;
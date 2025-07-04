import '../styles/MainNavbar.css';
import { Link } from 'react-router-dom';


function MainNavbar() {
  return (
    <nav className="main-navbar">
      <div className="logo-section">
      <img src="/Logo.JPG" alt="Company Logo" style={{ height: '100px' }} />
        <span className="logo-text">
          <strong>ABOVE AND AHEAD ADVISORY PVT LTD</strong>
          <br />
          <span className="tagline">Financial clarity and efficiency made easy</span>
        </span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/who-we-help">Who We Help</Link></li>
        <li><Link to="/whats-included">What's Included</Link></li>
        <li><Link to="/insights">Insights</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
      </ul>
      <button className="connect-btn">Connect With Us</button>
    </nav>
  );
}

export default MainNavbar;

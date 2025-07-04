import { FaLinkedin, FaYoutube, FaFacebook, FaPhone, FaCalculator, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/TopBar.css';

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <FaLinkedin />
        <FaYoutube />
        <FaFacebook />
      </div>
      <div className="top-bar-right">
        <span><FaPhone /> 866.588.0495</span>
        <a href="/login"><FaExternalLinkAlt /> Client Login</a>
        <a href="/roi-calculator" className="roi-btn"><FaCalculator /> Free Outsourcing ROI Calculator</a>
      </div>
    </div>
  );
}

export default TopBar;
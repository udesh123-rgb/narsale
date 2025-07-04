import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import WhoWeHelp from './pages/WhoWeHelp';
import WhatsIncluded from './pages/WhatsIncluded';
import Insights from './pages/Insights';
import AboutUs from './pages/AboutUs';
import TopBar from './components/TopBar';
import MainNavbar from './components/MainNavbar';

function App() {
  return (
    <Router>
      <TopBar />
      <MainNavbar />
      <div style={{ padding: '2rem', minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-help" element={<WhoWeHelp />} />
          <Route path="/whats-included" element={<WhatsIncluded />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
const Header = () => {
  return (
    <div className="intro-section">
      <div className="intro-section-left">
        <h2>Unveiling Our World Through</h2>
        <h1>
          <span> Satellite Technology</span>
        </h1>
        <p>
          Satellite technology is a self-contained communication system that can
          receive and retransmit signals from Earth. Satellites are used for
          many applications, including: Communication, Earth observation,
          Navigation, Astronomy
        </p>
        <Link to="/about">
          <button className="intro-section-button">Explore Now</button>
        </Link>
      </div>

      <div className="intro-section-right">
        <img
          src="https://img.freepik.com/premium-vector/gps-satellite-flat-vector-isometric-illustration-wireless-satellite-technology-world-global-net-used-workflow-layout-game-diagram-number-options-web-design-infographics_589019-793.jpg?w=2000"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;

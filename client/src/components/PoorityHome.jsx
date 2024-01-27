import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
const PoorityHome = () => {
  return (
    <div className="intro-section">
      <div className="intro-section-right">
        <img
          src="https://2.bp.blogspot.com/-0M15v_AVAao/UBuLMM69__I/AAAAAAAAACM/Ws_oDChJcAg/s1600/Poor-Children.jpg"
          alt=""
        />
      </div>
      <div className="intro-section-left">
        <h2>Satellite Technology Revolutionizes Global Poverty Monitoring</h2>
        <p>
          Satellite technology transforms poverty monitoring. By analyzing
          satellite imagery, we gain insights into poverty-stricken areas,
          allowing for targeted interventions and progress tracking. This
          data-driven approach enables effective resource allocation and
          informed decision-making to combat poverty globally.
        </p>
        <Link to="/about">
          <button className="intro-section-button">Check Now</button>
        </Link>
      </div>
    </div>
  );
};

export default PoorityHome;

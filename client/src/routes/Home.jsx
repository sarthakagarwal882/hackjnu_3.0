import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SatelliteWork from "../components/SatelliteWork";
 
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SatelliteWork />
      <Footer /> 
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SatelliteWork from "../components/SatelliteWork";
import PoorityHome from "../components/PoorityHome";
 
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SatelliteWork />
      <PoorityHome/>
      <Footer /> 
    </div>
  );
};

export default Home;

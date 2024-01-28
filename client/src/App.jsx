import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ContactRoute from "./routes/ContactRoute";
import CheckPovertyRoute from "./routes/CheckPovertyRoute";
import DonateSection from "./routes/DonateSection";
import About from "./routes/About";
function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactRoute />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/donate" element={<DonateSection />} />
          <Route path="/check-poverty" element={<CheckPovertyRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;

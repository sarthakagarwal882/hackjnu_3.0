import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ContactRoute from "./routes/ContactRoute";
import DonateSection from "./routes/DonateSection";
import About from "./routes/About";

function App() {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactRoute />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<DonateSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;

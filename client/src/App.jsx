import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ContactRoute from "./routes/ContactRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

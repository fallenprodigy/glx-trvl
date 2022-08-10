import React from "react";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Pricing from "./routes/Pricing";
import Training from "./routes/Training";
import Contact from "./routes/Contact";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;

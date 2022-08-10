import React from "react";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Pricing from "./routes/Pricing";
import Training from "./routes/Training";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </>
  );
};

export default App;

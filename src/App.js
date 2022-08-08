import React from "react";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import Pricing from "./routes/Pricing";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
};

export default App;

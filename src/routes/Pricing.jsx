import React from "react";

import Navbar from "../componenets/Navbar";
import HeroImage from "../componenets/HeroImage";
import PricingCards from "../componenets/Pricing";
import Footer from "../componenets/Footer";

const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage />
      <PricingCards />
      <Footer />
    </div>
  );
};

export default Pricing;

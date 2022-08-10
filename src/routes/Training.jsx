import React from "react";
import Navbar from "../componenets/Navbar";
import HeroImage from "../componenets/HeroImage";
import TrainingSection from "../componenets/Training";
import Footer from "../componenets/Footer";

const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="TRAINING." text="Pre-Flight & in-Flight Training." />
      <TrainingSection />
      <Footer />
    </div>
  );
};

export default Training;

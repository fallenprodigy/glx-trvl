import React from "react";
import Navbar from "../componenets/Navbar";
import HeroImage from "../componenets/HeroImage";
import Form from "../componenets/Form";
import Footer from "../componenets/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading="CONTACT" text="Contact GLX Travel" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;

import React from "react";
import "./Training.css";
import { Link } from "react-router-dom";

import Pod from "../assets/pod.jpg";
import Moon from "../assets/moon.jpg";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>
          Thorough training is a necessity when traveling to space. We offer all
          inclusive training for pre-flight and in-flight scenarios.
        </p>
        <Link to="/contact" className="btn">
          Contact
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img className="img" src={Moon} alt="" />
          </div>
          <div className="image-stack bottom">
            <img className="img" src={Pod} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;

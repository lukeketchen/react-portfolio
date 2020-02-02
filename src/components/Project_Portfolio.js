import React from "react";
import websiteImage from "../assets/images/dotcom.gif";

const Project_Portfolio = () => (
  <div className="post">
    <a href="#" rel="noopener noreferrer">
      <img src={websiteImage} alt="post" />
    </a>
    <h5>This Portfolio Website</h5>
    <div className="icondiv">
      <a href="#" rel="noopener noreferrer">
        <i className="fas fa-desktop"></i>
      </a>
      <a
        href="https://github.com/lukeketchen/react-portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
    </div>
  </div>
);

export default Project_Portfolio;

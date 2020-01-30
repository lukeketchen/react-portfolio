import React from "react";
import profilePic from "../assets/images/profile_pic.jpg";

const Header = () => (
  <header id="header">
    <h2>Luke Ketchen</h2>
    <img src={profilePic} alt="Profile Pic" />
    <h3>React Developer</h3>
    <div>
      <h4>
        <i className="fas fa-location-arrow"></i> <br />
        Hoppers Crossing, Vic
      </h4>
      <h4>
        <i className="fas fa-envelope"></i> <br />
        <a href="mailto:lukeketchen@gmail.com" target="_top">
          lukeketchen@gmail.com
        </a>
      </h4>
    </div>
    <div className="icondiv" id="icondiv">
      <a
        href="https://github.com/lukeketchen"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.instagram.com/luke.ketchen.photography"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/luke-ketchen-706882107"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </a>
    </div>
    <nav>
      <a href="#projects">Portfolio</a>
      <a href="#about">About</a>
    </nav>
  </header>
);

export default Header;

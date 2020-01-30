import React from "react";
import profilePic from "../assets/images/profile_pic.jpg";

const Header = () => (
  <header>
    <h1>Luke Ketchen</h1>
    <img src={profilePic} alt="Profile Pic" />
    <h2>React Developer</h2>
    <h3>
      <i className="fas fa-location-arrow"></i> <br />
      Hoppers Crossing, Vic
    </h3>
    <h3>
      <i className="fas fa-envelope"></i> <br />
      <a href="mailto:lukeketchen@gmail.com" target="_top">
        lukeketchen@gmail.com
      </a>
    </h3>
    <div className="icondiv">
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

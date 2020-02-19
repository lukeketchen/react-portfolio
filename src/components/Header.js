import React from "react";
import profilePic from "../assets/images/profile_pic.jpg";

const Header = () => (
  <header id="header">
    <h2>Luke Ketchen</h2>
    <img src={profilePic} alt="Profile Pic" />
    <h2 className='text-center'>React Developer</h2>
    <div className="text-center">
      <h3>
        <a
          href="https://drive.google.com/open?id=15EoQXKIaFux3-tfb9Ur6nGhh7R8Dt3aGlBcYt0zz3LY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-file hover">
            <br />
            <h3>Resume</h3>
          </i>
        </a>
      </h3>
      <h3>
        <i className="fas fa-location-arrow"></i> <br />
        Hoppers Crossing, Vic
      </h3>
      <h3>
        <i className="fas fa-envelope"></i> <br />
        <a href="mailto:lukeketchen@gmail.com" target="_top" className='text-grey'>
          lukeketchen@gmail.com
        </a>
      </h3>
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
      <h2><a href="#projects">Portfolio</a></h2>
      <h2><a href="#about">About</a></h2>
    </nav>
  </header>
);

export default Header;

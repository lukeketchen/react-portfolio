import React from "react";
import { NavLink } from "react-router-dom";
import profilePic from "../assets/images/profile_pic.jpg";

const Header = () => (
  <header>
    <h1>Luke Ketchen</h1>
    <img src={profilePic} alt="Profile Pic" />
    <h2>React Developer</h2>
    <h3>
      <i class="fas fa-location-arrow"></i> <br />
      Hoppers Crossing, Vic
    </h3>
    <div className="icondiv">
      <a href="https://github.com/lukeketchen" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a
        href="https://www.instagram.com/luke.ketchen.photography"
        target="_blank"
      >
        <i class="fab fa-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/luke-ketchen-706882107"
        target="_blank"
      >
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
    <nav>
      <NavLink exact to="/" activeClassName="is-active">
        Home
      </NavLink>
      <a href="#projects">Projects</a>
      <a href="#about">About</a>
    </nav>
  </header>
);

export default Header;

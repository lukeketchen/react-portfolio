import React from "react";
import { NavLink } from "react-router-dom";
import profilePic from "../assets/images/profile_pic.jpg";

const Header = () => (
  <header>
    <h1>Luke Ketchen</h1>
    <img src={profilePic} alt="Profile Pic" />
    <h2>React Developer</h2>
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

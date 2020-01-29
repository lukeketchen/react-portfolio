import React from "react";
import About from "./About";
import Projects from "./Projects";

const MainPage = () => (
  <div className="mainpage" id="projects">
    <h2> Welcome to my</h2>
    <h1>Portfolio</h1>
    <Projects />
    <About />
  </div>
);

export default MainPage;

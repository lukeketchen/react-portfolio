import React from "react";
import About from "./About";
import Projects from "./Projects";

const MainPage = () => (
  <div className="mainpage">
    <h2> Welcome to Luke Ketchen's</h2>
    <h1>Portfolio</h1>
    <Projects />
    <About />
  </div>
);

export default MainPage;

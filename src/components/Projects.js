import React from "react";
import ProjectPost from "./ProjectPost";
import ProjectCountdown from "./ProjectCountdown";
import ProjectPortfolio from "./ProjectPortfolio";

const Projects = () => (
  <div className="projects">
    <div className="col1">
      <ProjectPortfolio />
      <ProjectPost />
    </div>
    <div className="mid">
      <div className="midtext">
        <h4>Most Recent</h4>
      </div>
      <div className="midline"></div>
    </div>
    <div className="col2">
      <ProjectCountdown />
    </div>
  </div>
);

export default Projects;

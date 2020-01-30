import React from "react";
import ProjectPost from "./ProjectPost";
import ProjectCountdown from "./ProjectCountdown";

const Projects = () => (
  <div className="projects">
    <div className="col1">
      <ProjectPost />
    </div>
    <div className="mid"> </div>
    <div className="col2">
      <ProjectCountdown />
    </div>
  </div>
);

export default Projects;

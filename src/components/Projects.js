import React from "react";
import ProjectPost from "./ProjectPost";

const Projects = () => (
  <div className="projects">
    <div className="col1">
      <ProjectPost />
      <ProjectPost />
    </div>
    <div className="mid"> </div>
    <div className="col2">
      <ProjectPost />
      <ProjectPost />
    </div>
  </div>
);

export default Projects;

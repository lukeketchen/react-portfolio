import React from "react";

const ProjectPost = ({project}) => (
  <div className="post">
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={project.thumbnail} alt="post" />
    </a>
    <h2 className='text-gold'>{project.title}</h2>
    <h2>{project.stack}</h2>
    <div className="icondiv">
      <a
        href={project.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-desktop"></i>
      </a>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
    </div>
  </div>
  );
export default ProjectPost;

import React from "react";
import websiteImage from "../assets/images/website.gif";

const ProjectPost = () => (
  <div className="post">
    <a
      href="https://github.com/lukeketchen/project_reactjs_farm_fencing_website"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <img src={websiteImage} alt="post" />
    </a>
    <h1>Farm Fencing website</h1>

    <div className="icondiv">
      <a
        href="https://quirky-keller-14bec9.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-desktop"></i>
      </a>
      <a
        href="https://github.com/lukeketchen/project_reactjs_farm_fencing_website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
    </div>
  </div>
);

export default ProjectPost;

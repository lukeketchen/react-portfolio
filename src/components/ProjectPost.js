import React from "react";
import websiteImage from "../img/website1.jpg";

const ProjectPost = () => (
  <div className="post">
    <h1>SingleProject</h1>
    <img src={websiteImage} alt="post" />
    <p>Text about project here. I made something really cool. Check it out.</p>
    <button>Read More</button>
  </div>
);

export default ProjectPost;

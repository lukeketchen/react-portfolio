import React from "react";
import countdownTimerImage from "../assets/images/React App.gif";

const ProjectCountdown = () => (
  <div className="post">
    <a
      href="https://github.com/lukeketchen/project_reactjs_countdown-timer"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={countdownTimerImage} alt="post" />
    </a>
    <h5>Countdown Timer</h5>

    <div className="icondiv">
      <a
        href="https://hardcore-almeida-e68dfc.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fas fa-desktop"></i>
      </a>
      <a
        href="https://github.com/lukeketchen/project_reactjs_countdown-timer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github"></i>
      </a>
    </div>
  </div>
);

export default ProjectCountdown;

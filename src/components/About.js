import React from "react";
import PhotograoherPic from "../assets/images/photograoherPic.jpg";

const About = () => (
  <div className="about" id="about">
    <div className="aboutdiv">
      <h2>Thanks for checking out my portfolio</h2>
      <h1>About Me</h1>
      <h3>I love coding, I love photography and I love flying my drone</h3>
      <div className="abouttext">
        <img src={PhotograoherPic} alt="Photographer" />
        <h4>Short Version -</h4>
        <div className="aboutfeatures">
          <div className="features">
            <i className="fas fa-bolt"></i>
            <h5 className="captext">
              <strong>2004 - Current</strong>
              <br />
              Electrician
            </h5>
          </div>
          <div className="features">
            <i className="fas fa-university"></i>
            <h5 className="captext">
              <strong>2015 - 2017</strong> <br />
              Federation University Ballarat, Computer Games and Digital Media
            </h5>
          </div>
          <div className="features">
            <i className="fas fa-plane"></i>
            <h5 className="captext">Licenced Drone Pilot</h5>
          </div>
          <div className="features">
            <i className="fas fa-camera"></i>
            <h5 className="captext">Photography</h5>
          </div>
          <div className="features">
            <i className="fas fa-running"></i>
            <h5 className="captext">Running</h5>
          </div>
          <div className="features">
            <i className="fas fa-gamepad"></i>
            <h5 className="captext">Gamming</h5>
          </div>
        </div>
        <div className="longtext">
          <h4>Long Version -</h4>
          <p>Hi,</p>
          <p>
            A few things about me. I started work when I was 15 as an
            electrician. I knew I wanted to get into computers but I didn’t know
            what I wanted to do. Fast forward many years and I had accomplished
            a lot as an electrician working in many different fields but felt I
            wasn’t being challenged enough and I was not passionate about
            electrical work.
          </p>
          <p>
            After working for a terrible company, I had finally had enough. I
            signed up for “Computer Games and Digital Media” at Federation
            University in Ballarat and had my first class two weeks later.
          </p>
          <p>
            Once I started I knew this was what I was meant to do and fell in
            love with coding. In my first year, I got an invitation to the
            Golden Key Society for my high grades. A couple of fellow mature age
            students and I found ourselves completing other projects out of
            school work. I could not complete my degree because of financial
            reasons.
          </p>
          <p>
            I went back to full time electrical work but I still had a passion
            for coding and completed some websites for customers after hours. I
            also got into photography and video editing. I taught myself how to
            take really good photos (
            <a
              href="https://www.instagram.com/luke.ketchen.photography"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://lukekphotos.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-desktop"></i>
            </a>
            ) and also taught myself React.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default About;

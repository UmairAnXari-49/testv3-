import React from "react";
import "./AboutSection.css";
import githubIcon from "../../assets/icons8-github.svg";
import linkedinIcon from "../../assets/icons8-linkedin.svg";

function AboutSection() {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="background-title">ABOUT ME</div>
        <div className="about-content">
          <h1 className="title-about">About me</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
            fermentum odio eu feugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras
            fermentum odio eu feugiat. Eget nulla facilisi etiam dignissim.
            Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Ut
            sem nulla pharetra diam sit amet nisl suscipit. Egestas integer eget
            aliquet nibh praesent.
          </p>
        </div>
        <a
          href="https://github.com/TereziaPetrovicova"
          target="_blank"
          className="social-button github"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com/in/ter%C3%A9zia-petrovi%C4%8Dov%C3%A1-a767561b0/"
          target="_blank"
          className="social-button linkedin"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
}

export default AboutSection;

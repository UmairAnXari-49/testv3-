import React from "react";
import "./SkillsSection.css";
import jsLogo from "../../assets/javascript.svg";
import tsLogo from "../../assets/typescript-icon.svg";
import htmlLogo from "../../assets/html-5.svg";
import cssLogo from "../../assets/css-3.svg";
import reactLogo from "../../assets/react.svg";
import tailwindLogo from "../../assets/tailwindcss-icon.svg";
import nodejsLogo from "../../assets/nodejs.svg";
import expressLogo from "../../assets/express.svg";
import postgresqlLogo from "../../assets/postgresql.svg";
import npmLogo from "../../assets/npm.svg";
import dockerLogo from "../../assets/docker-icon.svg";

function SkillsSection() {
  const logos = [
    jsLogo,
    tsLogo,
    htmlLogo,
    cssLogo,
    reactLogo,
    tailwindLogo,
    nodejsLogo,
    expressLogo,
    npmLogo,
    dockerLogo,
    postgresqlLogo,
  ];

  return (
    <div className="skills-section" id="skills">
      <div className="background-title">SKILLS</div>
      <h1 className="skills-title">Skills</h1>
      <p>Technologies I have used in my projects</p>
      <div className="skills-container">
        {logos.map((logo, index) => (
          <div className="neumorphic-button" key={index}>
            <img src={logo} alt="" className="skill-logo" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsSection;

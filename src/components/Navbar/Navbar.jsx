import React from "react";
import "./Navbar.css";
import logoSvg from "../../assets/logo.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logoSvg} alt="Logo" />
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
      </div>
    </nav>
  );
}

export default Navbar;

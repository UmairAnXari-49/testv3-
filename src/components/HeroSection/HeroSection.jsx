import React from "react";
import "./HeroSection.css";
import backgroundVideo from "../../assets/backgroundVideo.mp4";
import heroSvg from "../../assets/backgroundhero.svg";

const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

function HeroSection() {
  return (
    <div className="hero-section" id="home">
      <div className="video-container">
        <video autoPlay loop muted className="hero-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <img src={heroSvg} alt="Hero Background" className="hero-svg" />
      <button className="hero-button" onClick={scrollToContact}>
        <span className="button-text-one">Get in touch</span>
        <span className="button-text-two">Great!</span>
      </button>
    </div>
  );
}

export default HeroSection;

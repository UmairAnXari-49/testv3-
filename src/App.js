import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import AboutSection from "./components/AboutSection/AboutSection.jsx";
import SkillsSection from "./components/SkillsSection/SkillsSection.jsx";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection/ContactSection.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection id="home" />
      <AboutSection id="about" />
      <SkillsSection id="skills" />
      <ProjectsSection id="portfolio" />
      <ContactSection id="contact" />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";


import Footer from "../components/common/footer";
import NavBar from "../components/common/navbar";
import Intro from "./intro";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

const Homepage = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="home" />
      </div>
      <div className="intro-section">
        <Intro />
      </div>
      <div className="about-section">
        <About />
      </div>
      <div className="projects-section">
        <Projects />
      </div>
      <div className="contact-section">
        <Contact />
      </div>
      <div className="page-footer">
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Homepage;

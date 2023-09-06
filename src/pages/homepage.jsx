import React from "react";


import Footer from "../components/common/footer";
import NavBar from "../components/common/navbar";
import Intro from "./intro";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Links from "./links";

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
      <div className="links-section">
        <Links />
      </div>
      <div className="page-footer">
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Homepage;

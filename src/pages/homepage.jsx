import React from "react";


import Footer from "../components/common/footer";
import NavBar from "../components/common/navbar";
import Intro from "./intro";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Links from "./links";

import "./styles/homepage.css"

const Homepage = () => {
  return (
    <React.Fragment>
      <div id="page-content">
        <NavBar active="home" />
      </div>
      <div id="intro">
        <Intro />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <div id="links">
        <Links />
      </div>
      <div id="page-footer">
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Homepage;

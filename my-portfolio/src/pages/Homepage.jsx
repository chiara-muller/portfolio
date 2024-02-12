import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Links from "./components/Links";
import Footer from "./components/Footer";

export default function Homepage() {
  return (
    <React.Fragment>
      <div id="page-content">
        <Navbar active="home" />
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

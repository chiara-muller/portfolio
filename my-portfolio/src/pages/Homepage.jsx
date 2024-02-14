import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Homepage() {
  return (
    <React.Fragment>
      <section id="page-content">
        <Navbar />
      </section>
      <section id="intro">
        <Intro />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="page-footer">
        <Footer />
      </section>
    </React.Fragment>
  )
}

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
        <Navbar />
        <Intro />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </React.Fragment>
  )
}

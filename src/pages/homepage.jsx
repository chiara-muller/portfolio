import React from "react";

import Footer from "../components/common/footer";
import NavBar from "../components/common/navbar";
import Projects from "../components/projects/projects";

const Homepage = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <NavBar active="home" />
      </div>
      <div className="projects-container">
        <Projects />
      </div>
      <div className="page-footer">
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Homepage;

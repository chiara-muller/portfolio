import React from "react";

import "./styles/projects.css"

const Projects = () => {

  return (
    <React.Fragment>
      <h1 className="projects-title">projects</h1>
        <div className="main-container">
        <div className="projects-container-1">
          <div className="project-details">
            <p className="project-title">Trip It Easy</p>
            <p className="project-body">Details of the app</p>
          </div>
          <a href="https://tripiteasy.herokuapp.com/">
            <button className="project-button" > Visit</button>
          </a>
        </div>
        <div className="projects-container-2">
          <div className="project-details">
            <p className="project-title">Connect 4</p>
            <p className="project-body">Details of the app</p>
          </div>
          <a href="https://chiara-muller.github.io/connect4/">
            <button className="project-button">Visit</button>
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Projects;

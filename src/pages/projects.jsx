import React from "react";

import "./styles/projects.css"

const Projects = () => {

  return (
    <React.Fragment>
      <h1 className="title">projects.</h1>
        <div className="container">
        <div className="projects-container">
          <div className="projects-details">
            <p className="projects-title">Trip It Easy</p>
            <p className="projects-body">Details of the app</p>
          </div>
          <a href="https://tripiteasy.herokuapp.com/">
            <button className="projects-button" > Visit</button>
          </a>
        </div>
        <div className="projects-container">
          <div className="projects-details">
            <p className="projects-title">Connect 4</p>
            <p className="projects-body">Details of the app</p>
          </div>
          <a href="https://chiara-muller.github.io/connect4/">
            <button className="projects-button">Visit</button>
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Projects;

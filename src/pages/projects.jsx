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
            <p className="project-body">Can't decide where to eat tonight? Try Trip It Easy! </p>
          </div>
          <a href="https://tripiteasy.herokuapp.com/" target="_blank" rel="noreferrer">
            <button className="project-button" >
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555"><path fill="#fff" d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
            </button>
          </a>
        </div>
        <div className="projects-container-2">
          <div className="project-details">
            <p className="project-title">Connect 4</p>
            <p className="project-body">Red or yellow? Let's play!</p>
          </div>
          <a href="https://chiara-muller.github.io/connect4/" target="_blank" rel="noreferrer">
            <button className="project-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555"><path fill="#fff" d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
            </button>
          </a>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Projects;

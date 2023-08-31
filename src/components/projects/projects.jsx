import React from "react";

const Projects = () => {

  return (
    <React.Fragment>
      <h2 className="projects-title">Projects</h2>
      <ul className="projects-list">
        <li className="projects-list-item">
          <a href="https://tripiteasy.herokuapp.com/">Trip it easy</a>
        </li>
        <li className="projects-list-item">
          <a href="https://chiara-muller.github.io/connect4/">Connect 4</a>
        </li>
      </ul>
    </React.Fragment>
  )
}

export default Projects;

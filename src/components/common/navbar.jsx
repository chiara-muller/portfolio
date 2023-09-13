import React from "react";

// We could have used Link and it would have redirected us to another page
// import { Link } from "react-router-dom";



import "./styles/navBar.css";

const NavBar = (props) => {
  const {active} = props;

  return (
    <React.Fragment>
      <div className="nav-container">
        <div className="navbar">
          <div className="nav-background">
            <ul className="nav-list">
              <li
                className= {
                  active === "home"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                {/* <Link to="/">Home</Link> */}
                <a href="#intro">Home</a>
              </li>
              <li
                className= {
                  active === "about"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                {/* <Link to="/about">About</Link> */}
                <a href="#about">About</a>
              </li>
              <li
                className= {
                  active === "projects"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                {/* <Link to="/projects">Projects</Link> */}
                <a href="#projects">Projects</a>
              </li>
              <li
                className= {
                  active === "contact"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                {/* <Link to="/contact">Contact</Link> */}
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default NavBar;

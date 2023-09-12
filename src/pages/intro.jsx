import React from "react";
import Typewriter from "../Typewriter";

import "./styles/intro.css";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro">
        <div className="intro-title">
          <Typewriter
            segments={[
              { text: "Hi, I'm Chiara", delay: 100, fontSize: '64px', fontStyle:'bold'},
              { text: "Full-stack web developer!", delay: 100, fontSize: '42px'},
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default Intro;

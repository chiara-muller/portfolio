import React from "react";
import Typewriter from "../Typewriter";
import { useEffect, useState } from "react";

import "./styles/intro.css";

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);


const Intro = () => {

  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    async function makeRequest() {

      await delay(0);

      setImageSrc("20230209_LeWagon_0042_Fotor.jpg");
    }

    makeRequest();
  });

  return (
    <React.Fragment>
      <div className="intro-container">
          <div className="intro-title">
            <Typewriter
              segments={[
                { text: "Hi, I'm Chiara 👋", delay: 100, fontSize: '78px', fontStyle:'bold'},
                { text: "Full-stack web developer!", delay: 100, fontSize: '64px'},
              ]}
            />
          </div>
      </div>
        <div className="img-container">
          {imageSrc ? (
            <img src={imageSrc} alt="me" className="img-me" />
            ) : (
              <p></p>
              )}
        </div>
    </React.Fragment>
  )
}

export default Intro;

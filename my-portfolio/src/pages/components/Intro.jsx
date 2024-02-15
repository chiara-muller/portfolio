import React from "react";
import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelopeSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <IntroStyled id="intro">
      <div className="intro-container">
        <div className="left-side">
          <h1 className="intro-title">Web Developper</h1>
          <hr className="intro-hr"/>
          <div>
            <p className="intro-text">Front-end | Full-stack | UX-UI | React | Ruby on Rails</p>
          </div>
          <div>
            <a className="intro-links" href="https://www.linkedin.com/in/chiara-muller/"><FaLinkedin size={30}/></a>
            <a className="intro-links" href="https://github.com/chiara-muller"><FaGithubSquare size={30}/></a>
            <a className="intro-links" href="mailto:chiaramuller@hotmail.be"><FaEnvelopeSquare size={30}/></a>
          </div>
        </div>
        <div className="right-side">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Elizabeth_II_in_Berlin_2015_%28cropped%29.JPG/220px-Elizabeth_II_in_Berlin_2015_%28cropped%29.JPG" alt="chiara" />
        </div>
      </div>
    </IntroStyled>
  )
}

const IntroStyled = styled.div`

  margin: 0;
  display: flex;
	justify-content: center;
  align-items: center;
  /* height: 750px; */
  min-height: 100vh;

  .intro-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 900px;
  }

  .intro-title {
    color: black;
    font-size: 36px;
  }

  .intro-hr {
    border: 1px solid black;
    width: 30%;
    margin-left: 0;
  }

  .intro-text {
    color: black;
    font-size: 20px;
  }

  .intro-links {
    color: black;
    text-decoration: none;
    margin-right: 10px;
    display: inline-block;

    &:hover {
      transform: scale(1.40);
      transition: ease-out 0.4s;
    }
  }

  img {
    border-radius: 50%;
    width: 250px;
  }
`;

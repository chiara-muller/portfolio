import React from "react";
import styled from "styled-components";

export default function Intro() {
  return (
    <IntroStyled>
      <div className="intro-container">
        <h1 className="intro-title">CHIARA MULLER</h1>
        <hr />
        <p className="intro-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla interdum urna quis magna lobortis, eget finibus urna vestibulum. Sed nec ex non justo dictum venenatis. Fusce nec purus nec mauris posuere malesuada</p>
      </div>
    </IntroStyled>
  )
}

const IntroStyled = styled.div`

  margin: 0;
  display: flex;
	justify-content: center;
  align-items: center;
  height: 750px;

  &::before {
    content: "";
    background: url("images/intro-background.jpg") rgba(0, 0, 0, 0.7);
    background-position: center;
    background-size: cover;
    filter: brightness(70%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .intro-container {
    display: flex;
    flex-direction: column;
    width: 900px;
  }

  .intro-title {
    color: white;
  }

  hr {
    border: 1px solid white;
    width: 30%;
    margin-left: 0;
  }

  .intro-text {
    color: white;
  }
`;

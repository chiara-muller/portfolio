import React from 'react'
import styled from 'styled-components';

export default function About() {
  return (
    <AboutStyled>
      <div className="about-container">
        <h2 className="about-title">About</h2>
        <hr className="about-hr"/>
        <p className="about-text">
          Freshly graduated from Le Wagon Melbourne's Web Development bootcamp. 🚀
          My toolkit includes Ruby, Rails, JavaScript, and React, and I'm ready to dive into the world of coding.
          While my journey in tech began just last year, my passion for it has been burning bright ever since. I'm motivated, eager to learn, and excited to gain real-world experience in web development.
          Before this exciting tech adventure, I served up smiles in the hospitality and events industry. Those years taught me invaluable skills in teamwork, communication, and customer satisfaction – all of which I'm eager to bring to my new tech career. 💼🌟
          I'm comfortable taking on challenges in both full-stack and front-end development. I find my strengths in continuous learning, effective problem-solving, and the creation of user-friendly web experiences.
          Let's work together! 🌐💪
        </p>
      </div>
    </AboutStyled>
  )
}

const AboutStyled = styled.div`

  margin: 0;
  display: flex;
	justify-content: center;
  align-items: center;
  height: 750px;

  .about-container {
    display: flex;
    flex-direction: column;
    width: 900px;
  }

  .about-hr {
    border: 1px solid black;
    width: 30%;
    margin-left: 0;
  }

  .about-text {
    line-height: 30px;
    text-align: justify;
  }

`;

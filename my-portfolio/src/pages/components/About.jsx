import React from 'react'
import styled from 'styled-components';

export default function About() {
  return (
    <AboutStyled id="about">
      <div className="about-container">
        <h2 className="about-title">About</h2>
        <hr className="about-hr"/>
        <p className="about-text">
         Recently graduated from Le Wagon Melbourne's Web Development bootcamp, I'm equipped with skills in Ruby, Rails, JavaScript, and React, ready to embark on my coding journey.
         <br />
         Before diving into tech, I gained valuable experience in customer service and event management, honing teamwork, communication, and problem-solving skills.
         Additionally, my extensive travels have fostered a strong sense of autonomy and adaptability, enriching my problem-solving abilities and providing me with diverse cultural insights.
         This unique blend of experiences equips me to tackle challenges creatively and thrive in dynamic environments.
         <br />
         I am now excited to apply these skills to my new career in web development.
         Proficient in both front-end and full-stack development, I thrive on continuous learning and creating user-friendly web experiences.
         <br />
         Let's collaborate and build something amazing together!
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
  /* height: 750px; */
  min-height: 70vh;

  br {
    content: " ";
    display: block;
    margin: 20px 0;
  }

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

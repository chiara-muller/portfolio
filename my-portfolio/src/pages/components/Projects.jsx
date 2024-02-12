import React from 'react'
import styled from 'styled-components';
import Card from '../reusable-ui/Card';

export default function Projects() {
  return (
    <ProjectsStyled>
      <div className="projects-container">
        <h2>Projects</h2>
        <hr />
        <Card />
      </div>
    </ProjectsStyled>
  )
}

const ProjectsStyled = styled.div`

  margin: 0;
  display: flex;
	justify-content: center;
  align-items: center;
  height: 750px;

  .projects-container {
    display: flex;
    flex-direction: column;
    width: 900px;
  }

  hr {
    border: 1px solid black;
    width: 30%;
    margin-left: 0;
  }
`;

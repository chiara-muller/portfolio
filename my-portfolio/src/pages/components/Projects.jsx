import styled from 'styled-components';
import Card from '../reusable-ui/Card';
import { PROJECTS } from '../../data/projects';

export default function Projects() {

  const projects = PROJECTS

  const handleClick = (id, array) => {
    const obj = array.find((itemInArray) => itemInArray.id === id)
    const link = obj.link[1]
    window.open(link, "_blank")
  }

  return (
    <ProjectsStyled id="projects">
      <div className="projects-container">
        <h2>Projects</h2>
        <hr className="projects-hr"/>
        <div className="projects">
          {projects.map(({id, title, imageSource, description, stack, Icon, link}) => {
            return (
              <Card
                key={id}
                imageSource={imageSource}
                title={title}
                description={description}
                stack={stack}
                Icon={Icon}
                link={link}
                onClick={() => handleClick(id, projects)}
              />
            )
          })}
        </div>
      </div>
    </ProjectsStyled>
  )
}

const ProjectsStyled = styled.div`

  margin: 0;
  display: flex;
	justify-content: center;
  align-items: center;
  /* height: 750px; */
  min-height: 70vh;

  .projects-container {
    display: flex;
    flex-direction: column;
    width: 900px;
  }

  .projects-hr {
    border: 1px solid black;
    width: 30%;
    margin-left: 0;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 40px;
  }
`;

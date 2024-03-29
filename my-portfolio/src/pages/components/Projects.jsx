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
        <div className="projects-title">
          <h2>Projects</h2>
          <hr className="projects-hr"/>
        </div>
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
                className={"card"}
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
    margin-bottom: 30px;
  }

  .projects {
    display: grid;
    margin: auto;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 80px;
    grid-row-gap: 50px;
  }

  .card {
    &:hover {
    transform: scale(1.05);
    transition: ease-out 0.4s;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    }
  }

  @media all and (min-width: 768px) and (max-width: 1024px) {
    .projects-title{
      padding: 0 80px;
    }
    .projects {
    grid-column-gap: 20px;

    }
  }

  @media all and (min-width: 480px) and (max-width: 768px) {
    .projects-title{
      padding: 0 130px;
    }

    .projects {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
    }
  }

  @media all and (max-width: 480px) {
    .projects-title{
      padding: 0 40px;
    }

    .projects {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, 1fr);
    }
  }
`;

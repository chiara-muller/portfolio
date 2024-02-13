import styled from "styled-components";

export default function Card({id, title, imageSource, description, stack, Icon, className, link}) {
  return (
    <CardStyled key={id} className={className}>
      <div className="image-container">
        <img src={imageSource} alt="project" />
      </div>
      <h3>{title}</h3>
      <hr className="card-hr"/>
      <p>{description}</p>
      <div className="stack-container">
        <p className="stack">{stack[0]}</p>
        <p className="stack">{stack[1]}</p>
        <p className="stack">{stack[2]}</p>
      </div>
      <div className="link-container">
        <a className="link" target="_blank" rel="noreferrer" href={link[0]}>{Icon[0]}</a>
        <a className="link" target="_blank" rel="noreferrer" href={link[1]}>{Icon[1]}</a>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`

  /* border: 2px solid red; */
  width: 200px;
  height: 450px;
  display: flex;
  flex-direction: column;

  .image-container {
    margin: auto;
    margin-top: 30px;
    margin-bottom: 20px;
    max-width: 300px;
    max-height: 150px;
    min-height: 150px;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
  }

  .card-hr {
    width: 100%;
    border: none;
    border-top: 1px solid black;
  }

  .stack-container {
    display: flex;
    gap: 15px;
  }

  .link-container {
    display: flex;
    gap: 15px;
    .link {
      color: black;
    }
  }

`;

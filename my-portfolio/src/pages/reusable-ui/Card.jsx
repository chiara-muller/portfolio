import styled from "styled-components";

export default function Card({id, title, imageSource, description, stack, Icon, className, link, onClick}) {
  return (
    <CardStyled key={id} className={className}>
      <div className="image-title-container" onClick={onClick}>
        <div className="image-container">
          <img src={imageSource} alt="project" />
        </div>
        <h3>{title}</h3>
      </div>
      <hr className="card-hr"/>
      <div className="description-container">
        <p className="description">{description}</p>
      </div>
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

  width: 350px;
  height: 430px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  .image-title-container {
    cursor: pointer;
    padding: 0 35px;
  }

  .image-container {
    position: relative;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 20px;
    max-height: 150px;
    min-height: 150px;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: contain;
      }
  }


  .card-hr {
    width: 80%;
    border: none;
    border-top: 1px solid black;
  }

  .description-container {
    height: 70px;
    min-height: 70px;
    padding: 0 35px;
  }

  .stack-container {
    display: flex;
    gap: 15px;
    padding: 0 35px;
  }

  .link-container {
    display: flex;
    gap: 15px;
    .link {
      color: black;
    }
    padding: 0 35px;
  }

`;

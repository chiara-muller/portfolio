import styled from "styled-components";

export default function Card() {
  return (
    <CardStyled>
      <div className="image-container">
        <img src="" alt="" />
      </div>
      <h3>Project title</h3>
      <hr />
      <p>text</p>
      <div className="stack-container">
        <p className="stack">stack</p>
        <p className="stack">stack</p>
        <p className="stack">stack</p>
      </div>
      <div className="link-container">
        <a className="link" href="http://github.com">github</a>
        <a className="link" href="http://github.com">github</a>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`

  border: 2px solid red;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;

  .image-container {
    height: 220px;
  }

  hr {
    width: 100%;
    border: none;
    border-top: 1px solid black;
  }

  .stack-container {
    display: flex;
     .stack {
      padding-right: 15px;
     }
  }

  .link-container {
    display: flex;
      .link {
        padding-right: 15px;
      }
  }

`;

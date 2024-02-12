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
        <ul>
          <li>stack</li>
          <li>stack</li>
          <li>stack</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>github</li>
          <li>link</li>
        </ul>
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

  ul {
    display: flex;

    li {
      list-style: none;
    }
  }

`;

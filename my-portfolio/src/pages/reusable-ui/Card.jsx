import styled from "styled-components";

export default function Card() {
  return (
    <CardStyled>
      <img src="" alt="" />
      <div>title</div>
      <hr />
      <div>text</div>
      <div>stack</div>
      <div>links</div>
    </CardStyled>
  )
}

const CardStyled = styled.div`

  border: 2px solid red;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
`;

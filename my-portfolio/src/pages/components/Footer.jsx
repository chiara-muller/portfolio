import styled from "styled-components";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";

export default function Footer() {
  return (
      <FooterStyled>
        <div className="info-container">
          <HiOutlineMail />
          <p>chiaramuller@hotmail.be</p>
        </div>
        <div className="dot-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="info-container">
          <FiPhone />
          <p>+32 (0) 479 18 29 65</p>
        </div>
      </FooterStyled>
  )
}

const FooterStyled = styled.div`

  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  gap: 100px;
  align-items: center;
  background-color: black;

  .info-container {
    display: flex;
    gap: 10px;
    align-items: center;
    color: white;
  }

  .dot-container {
    display: flex;
    gap: 20px;
  }

  .dot {
    width: 15px;
    height: 15px;
    background-color: white;
    border-radius: 50%;
  }
`;

import styled from "styled-components";
import { refreshPage } from "../../../utils/window"

export default function NavbarName() {
  return (
    <NavbarNameStyled onClick={refreshPage}>
      CHIARA MULLER
    </NavbarNameStyled>
  )
}

const NavbarNameStyled = styled.div`

  padding-left: 30px;
  font-weight: bold;
  cursor: pointer;

`;

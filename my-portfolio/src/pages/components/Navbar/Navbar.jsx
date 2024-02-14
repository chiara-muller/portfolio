import React from 'react'
import styled from 'styled-components';
import NavbarLinks from './NavbarLinks';
import NavbarName from './NavbarName';

export default function Navbar() {
  return (
    <NavbarStyled>
      <NavbarName />
      <NavbarLinks />
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: white;
  position: fixed;
`;

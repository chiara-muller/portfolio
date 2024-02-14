import React from 'react'
import styled from 'styled-components';

export default function NavbarLinks() {
  return (
    <NavbarLinksStyled>
      <button>Home</button>
      <button>About</button>
      <button>Projects</button>
      <button>Contact</button>
    </NavbarLinksStyled>
  )
}

const NavbarLinksStyled  = styled.div`

  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 30px;

  button {
    background: none;
    border: none;
    width: 130px;
    height: 100%;
    cursor: pointer;
    font-size: 16px;
  }

  button:nth-child(4) {
    background-color: black;
    color: white;
    border-radius: 5px;
    height: 50%;
    margin-left: 20px;
  }
`;

import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

export default function NavbarLinks() {
  return (
    <NavbarLinksStyled>
      <AnchorLink href="#intro">
        <button>Home</button>
      </AnchorLink>
      <AnchorLink href="#about">
        <button>About</button>
      </AnchorLink>
      <AnchorLink href="#projects">
        <button>Projects</button>
      </AnchorLink>
      <AnchorLink href="#contact">
        <button className="contact-button">Contact</button>
      </AnchorLink>
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

  .contact-button {
    background-color: black;
    color: white;
    border-radius: 5px;
    height: 30px;
    margin-left: 20px;
  }
`;

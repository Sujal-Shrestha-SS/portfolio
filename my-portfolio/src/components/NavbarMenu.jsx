import React from 'react'
import styled from 'styled-components'

const NavbarMenu = () => {
  return (
   <Navbar id="home">
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#about">About Me</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#design">Graphic Design</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </Navbar>
  )
}

export default NavbarMenu

const Navbar = styled.nav`
  display: flex;
  gap: 120px;
  justify-content: center;
  padding: 45px 60px;
  font-size: 24px;
  position: fixed;
  width: 100%;
  //<nav> is a block-level element, so normally it takes width: 100% automatically

  // When you use position: fixed, it’s taken out of normal flow and behaves more like a shrink-to-fit box

  //So it no longer stretches full width unless you explicitly tell it to
    

`

const NavLink = styled.a`
  text-decoration: none;
  color: white;
  position: relative;

  &:hover{
    color: #00ffa6;
  }

  &::after{
    content: "";
    width: 0%;
    height: 2px;
    background: #00ffa6;
    position: absolute;
    bottom: -5px;
    left: 0;
    transition: 0.3s;
  }

  &:hover::after{
    width: 100%;
  }
 

`

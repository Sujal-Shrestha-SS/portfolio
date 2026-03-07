import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
const Home = () => {
  return (
    <Container>

      <Navbar>

        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About me</NavLink>
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/">Graphic Design</NavLink>
        <NavLink to="/">Contact</NavLink>

      </Navbar>

      <Hero> 
        <Title>Hello, I'm Sujal Shrestha</Title>
        <Subtitle>Aspiring IT Engineer</Subtitle>
      </Hero>

    </Container>
  )
}

export default Home

const Container =styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background: linear-gradient(135deg, #0b1d3a, #0f3d2e);
  color: white;
  font-family: "Poppins", sans-serif;
`

const Navbar = styled.nav`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  padding: 25px 60px;
 

`

const NavLink = styled(Link)`
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

const Hero = styled.div`
  position: absolute;
  top: 40%;
  left: 10%;
`;

const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 10px;
`
const Subtitle = styled.h3`

`
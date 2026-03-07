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
  

`

const Hero = styled.div`

`;

const Title = styled.h1`

`
const Subtitle = styled.h3`

`
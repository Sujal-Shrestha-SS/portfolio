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

    </Container>
  )
}

export default Home

const Container =styled.div`
  background-color: red;
`

const Navbar = styled.nav`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  padding: 25px 60px;
 

`

const NavLink = styled(Link)`
  

`
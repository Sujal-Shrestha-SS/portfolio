import React from 'react'
import styled from 'styled-components'
import NavbarMenu from './NavbarMenu'

const About = () => {
  return (

    <Container>
      <NavbarMenu />

    
    <AboutSection id="about">
            <AboutTitle>About Me</AboutTitle>
    
            <AboutText>
              I am an aspiring IT Engineer passionate about web development,
              UI design and building modern web applications using React.
            </AboutText>
      </AboutSection>

    </Container>
  )
}

export default About

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background: linear-gradient(135deg, #0b1d3a, #0f3d2e);
  color: white;
  font-family: "Poppins", sans-serif;
`

const AboutSection = styled.section`
  /* height: 100vh; */
`

const AboutTitle = styled.h2`

`

const AboutText = styled.p`
  


`
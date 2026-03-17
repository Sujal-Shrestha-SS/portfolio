import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import About from './About'
import NavbarMenu from './NavbarMenu'
const Home = () => {
  return (

    <>
    <Container id="home">

      <NavbarMenu />

      <Hero> 

          <Title>Hello, I'm Sujal Shrestha</Title>
          <Subtitle>Aspiring IT Engineer</Subtitle>

      </Hero>

      <ImageCard>
              <ProfileImage src="images/profile.png" alt="Profile Picture"></ProfileImage>
      </ImageCard>

      

    </Container>



    <About />

    </>
  )
}

export default Home

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background: linear-gradient(135deg, #0b1d3a, #0f3d2e);
  color: white;
  font-family: "Poppins", sans-serif;
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
  font-weight: 300;
  color: #9ed9c8;
`



const ImageCard = styled.div`
  position: absolute;
  top: 25%;
  right: 10%;
  width: 620px;
  height: 680px;
  border-radius: 30px;
  overflow: hidden; //clips the image inside the card

  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px); //applies visual effect to whatever is 
                                //behind an element not the element itself.
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 25px 50px rgba(0,0,0,0.6);

  transition: transform 0.4s ease, box-shadow 0.4s ease;


  &:hover{
    transform: translateY(-15px) scale(1.03);
    box-shadow: 0 35px 70px rgba(0,0,0,0.8);
  }
`

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  

  transition: transform 0.5s ease;

  ${ImageCard}:hover &{
    transform: scale(1.08);
  }

  //Selects the current component (&) when its parent ImageCard is hovered
`
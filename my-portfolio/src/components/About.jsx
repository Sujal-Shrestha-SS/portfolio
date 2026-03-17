import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Container>
      <ImageCard>

        <ProfileImage src="images/profile.png" alt="Profile Picture" />
      </ImageCard>

    </Container>
  )
}

export default About


const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    background: linear-gradient(135deg, #0b1d3a, #0f3d2e);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
`

const ImageCard = styled.div`
    width: 420px;
    height: 520px;
    border-radius: 30px;
    overflow: hidden;
    
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.1);
    box-shadow: 0 25px 50px rgba(0,0,0,0.6);

    transition: transform 0.4s ease;

    &:hover{
      transform: translateY(-10px) scale(1.03)
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
`
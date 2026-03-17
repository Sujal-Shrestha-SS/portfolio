import React from 'react'
import styled from 'styled-components'

const About = () => {
  return (
    <Container>
      <ImageCard>

        <ProfileImage src="images/profile.png" alt="Profile Picture" />
      </ImageCard>

      <RightContent>

        <AboutTitle>About Me</AboutTitle>

        <AboutText>
          I am an aspiring IT Engineer passionate about web development,
          UI design and building modern web applications using React.
        </AboutText>

        <InfoRow>

          <InfoCard>
            <CardTitle>Education</CardTitle>
            <CardText>
              IT Engineering <br/>
              Pokhara University <br />
              2023 - Present
            </CardText>
          </InfoCard>

          <InfoCard>
            <CardTitle>Tech Stack</CardTitle>
            <CardText>
              HTML CSS JavaScript <br/>
              React Styled Components <br />
              Git Figma
            </CardText>
          </InfoCard>


        </InfoRow>
      </RightContent>

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

const RightContent = styled.div`
    flex: 1;
    color: white;
`

const AboutTitle = styled.h2`
    font-size: 48px;
    margin-bottom: 20px;
`

const AboutText = styled.p`
    max-width: 500px;
    font-size: 18px;
    line-height: 1.7;
    color: #cfd8dc;
    margin-bottom: 40px;
`

const InfoRow = styled.div`
  display: flex;
  gap: 30px;
`

const InfoCard = styled.div`
  flex: 1;
  padding: 25px;
  border-radius: 20px;

  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);

  transition: transform 0.3s ease;

  &:hover{
    transform: translateY(-8px);
  }

  

`

const CardTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 10px;
`

const CardText = styled.p`
  color: #cfd8dc;
  line-height: 1.6;
`
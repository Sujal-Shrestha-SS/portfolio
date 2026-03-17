import React from 'react'
import styled from 'styled-components'
import projects from '../data/projectsData'

const Projects = () => {
  return (
    <Container>
      <Title>Personal Projects</Title>

      <ProjectWrapper>
        {projects.map((project, index) => ( //.map() automatically gives you two things 
        // project - the current item ; index - the position of that item in the array

        <ProjectBlock key={index}>

          <a 
            href={project.link}
            target="_blank"
            >
          <ImageCard>
            
            <ProjectImage src={project.image} alt={project.title} />

          </ImageCard>
          </a>

          <ProjectInfo>{project.description}</ProjectInfo>
        </ProjectBlock>

        ))}

      </ProjectWrapper>
    </Container>
  )
}

export default Projects

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0b1d3a, #0f3d2e);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Title = styled.h1`
  font-size: 42px;
  margin: 50px;
`
const ProjectWrapper = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2 per row
  gap: 40px;
`

const ProjectBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

const ImageCard = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;

  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.1);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover{
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.6);
  }
`

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  transition: transform 0.4s ease;

  ${ImageCard}:hover &{
    transform: scale(1.08);
  }

`

const ProjectInfo = styled.h2`
  font-size: 20px;
  color: #cfd8bc;
`
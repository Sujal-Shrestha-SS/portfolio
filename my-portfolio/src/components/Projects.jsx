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

`

const ImageCard = styled.div`

`

const ProjectImage = styled.img`
  

`

const ProjectInfo = styled.h2`

`
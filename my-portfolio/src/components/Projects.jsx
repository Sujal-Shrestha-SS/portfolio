import React from 'react'
import styled from 'styled-components'

const Projects = () => {
  return (
    <Container>
      <Title>Personal Projects</Title>

      <ProjectWrapper>

        <ProjectBlock>
          <ImageCard>
            
            <ProjectImage src="images/TaskCtrl.png" alt="Todo App" />

          </ImageCard>

          <ProjectInfo>This is a todo app</ProjectInfo>
        </ProjectBlock>

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
`

const ProjectBlock = styled.div`

`

const ImageCard = styled.div`

`

const ProjectImage = styled.img`
  

`

const ProjectInfo = styled.h2`

`
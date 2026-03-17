import React from 'react'
import styled from 'styled-components'

const Projects = () => {
  return (
    <Container>
      Personal Projects

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
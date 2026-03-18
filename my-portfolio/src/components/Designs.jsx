import React from 'react'
import designs from '../data/designsData'
import styled from 'styled-components'

const Designs = () => {
  return (
    <Container id = "designs">
      <Title>Passion Projects</Title>

      <DesignWrapper>
        {designs.map((design, index) => (

            <DesignBlock key={index}>

              <DesignImage src={design.image} alt={design.title} />

            </DesignBlock>

        ))}
      </DesignWrapper>

    </Container>
  )
}

export default Designs

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
  margin-top: 100px;
  margin-bottom: 50px;
`

const DesignWrapper = styled.div`
  width: 60%;
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 2 per row
  gap: 40px;
`

const DesignBlock = styled.div`
  width: 100%;
  height: 80%;
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

const DesignImage = styled.img`
  width: 100%;
  height: 100%;
  /* object-fit: fill; */

  transition: transform 0.4s ease;
  

  ${DesignBlock}:hover &{
    transform: scale(1.08);
  }

`
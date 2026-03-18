import React from 'react'
import designs from '../data/designsData'

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
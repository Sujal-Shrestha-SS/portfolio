import React from 'react'

const Contact = () => {
  return (
    <Container>
        <LeftBlock>
          <GetinTouch>
          <Title>Get in Touch</Title>

            <InfoRow>
              <FaEnvelope />
              <span>sujalstha801@gmail.com</span>
            </InfoRow>

            <InfoRow>
              <FaMapMarkerAlt />
              <span>Kathmandu, Nepal</span>
            </InfoRow>

          </GetinTouch>

          <Divider />

          <Socials>
          <Title>Socials</Title>

          <Icon />
          <Icon />
          <Icon />
          </Socials>

        </LeftBlock>

        <RightBlock>
          <Title>Contact Me</Title>


        </RightBlock>
    </Container>
  )
}

export default Contact
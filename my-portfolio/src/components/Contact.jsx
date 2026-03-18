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

          <SocialIcons>
              <a href="https://linkedin.com/sujalshresthaa" target="_blank">
                <FaLinkedin />
              </a>

              <a href="https://instagram.com/sujal.shresthaaa" target="_blank">
                <FaInstagram />
              </a>

              <a href="https://github.com/Sujal-Shrestha-SS" target="_blank">
                <FaGithub />
              </a>

          </SocialIcons>

          </Socials>

        </LeftBlock>

        <RightBlock>
          <Title>Contact Me</Title>


        </RightBlock>
    </Container>
  )
}

export default Contact
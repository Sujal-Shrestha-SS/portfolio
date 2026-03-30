import React from 'react'
import styled from 'styled-components'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

const Contact = () => {
  return (
    <Container>
      <ContentWrapper>

     
        <LeftBlock>
          <GetInTouch>
          <Title>Get in Touch</Title>

            <InfoRow>
              <FaEnvelope />
              <span>sujalstha801@gmail.com</span>
            </InfoRow>

            <InfoRow>
              <FaMapMarkerAlt />
              <span>Kathmandu, Nepal</span>
            </InfoRow>

          </GetInTouch>

          <Divider />

          <Socials>
          <Title>Socials</Title>

          <SocialIcons>
              <a href="https://linkedin.com/in/sujalshresthaa" target="_blank">
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
          <FormTitle>Contact Me</FormTitle>

          <FormGroup>
            <Label>Name</Label>
            <Input type="text" placeholder="Enter your name" />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input type="email" placeholder="Enter your email" />
          </FormGroup>

          <FormGroup>
            <Label>Message</Label>
            <TextArea placeholder="Write your message..." />
          </FormGroup>

          <SendMsgBtn>Send Message</SendMsgBtn>
        </RightBlock>
                </ContentWrapper>
            </Container>
          )
}

export default Contact


const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0b1d3a, #0f3d2e);
  color: white;
  display: flex;
  
  align-items: center;
`
const ContentWrapper = styled.div`
    width: 85%;
    display: flex;
    gap: 80px;
    align-items: center;
    margin: auto;
    
`

const LeftBlock = styled.div`
  width: 40%;
  padding: 40px;
  background: #0f172a;
  color: white;
`



const Title = styled.h2`
  margin-bottom: 20px;
`

const GetInTouch = styled.div`

`

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;

  svg {
    font-size: 20px;
  } //styling the icon
`

const Divider = styled.hr`
  margin: 30px 0;
  border: 0.5px solid #444;
`

const Socials = styled.div``

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    font-size: 24px;
    transition: 0.3s;
  }

  a:hover {
    color: #38bdf8;
    transform: scale(1.2);
  }
`

const RightBlock = styled.div`
  width: 40%;
  padding: 40px;
  background: #0f172a;
  color: white;
`

const FormTitle = styled.h2`
  margin-bottom: 30px;
`
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #cbd5f5;
`

const Input = styled.input`

`

const TextArea = styled.textarea`
  

`

const SendMsgBtn = styled.button`


`

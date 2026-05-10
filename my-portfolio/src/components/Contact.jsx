import React from 'react'
import styled from 'styled-components'
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzRk-FyEAb_IzhjB4RZhpSLYGPz92iLcAVekrFpkroT8MnLjeSEbxMK8jit5hr82Xz87w/exec' // Replace with your Google Apps Script Web App URL

const Contact = () => {
  const [formData, setFormData] = React.useState({ name: '', email: '', message: '' })
  const [status, setStatus] = React.useState('') // 'sending' | 'sent' | 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      return
    }
    setStatus('sending')
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        body: JSON.stringify(formData),
      })
      setStatus('sent')
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      console.log(err);
    }
  }

  return (
    <Container id="contact">
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
              <a href="https://linkedin.com/in/sujalshresthaa" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>

              <a href="https://instagram.com/sujal.shresthaaa" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>

              <a href="https://github.com/Sujal-Shrestha-SS" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </SocialIcons>
          </Socials>
        </LeftBlock>

        <RightBlock>
          <FormTitle>Contact Me</FormTitle>

          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label>Message</Label>
            <TextArea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
            />
          </FormGroup>

          {status === 'sent' && <StatusMsg $success>Message sent successfully!</StatusMsg>}
          {status === 'error' && <StatusMsg>Please fill all fields and try again.</StatusMsg>}

          <SendMsgBtn onClick={handleSubmit} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </SendMsgBtn>
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

const GetInTouch = styled.div``

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;

  svg {
    font-size: 20px;
  }
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
  display: flex;
  flex-direction: column;
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
  padding: 12px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: #1e293b;
  color: white;
`

const TextArea = styled.textarea`
  padding: 12px;
  border-radius: 8px;
  border: none;
  outline: none;
  background: #1e293b;
  color: white;
  min-height: 120px;
  resize: none;
`

const StatusMsg = styled.p`
  font-size: 13px;
  margin-bottom: 8px;
  color: ${({ $success }) => ($success ? '#4ade80' : '#f87171')};
`

const SendMsgBtn = styled.button`
  margin-top: 10px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #38bdf8;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
  align-self: center;

  &:hover {
    background: #0ea5e9;
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`
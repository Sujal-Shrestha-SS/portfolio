import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavbarMenu from './NavbarMenu'
import About from './About'
import Projects from './Projects'
import Designs from './Designs'
import Contact from './Contact'

const roles = [
  "Aspiring IT Engineer",
  "Frontend Developer",
  "UI/UX Enthusiast",
  "Problem Solver"
]

const Home = () => {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const typing = setTimeout(() => {
      setText(roles[index].slice(0, charIndex + 1))
      setCharIndex(charIndex + 1)

      if (charIndex === roles[index].length) {
        setTimeout(() => {
          setCharIndex(0)
          setIndex((index + 1) % roles.length)
        }, 1500)
      }
    }, 80)

    return () => clearTimeout(typing)
  }, [charIndex, index])

  return (
    <>
      <Container id="home">
        <NavbarMenu />

        <MainContent>
          {/* LEFT SIDE */}
          <Hero>
            <Intro>Hello, I'm</Intro>

            <Title>
              <Highlight>Sujal Shrestha</Highlight>
            </Title>

            <TypingText>{text}|</TypingText>

            <Description>
              I build modern, responsive web applications with clean UI and smooth user experience.
              Passionate about turning ideas into real-world digital solutions.
            </Description>

            <Buttons>
              <PrimaryBtn href="/CV.pdf" download>
                Download CV
              </PrimaryBtn>

              <SecondaryBtn href="#contact">
                Contact Me
              </SecondaryBtn>
            </Buttons>
          </Hero>

          {/* RIGHT SIDE */}
          <RightSide>
            <CodeBlock>
              <CodeHeader>
                <span></span>
                <span></span>
                <span></span>
              </CodeHeader>

{`const developer = {
  name: "Sujal Shrestha",
  role: "Frontend Developer",
  skills: ["React", "JavaScript", "CSS"],
  passion: "Building modern UI",
  location: "Kathmandu, Nepal"
};`}
            </CodeBlock>
          </RightSide>
        </MainContent>
      </Container>

      <About />
      <Projects />
      <Designs />
      <Contact />
    </>
  )
}

export default Home


const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #0b1d3a, #0f3d2e);
  color: white;
  font-family: "Poppins", sans-serif;
`

const MainContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12%;
  padding-top: 80px;
`

/* LEFT SIDE */

const Hero = styled.div`
  max-width: 650px;
`

const Intro = styled.p`
  font-size: 18px;
  color: #9ed9c8;
  margin-bottom: 10px;
`

const Title = styled.h1`
  font-size: 80px;
  margin-bottom: 15px;
  line-height: 1.1;
`

const Highlight = styled.span`
  color: #38bdf8;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 6px;
    background: #38bdf8;
    bottom: -5px;
    left: 0;
    opacity: 0.3;
  }
`

const TypingText = styled.h3`
  font-size: 28px;
  font-weight: 400;
  color: #9ed9c8;
  min-height: 40px;
  margin-bottom: 25px;
`

const Description = styled.p`
  font-size: 18px;
  line-height: 1.7;
  color: #cbd5f5;
  margin-bottom: 35px;
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`

const PrimaryBtn = styled.a`
  padding: 12px 24px;
  background: #38bdf8;
  color: black;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: #0ea5e9;
    transform: scale(1.05);
  }
`

const SecondaryBtn = styled.a`
  padding: 12px 24px;
  border: 1px solid #38bdf8;
  color: #38bdf8;
  border-radius: 8px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #38bdf8;
    color: black;
  }
`

/* RIGHT SIDE */

const RightSide = styled.div`
  width: 600px;
`

const CodeBlock = styled.pre`
  background: #020617;
  color: #38bdf8;
  padding: 35px;
  border-radius: 18px;
  font-size: 16px;
  line-height: 1.8;

  overflow-x: auto;
  box-shadow: 0 25px 60px rgba(0,0,0,0.7);
  border: 1px solid rgba(255,255,255,0.1);

  transition: 0.3s;

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 35px 80px rgba(0,0,0,0.9);
  }
`

const CodeHeader = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  span:nth-child(1) { background: #ef4444; }
  span:nth-child(2) { background: #facc15; }
  span:nth-child(3) { background: #22c55e; }
`
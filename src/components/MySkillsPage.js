import React from "react";
import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { lightTheme, mediaQueries } from "./Themes";

import { Design, Develope } from "./AllSvgs";
import Loading from "../subComponents/Loading";

//Components
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticlesComponent = lazy(() =>
  import("../subComponents/ParticleComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
  gap: 3rem;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") repeat;
    pointer-events: none;
  }

  ${mediaQueries(50)`flex-direction: column; padding: 6rem 2rem; gap: 2rem;`}
`;

const Main = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2.5rem;
  width: 450px;
  min-height: 500px;
  height: auto;
  z-index: 3;
  line-height: 1.6;
  position: relative;
  overflow: hidden;
  
  font-family: "Inter", "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.3rem;
  
  color: white;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffd93d);
    background-size: 300% 100%;
    animation: gradientShift 3s ease infinite;
  }

  @keyframes gradientShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }

  ${mediaQueries(60)`width: 400px;`}
  ${mediaQueries(50)`width: 350px; padding: 2rem;`}
  ${mediaQueries(40)`width: 320px;`}
  ${mediaQueries(30)`width: 300px;`}
  ${mediaQueries(25)`width: 280px; padding: 1.5rem;`}

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 35px 60px rgba(0, 0, 0, 0.15);
    background: rgba(255, 255, 255, 0.15);
  }

  &:nth-child(even) {
    background: rgba(255, 255, 255, 0.08);
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
  
  ${mediaQueries(60)`font-size: 1.6rem;`}
  ${mediaQueries(50)`font-size: 1.8rem;`}
  ${mediaQueries(30)`font-size: 1.6rem;`}
  ${mediaQueries(25)`font-size: 1.4rem;`}

  & > *:first-child {
    margin-right: 1rem;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  }
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;

  ${mediaQueries(50)`font-size: 1.1rem;`}
  ${mediaQueries(30)`font-size: 1rem;`}
  ${mediaQueries(25)`font-size: 0.95rem;`}

  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.div`
  color: #ffd93d;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #ffd93d, #ff6b6b);
    border-radius: 2px;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    background: rgba(255, 255, 255, 0.1);
    padding: 12px 16px;
    margin-bottom: 8px;
    border-radius: 12px;
    border-left: 4px solid #4ecdc4;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      background: rgba(255, 255, 255, 0.15);
      transform: translateX(8px);
      border-left-color: #ff6b6b;
    }
    
    &::before {
      content: '→';
      position: absolute;
      left: -8px;
      color: #4ecdc4;
      font-weight: bold;
      transition: color 0.3s ease;
    }
    
    &:hover::before {
      color: #ff6b6b;
    }
  }
`;

const ProjectsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    background: rgba(255, 255, 255, 0.08);
    padding: 16px 20px;
    margin-bottom: 12px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.95rem;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
    }
    
    &::before {
      content: '✨';
      position: absolute;
      top: 16px;
      left: -12px;
      font-size: 1.2rem;
    }
  }
`;

const FloatingIcon = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:nth-child(1) {
    top: 10%;
    left: 10%;
    animation: float 6s ease-in-out infinite;
  }
  
  &:nth-child(2) {
    top: 20%;
    right: 15%;
    animation: float 8s ease-in-out infinite reverse;
  }
  
  &:nth-child(3) {
    bottom: 30%;
    left: 20%;
    animation: float 7s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <FloatingIcon
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            🚀
          </FloatingIcon>
          <FloatingIcon
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            💡
          </FloatingIcon>
          <FloatingIcon
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            ⚡
          </FloatingIcon>

          <LogoComponent theme="light" />
          <PowerButton />
          <SocialIcons theme="light" />
          <ParticlesComponent theme="light" />

          <Main
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Title>
              <Design width={40} height={40} /> AI/ML Developer
            </Title>
            <Description>
              I'm passionate about building intelligent applications using Machine Learning, NLP, LLMs, and Computer Vision.
            </Description>
            
            <SectionTitle>Key Projects</SectionTitle>
            <ProjectsList>
              <li>Sales Data Chatbot using Mixtral-8x7B, Flask, and Astra DB</li>
              <li>Text-to-Image Generation Pipeline using Stable Diffusion</li>
            </ProjectsList>
            
            <SectionTitle>Technologies</SectionTitle>
            <SkillsList>
              <li>Python, Flask, TensorFlow, Hugging Face, Astra DB</li>
              <li>LLMs, Neural Networks, NLP, Computer Vision</li>
            </SkillsList>
          </Main>

          <Main
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Title>
              <Develope width={40} height={40} /> Research & Engineering
            </Title>
            <Description>
              I enjoy bridging research and engineering — turning AI innovations into real-world solutions.
            </Description>
            
            <SectionTitle>Experience Highlights</SectionTitle>
            <ProjectsList>
              <li>Accounting API integration with QuickBooks & Xero (.NET, OAuth 2.0)</li>
              <li>Frontend development using React.js, Bootstrap</li>
            </ProjectsList>
            
            <SectionTitle>Tools & Skills</SectionTitle>
            <SkillsList>
              <li>ASP.NET, C#, React.js, GitHub, VS Code</li>
              <li>Teamwork, Leadership, Communication</li>
            </SkillsList>
          </Main>

          <BigTitle text="Skills" top="80%" right="30%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default MySkillsPage;
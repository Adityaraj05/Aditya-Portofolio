import React from "react";
import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";

import { DarkTheme, mediaQueries } from "./Themes";
import astronaut from "../assets/Images/spaceman.png";
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
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px)         }
    50% { transform: translateY(15px) translateX(15px)        }
    100% { transform: translateY(-10px)         }
`;

const SpaceMan = styled(motion.div)`
  position: absolute;
  top: 10%;
  right: 5%;
  animation: ${float} 4s ease infinite;
  width: 20vw;
  z-index: 2;
  img {
    width: 110%;
    height: auto;
  }
  
  ${mediaQueries(40)`
    width: 25vw;
    top: 5%;
    right: 2%;
  `};
  
  ${mediaQueries(30)`
    width: 30vw;
    top: 2%;
    right: 1%;
  `};
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 55vw;
  max-height: 67vh;
  min-height: 40vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  overflow-y: auto;
  overflow-x: hidden;
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.text};
    border-radius: 10px;
    opacity: 0.7;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.text};
    opacity: 1;
  }

  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: ${(props) => props.theme.text} rgba(255, 255, 255, 0.1);

  ${mediaQueries(40)`
    width: 60vw;
    max-height: 60vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 1.5rem;
  `};
  
  ${mediaQueries(30)`
    width: 70vw;
    max-height: 70vh;
    backdrop-filter: none;
    margin-top: 2rem;
    padding: 1.5rem;
    font-size: calc(0.5rem + 1vw);
  `};

  ${mediaQueries(20)`
    padding: 1rem;
    width: 85vw;
    max-height: 75vh;
    height: auto;
    font-size: calc(0.4rem + 1vw);
    line-height: 1.4;
  `};
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding-right: 10px; /* Space for scrollbar */
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}
        >
          <LogoComponent theme="dark" />
          <PowerButton />
          <SocialIcons theme="dark" />
          <ParticlesComponent theme="dark" />

          <SpaceMan
            initial={{ right: "-20%", top: "100%" }}
            animate={{
              right: "5%",
              top: "10%",
              transition: { duration: 2, delay: 0.5 },
            }}
          >
            <img src={astronaut} alt="spaceman" />
          </SpaceMan>
          
          <Main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1, delay: 1 } }}
          >
            <ContentWrapper>
              I'm an AI/ML Developer and Full Stack Engineer based in India with a
              specialization in Computer Science and Engineering (AI). I enjoy building
              intelligent systems and seamless software experiences.
              <br />
              <br />
              I've worked with technologies like Python, Flask, .NET, React.js, and
              TensorFlow, contributing to projects ranging from LLM-based sales chatbots
              to accounting integrations with QuickBooks and Xero. My passion lies in
              research-driven development, especially in fields like NLP, LLMs, and
              Computer Vision.
              <br />
              <br />
              During my internships at PinnacleWorks, Brainybeam, and Satva Solutions, I
              gained hands-on experience with machine learning, frontend development, and
              real-time backend integrations. I've also contributed to publication work in
              AI cybersecurity and earned certifications from Microsoft and Oracle in AI
              fundamentals and Generative AI.
              <br />
              <br />
              I'm a quick learner and a self-motivated team player who values
              responsibility, innovation, and clear communication. I thrive in both
              collaborative and independent roles and always strive to deliver
              high-quality, impactful solutions.
              <br />
              <br />
              Beyond technical skills, I'm passionate about exploring emerging technologies
              and staying updated with the latest trends in AI and software development.
              I believe in continuous learning and actively participate in tech communities
              and open-source projects to expand my knowledge and contribute to the
              developer ecosystem.
            </ContentWrapper>
          </Main>

          <BigTitle text="ABOUT" top="10%" left="15%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default AboutPage;
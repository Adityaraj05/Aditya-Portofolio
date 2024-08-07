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
  img {
    width: 110%;
    height: auto;
  }
`;
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 55vw;
  height: 67vh;
  z-index: 3;
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;

  font-family: "Ubuntu Mono", monospace;
  font-style: italic;

  ${mediaQueries(40)`
          width: 60vw;
          height: 60vh;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);


  `};
  ${mediaQueries(30)`
          width: 50vw;
          height: 76vh;
          backdrop-filter: none;
          margin-top:2rem;
        

  `};

  ${mediaQueries(20)`
          padding: 1rem;
          width: 40vw;
          height: auto;
          font-size: calc(0.1rem + 1vw);
  `};
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
            I'm a Frontend Developer located in India. I love to create Simple yet Modern Websites with
            Great User Experience and Responsiveness.
            <br />
            <br />
            As a quick learner, I adapt easily to new technologies and concepts, allowing me to stay up-to-date with the latest advancements in the field. I take pride in my ability to be flexible and reliable, consistently meeting deadlines and delivering high-quality work. Time management is a strength of mine, enabling me to efficiently prioritize tasks and achieve optimal results. <br />
            <br />Driven by enthusiasm and self-motivation, I approach every endeavor with a sense of responsibility and a strong work ethic. I am a mature team player, capable of adapting to any challenging situation that comes my way. I excel in collaborative environments, but I am equally comfortable working independently and taking initiative.
          </Main>
          <BigTitle text="ABOUT" top="10%" left="15%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default AboutPage;

import React from "react"; 
import { motion } from "framer-motion"; 
import { useEffect, useRef, lazy, Suspense } from "react"; 
 
import styled, { ThemeProvider } from "styled-components"; 
 
import { YinYang } from "./AllSvgs"; 
import { Work } from "../data/WorkData"; 
import { DarkTheme, mediaQueries } from "./Themes"; 
 
import Card from "../subComponents/Card"; 
import Loading from "../subComponents/Loading"; 
 
const SocialIcons = lazy(() => import("../subComponents/SocialIcons")); 
const PowerButton = lazy(() => import("../subComponents/PowerButton")); 
const LogoComponent = lazy(() => import("../subComponents/LogoComponent")); 
const BigTitle = lazy(() => import("../subComponents/BigTitle")); 
 
const Box = styled(motion.div)` 
  background-color: ${(props) => props.theme.body}; 
  position: relative; 
  display: flex; 
  // Calculate height based on number of cards - increased for better spacing
  height: ${() => Work.length * 100}vh; 
  overflow-x: hidden;
  overflow-y: auto;
`; 
 
const Main = styled(motion.ul)` 
  position: fixed; 
  top: 12rem; 
  left: calc(10rem + 15vw); 
 
  height: 40vh; 
  /* height:200vh; */ 
  //border:1px solid white; 
 
  display: flex; 
  // Ensure cards don't wrap and have enough space
  flex-wrap: nowrap;
  // Add enough width to accommodate all cards
  width: ${() => Work.length * 25}vw;
  min-width: 100vw;
 
  ${mediaQueries(50)` 
         
         
        left:calc(8rem + 15vw); 
 
  `}; 
 
  ${mediaQueries(40)` 
  top: 30%; 
         
        left:calc(6rem + 15vw); 
 
  `}; 
 
  ${mediaQueries(40)` 
         
        left:calc(2rem + 15vw); 
 
  `}; 
  ${mediaQueries(25)` 
         
        left:calc(1rem + 15vw); 
        width: ${() => Work.length * 30}vw;
 
  `}; 
`; 
 
const Rotate = styled.span` 
  display: block; 
  position: fixed; 
  right: 1rem; 
  bottom: 1rem; 
  width: 80px; 
  height: 80px; 
 
  z-index: 1; 
  ${mediaQueries(40)` 
     width:60px; 
         height:60px;    
       svg{ 
         width:60px; 
         height:60px; 
       } 
 
  `}; 
  ${mediaQueries(25)` 
        width:50px; 
         height:50px; 
        svg{ 
         width:50px; 
         height:50px; 
       } 
 
  `}; 
`; 

const container = { 
  hidden: { opacity: 0 }, 
  show: { 
    opacity: 1, 
 
    transition: { 
      staggerChildren: 0.5, 
      duration: 0.5, 
    }, 
  }, 
}; 
 
const WorkPage = () => { 
  const ref = useRef(null); 
 
  const yinyang = useRef(null); 
 
  useEffect(() => { 
    let element = ref.current; 
 
    const rotate = () => { 
      // Calculate the scroll distance more precisely
      const scrolled = window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrolled / maxScroll;
      
      // Move cards horizontally based on scroll percentage
      // Adjust the multiplier to ensure all cards are visible
      const translateX = scrollPercentage * (Work.length * 20 * window.innerWidth / 100);
      element.style.transform = `translateX(-${translateX}px)`;
 
      return (yinyang.current.style.transform = 
        "rotate(" + -scrolled + "deg)"); 
    }; 
 
    window.addEventListener("scroll", rotate); 
    return () => { 
      window.removeEventListener("scroll", rotate); 
    }; 
  }, []); 
 
  return ( 
    <ThemeProvider theme={DarkTheme}> 
      <Box 
        key="work" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { duration: 1 } }} 
        exit={{ opacity: 0, transition: { duration: 0.5 } }} 
      > 
        <LogoComponent theme="dark" /> 
        <PowerButton /> 
        <SocialIcons theme="dark" /> 
        <Suspense fallback={<Loading />}> 
          <Main ref={ref} variants={container} initial="hidden" animate="show"> 
            {Work.map((d) => ( 
              <Card key={d.id} data={d} /> 
            ))} 
          </Main> 
        </Suspense> 
 
        <BigTitle text="WORK" top="10%" right="20%" /> 
 
        <Rotate ref={yinyang}> 
          <YinYang width={80} height={80} fill={DarkTheme.text} /> 
        </Rotate> 
      </Box> 
    </ThemeProvider> 
  ); 
}; 
 
export default WorkPage;
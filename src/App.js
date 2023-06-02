import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import {  Route,
    Routes, } from "react-router-dom";
import GlobalStyle from "./globalStyles"
//components
import Main from './components/Main'
import BlogPage from "./components/BlogPage";
import MySkillsPage from "./components/MySkillsPage";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";


function App() {
  return <>
  
  

    <GlobalStyle />


    <ThemeProvider theme={lightTheme}>
    
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={ <AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/skills" element={<MySkillsPage />} />
    </Routes>
   
    
    </ThemeProvider>




  </>

}

export default App
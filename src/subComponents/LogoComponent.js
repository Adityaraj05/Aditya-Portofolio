import React from "react";
import styled from "styled-components";
import { DarkTheme, mediaQueries } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;
  position: fixed;
  left: 2rem;
  top: 2rem;
  cursor: pointer;

  z-index: 3;

  ${mediaQueries(40)`
      font-size:1.5em;
      left:1rem;
      top:2rem;
  `};
`;

const LogoComponent = (props) => {
  return (
    // Aditya Raj Resume
    <Logo
      onClick={() => window.open("https://drive.google.com/file/d/1m0WZnjfJ8fJEMZUMiy7EJPn4jy3QFngh/view?usp=sharing")}
      color={props.theme}
    >
      AR
    </Logo>
  );
};

export default LogoComponent;

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
      onClick={() => window.open("https://drive.google.com/file/d/15MZf1kmFo2VzZh_iefvqwWkPa3G7LEqk/view?usp=drive_link")}
      color={props.theme}
    >
      AR
    </Logo>
  );
};

export default LogoComponent;

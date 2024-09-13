import { useState } from "react";
import "./App.css";
import { styled } from "styled-components";
import { FaArrowAltCircleUp, FaBeer } from "react-icons/fa";
import { react } from '@vitejs/plugin-react';
import { Tooltip } from "react-tooltip";

const H1 = styled.h1`
  font-size: 1.5em;

`;
function App() {


  return (
    <>
    <h3> Lets go for a <FaArrowAltCircleUp color="green" />? </h3>
    <H1 data-tooltip-id='1234'data-tooltip-content='Inicio'>commit inicial</H1>
    <Tooltip  place="bottom"   />
    </>
  );
}

export default App;

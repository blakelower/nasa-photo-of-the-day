import React from "react";
import styled from "styled-components";
import { HeadingTwo } from "./App";
import { Para } from "./App";

function NasaDivs({ NasaData }) {
  return (
    <div className="App">
      <img src={NasaData.hdurl} width={"400px"} />
      <HeadingTwo>{NasaData.title}</HeadingTwo>
      <h2>Taken By: {NasaData.copyright}</h2>
      <h3>Date: {NasaData.date}</h3>
      <Para>{NasaData.explanation}</Para>
    </div>
  );
}
export default NasaDivs;

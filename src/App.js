import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";
import NasaDivs from "./NasaDivs";

export const HeadingTwo = styled.h2`
  font-family: sans-serif;
  color: red;
`;

export const Para = styled.p`
  font-family: "Oswald", sans-serif;
  font-size: 25px;
  color: white;
  margin: 35px;
`;

function App() {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    console.log("Nasa Photo of the Day");

    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(response => {
        console.log(response);
        setNasa(response.data);
      })
      .catch(error => {
        console.log("display this messsage when there is an error", error);
      });
  }, []);

  return (
    <div className="App">
      <h2>
        Welcome to the Galaxy.. Enjoy your Stay<span>👽</span>
      </h2>
      <NasaDivs NasaData={nasa} />
    </div>
  );
}

export default App;

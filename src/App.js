import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App </h1>
        <Weather defaultCity="San Juan" />
        <footer>
          This project was created by Yarelys Rivera, hosted on Netlify and is{" "}
          <a
            href="https://github.com/YarelysRR/my-react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

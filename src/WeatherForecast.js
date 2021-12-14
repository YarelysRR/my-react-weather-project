import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForescast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "8d3b4eb3bfd4da849a5a61c1e36fe700";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  //also had to include info in the weather.js  setWeatherData now includes coord and also down in the component it has to include the coordinates.

  return (
    <div className="WeatherForecast">
      <div clasName="row">
        <div className="col">
          <div className="WeatherForDay">THU</div>{" "}
          <WeatherIcon code="01n" size={36} />
          <div className="WeatherForeTemp">
            <span className="WeatherForTempMax">35°</span>
            <span className="WeatherForTempMin">3°</span>
          </div>
        </div>
      </div>
    </div>
  );
}

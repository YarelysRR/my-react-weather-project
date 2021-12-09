import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleRespose(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1> {weatherData.city} </h1>
        <ul>
          {" "}
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize"> {weatherData.description}</li>{" "}
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              ></img>
            </div>
            <div className="float-left">
              <span className="temperature">
                {" "}
                {Math.round(weatherData.temperature)}{" "}
              </span>{" "}
              <span className="unit">°F | </span>{" "}
              <span className="unit">°C </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li> Precipitation: fake 100%</li>
              <li> Humidity:{weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8d3b4eb3bfd4da849a5a61c1e36fe700";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(handleRespose);
    return "Loading...";
  }
}

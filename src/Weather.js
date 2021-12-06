import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1> San Juan, PR </h1>
      <ul>
        {" "}
        <li> Sunday 9:00pm</li> <li> Cloudy</li>{" "}
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Cloudy"
          ></img>
          78 °F
        </div>
        <div className="col-6 weather_info">
          <ul>
            {" "}
            <li> Precipitation: 10%</li>
            <li> Humidity:70%</li> <li>Wind: 15 mph</li>{" "}
          </ul>
        </div>
      </div>
    </div>
  );
}

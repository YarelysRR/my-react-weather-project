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
      <h1> San Juan, PR </h1>
      <ul>
        {" "}
        <li> Sunday 9:00pm</li> <li> Cloudy</li>{" "}
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy"
              className="float-left"
            ></img>
          </div>
          <div className="float-left">
            <span className="temperature">78 </span>{" "}
            <span className="unit">°F | </span>{" "}
            <span className="unit">°C </span>
          </div>
        </div>
        <div className="col-6">
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
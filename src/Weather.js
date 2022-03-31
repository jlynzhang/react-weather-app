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
      <h1>New York</h1>
      <ul>
        <li>Friday 6:00 PM</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="d-flex mt-3">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="Cloudy"
                className="float-left"
              />
            <div className="float-left">
              <span className="temperature">47</span>
              <span className="unit">°F</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 6%</li>
            <li>Humidity: 71%</li>
            <li>Wind: 3 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

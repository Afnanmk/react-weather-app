import React, { useState, useEffect } from "react";
import Header from "./Header";
import WeatherData from "./WeatherData";
import WeatherSearch from "./WeatherSearch";
import axios from "axios";

const Main = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();

  const api_call = async e => {
    e.preventDefault();
    //Get city name from user
    // const location = e.target.elements.location.value;

    const api_key = "95aec8fddba60c1ade42d83da4a7fbda";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

    const request = axios.get(url);
    const response = await request;
    setWeather(response.data);
    setCity("");
  };

  const handleChange = e => {
    setCity(e.target.value);
  };

  weather && console.log(weather);
  return (
    <div className="main">
      <Header />
      <WeatherSearch
        apiCall={api_call}
        city={city}
        handleChange={handleChange}
      />
      {weather && <WeatherData weather={weather} />}
    </div>
  );
};

export default Main;

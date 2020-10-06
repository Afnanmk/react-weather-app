import React from "react";
import { BsSearch } from "react-icons/bs";

function WeatherSearch(props) {
  const { apiCall, handleChange, city } = props;
  return (
    <>
      <div className="weather_search">
        <form onSubmit={apiCall}>
          <BsSearch className="search_icon" />

          <input
            onChange={handleChange}
            value={city}
            type="search"
            name="location"
            placeholder="Search City..."
            className="search_input"
          />
        </form>
      </div>
    </>
  );
}

export default WeatherSearch;

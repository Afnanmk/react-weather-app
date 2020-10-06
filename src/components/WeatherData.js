import React from "react";

const tableStyle = {
  borderCollapse: "collapse",
  width: "80%",
  margin: "1.5em",
  marginLeft: "10.4%",
  fontFamily: "Arial, Helvetica, sansSerif",
  fontSize: "0.85em",
  backgroundColor: "white"
};

function WeatherData({ weather }) {
  const {
    temp,
    humidity,
    temp_max,
    temp_min,
    pressure,
    feels_like
  } = weather.main;
  const { speed } = weather.wind;
  const { visibility } = weather;
  const { name } = weather;

  return (
    <div className="weather_data">
      <div className="content">
        <h2>
          CURRENT WEATHER OF <span>{name.toUpperCase()}</span>
        </h2>
        <h3>{Math.floor(temp)}&deg;c</h3>
        <h4>{weather.weather[0].description.toUpperCase()}</h4>
        <h5>RealFeel&reg; {Math.floor(feels_like)}&deg;</h5>
        <table border="0" cellPadding="0" cellSpacing="0" style={tableStyle}>
          <tbody>
            <tr className="table_row">
              <td className="table_data_1st">Hi</td>
              <td className="table_data_2nd">{Math.floor(temp_max)}&deg;</td>
            </tr>
            <tr className="table_row">
              <td className="table_data_1st">Lo</td>
              <td className="table_data_2nd">{Math.floor(temp_min)}&deg;</td>
            </tr>
            <tr className="table_row">
              <td className="table_data_1st">Wind</td>
              <td className="table_data_2nd">{speed} m/s</td>
            </tr>
            <tr colSpan="2" className="table_row">
              <td className="table_data_1st">Humidity</td>
              <td className="table_data_2nd">{humidity}%</td>
            </tr>
            <tr className="table_row">
              <td className="table_data_1st">Pressure</td>
              <td className="table_data_2nd">{pressure} mb</td>
            </tr>
            <tr id="table-r" className="table_row">
              <td className="table_data_1st">Visibility</td>
              <td className="table_data_2nd">{visibility / 1000} km</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WeatherData;

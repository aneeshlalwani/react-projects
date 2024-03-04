import { useEffect, useState } from "react";
import Search from "../search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeather(param) {
    setLoading(true);
    try {
      const apiKey = "5e6ad8c7137ee1e132305f83e3c33c3b"; // Your API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          param
        )}&appid=${apiKey}`
      );

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
      //   console.log(data);
      //   setWeatherData(data); // Assuming you'll do something with the weather data
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  function handleSearch() {
    fetchWeather(search);
  }
  useEffect(() => {
    fetchWeather("karachi");
  }, []);

  function getCurrrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  console.log(weatherData);

  return (
    <>
      <div>
        <Search
          search={search}
          setSearch={setSearch}
          handleSearch={handleSearch}
        />
        {loading ? (
          <div>Loading....</div>
        ) : (
          <div>
            <div className="city-name">
              <h2>
                {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
              </h2>
            </div>
            <div className="date">
              <span>{getCurrrentDate()}</span>
            </div>
            {/* The original temperature value is being display in the kelvin */}
            <div className="temp">
              {(weatherData?.main?.temp - 273.15).toFixed(2)}°C
            </div>
            <p className="description">
              {weatherData && weatherData.weather && weatherData.weather[0]
                ? weatherData.weather[0].description
                : ""}
            </p>
            <div className="weather-info">
              <div>
                <div>
                  <p>{(weatherData?.main?.feels_like - 273.15).toFixed(2)}°C</p>
                  <p>Feels Like</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="wind">{weatherData?.wind?.speed}</p>
                  <p>Wind Speed</p>
                </div>
              </div>
              <div>
                <div>
                  <p className="humidity">{weatherData?.main?.humidity}</p>
                  <p>Humidity</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Weather;

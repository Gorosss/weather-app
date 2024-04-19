import React from "react";
import { InputFinder } from "./components/inputFinder";
import { Weather } from "./components/weather";
import useWeatherFetcher from "./hooks/useWeatherFetcher";



function App() {
  const { location, setLocation, isLoading, displayLocation, weather } =
    useWeatherFetcher("Madrid");

  console.log("weather", weather);

  

  return (
    <div className="app">
      <h1>Weather App</h1>
      <InputFinder location={location} onChangeLocation={setLocation} />

      {weather !== undefined && weather.weathercode && (
        <Weather weather={weather} location={displayLocation} />
      )}
    </div>
  );
}

export default App;

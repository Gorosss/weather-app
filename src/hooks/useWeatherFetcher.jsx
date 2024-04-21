import { useState, useEffect } from "react";
import { convertToFlagIcon } from "../components/iconConverters";
import Flag from 'react-flagkit';



const useWeatherFetcher = (initialLocation) => {
  const [location, setLocation] = useState(initialLocation);
  const [isLoading, setIsLoading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState("");
  const [weather, setWeather] = useState({});

  const fetchWeather = async () => {
    if (location.length < 2) return setWeather({});

    try {
      setIsLoading(true);

      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
      );
      const geoData = await geoRes.json();
      console.log("geoData", geoData);

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);

        setDisplayLocation(
          <>
            {name}   <Flag country={country_code} size={26} />
          </>
        );
      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );

      if(!weatherRes.error) {
        const weatherData = await weatherRes.json();
        setWeather(weatherData.daily);
        console.log("weatherData", weatherData);
      }
      
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, [location]);

  return { location, setLocation, isLoading, displayLocation, weather };
};

export default useWeatherFetcher;

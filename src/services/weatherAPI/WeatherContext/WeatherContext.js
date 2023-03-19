import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import GetLocation from "react-native-get-location";
import { GeocodingContext } from "../../geocodingAPI/geocodingContext";

export const WeatherContext = createContext();

export default function WeatherContextProvider({ children }) {
  const { reverseGeoCode } = useContext(GeocodingContext);
  const [forecastData, setForecastData] = useState({});
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (latitude = 33.6, longitude = 73.05) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation_probability,surface_pressure,visibility,windspeed_10m,uv_index&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,precipitation_hours,windspeed_10m_max&forecast_days=14&timezone=auto`
      );
      const responseData = await response.json();
      setForecastData(responseData);
      console.log(responseData);
      setIsLoading(false);
    } catch (e) {
      setError(e);
      console.log(e);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log(forecastData);
  }, [forecastData]);

  const getUserLocation = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status === "granted") {
      console.log("granted");
      let { coords } = await getCurrentPositionAsync({});
      console.log(coords);
      let { latitude, longitude } = coords;
      console.log(latitude, longitude);
      reverseGeoCode(latitude, longitude);
      getData(latitude, longitude);
      console.log("permission granted");
    } else {
      getData();
      console.log("permission not granted");
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <WeatherContext.Provider
      value={{ forecastData, error, isLoading, getData }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

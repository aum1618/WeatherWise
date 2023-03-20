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
  const [searchForecastData, setSearchForecastData] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getData = async (latitude = 33.6, longitude = 73.05) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,pressure_msl,surface_pressure,cloudcover,visibility,windspeed_10m,winddirection_10m,uv_index,uv_index_clear_sky&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&forecast_days=14&timezone=auto`
      );
      const data = await response.json();
      console.log(1)
      return data;
    } catch (e) {
      setError(e);
      console.log(e);
    } finally {
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
      const data = await getData(latitude, longitude);
      setForecastData(data);
      console.log(data);
      console.log("permission granted");
    } else {
      const data = await getData();
      setForecastData(data);
      console.log("permission not granted");
    }
  };
  
  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <WeatherContext.Provider
      value={{ forecastData, error, isLoading, getData,searchForecastData, setSearchForecastData,setForecastData }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

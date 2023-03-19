import { createContext, useState } from "react";
import React from "react";

export const GeocodingContext = createContext();

export default function GeocodingContextProvider({ children }) {
  const [cityData, setCityData] = useState([]);
  const [cityName, setCityName] = useState("Rawalpindi");
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getCityData = async (city) => {
    console.log(city);
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const responseData = await response.json();
      setCityData(responseData.results);
      console.log(responseData);
      setIsLoading(false);
    } catch (e) {
      setError(e);
      console.log(e);
      setIsLoading(false);
    }
  };
  const reverseGeoCode = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );
      const data = await response.json();
      setCityName(data.city);
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <GeocodingContext.Provider
      value={{ getCityData, cityData, isLoading, setCityData,reverseGeoCode,cityName }}
    >
      {children}
    </GeocodingContext.Provider>
  );
}

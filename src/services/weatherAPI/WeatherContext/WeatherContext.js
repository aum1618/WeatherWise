import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const WeatherContext = createContext();

export default function WeatherContextProvider({ children }) {
  const [forecastData, setForecastData] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState();

  const getData = async () => {
    setIsLoading(true);
    await 
      fetch('https://api.weatherapi.com/v1/current.json?key=9357414232db496584d31327221812&q=Rawalpindi&aqi=yes')
      .then((response) => {
        setForecastData(response.json());
        console.log(forecastData);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e);
        console.log(e);
        setIsLoading(false);
      });
  };
  useEffect(()=>{
    getData()
  },[])
  return (
    <WeatherContext.Provider value={{ getData }}>
      {children}
    </WeatherContext.Provider>
  );
}

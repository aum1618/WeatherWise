import {  createContext } from "react";
import { Image, ImageBackground } from "react-native";

export const ImagesContext = createContext();

const weatherResources = {
  0: {
    name: "Clear sky",
    icon: require("../../../resources/weather-icons/png/sunny.png"),
    background: "sunny",
  },
  1: {
    name: "Mainly clear",
    icon: require("../../../resources/weather-icons/png/sunny_intervals.png"),
    background: "sky",
  },
  2: {
    name: "Partly cloudy",
    icon: require("../../../resources/weather-icons/png/white_cloud.png"),
    background: "sky",
  },
  3: {
    name: "Overcast",
    icon: require("../../../resources/weather-icons/png/black_low_cloud.png"),
    background: "cloudy",
  },
  45: {
    name: "Fog and depositing rime fog",
    icon: require("../../../resources/weather-icons/png/fog.png"),
    background: "mist",
  },
  51: {
    name: "Drizzle - Light intensity",
    icon: require("../../../resources/weather-icons/png/light_rain_showers.png"),
    background: "rain",
  },
  53: {
    name: "Drizzle - Moderate intensity",
    icon: require("../../../resources/weather-icons/png/light_rain_showers.png"),
    background: "drizzle",
  },
  55: {
    name: "Drizzle - Dense intensity",
    icon: require("../../../resources/weather-icons/png/heavy_rain_showers.png"),
    background: "rain",
  },
  56: {
    name: "Freezing drizzle - Light intensity",
    icon: require("../../../resources/weather-icons/png/sleet_showers.png"),
    background: "mist",
  },
  57: {
    name: "Freezing drizzle - Dense intensity",
    icon: require("../../../resources/weather-icons/png/sleet_showers.png"),
    background: "mist",
  },
  61: {
    name: "Rain - Slight intensity",
    icon: require("../../../resources/weather-icons/png/light_rain_showers.png"),
    background: "rain",
  },
  63: {
    name: "Rain - Moderate intensity",
    icon: require("../../../resources/weather-icons/png/light_rain_showers.png"),
    background: "cloudy",
  },
  65: {
    name: "Rain - Heavy intensity",
    icon: require("../../../resources/weather-icons/png/heavy_rain_showers.png"),
    background: "cloudy",
  },
  66: {
    name: "Freezing rain - Light intensity",
    icon: require("../../../resources/weather-icons/png/sleet_showers.png"),
    background: "mist",
  },
  67: {
    name: "Freezing rain - Heavy intensity",
    icon: require("../../../resources/weather-icons/png/sleet_showers.png"),
    background: "sleet",
  },
  71: {
    name: "Snow fall - Slight intensity",
    icon: require("../../../resources/weather-icons/png/light_snow_showers.png"),
    background: "snow",
  },
  73: {
    name: "Snow fall - Moderate intensity",
    icon: require("../../../resources/weather-icons/png/light_snow_showers.png"),
    background: "snow",
  },
  75: {
    name: "Snow fall - Heavy intensity",
    icon: require("../../../resources/weather-icons/png/heavy_snow_showers.png"),
    background: "snow",
  },
  77: {
    name: "Snow grains",
    icon: require("../../../resources/weather-icons/png/light_snow_showers.png"),
    background: "mist",
  },
  80: {
    name: "Rain Showers",
    icon: require("../../../resources/weather-icons/png/heavy_rain_showers.png"),
    background: "rain",
  },
  81: {
    name: "Rain Showers",
    icon: require("../../../resources/weather-icons/png/heavy_rain_showers.png"),
    background: "drizzle",
  },
  82: {
    name: "Rain Showers",
    icon: require("../../../resources/weather-icons/png/heavy_rain_showers.png"),
    background: "weather",
  },
  85: {
    name: "Snow Showers",
    icon: require("../../../resources/weather-icons/png/cloudy_with_light_snow.png"),
    background: "mist",
  },
  86: {
    name: "Snow Showers",
    icon: require("../../../resources/weather-icons/png/cloudy_with_light_snow.png"),
    background: "snow",
  },
  95: {
    name: "Thunderstorm",
    icon: require("../../../resources/weather-icons/png/thunderstorms.png"),
    background: "storm",
  },
  96: {
    name: "Thunderstorm",
    icon: require("../../../resources/weather-icons/png/thunderstorms.png"),
    background: "storm",
  },
  99: {
    name: "Thunderstorm",
    icon: require("../../../resources/weather-icons/png/thunderstorms.png"),
    background: "storm",
  },
};

const WeatherIcon=({cod=1})=>{
  return(
    <Image source={weatherResources[cod].icon} style={{height:32,width:32}} />
  )
}
const WeatherBackground=({code=3,children})=>{
  const image = {uri:`https://source.unsplash.com/random/?${weatherResources[code].background}/`};

  return(
    <ImageBackground source={image} style={{flex:1,height:'100%',width:'100%',}} resizeMode="cover">
      {children}
    </ImageBackground>
  )
}

export const ImagesContextProvider = ({ children }) => {
  return <ImagesContext.Provider value={{weatherResources,WeatherIcon,WeatherBackground}} >{children}</ImagesContext.Provider>;
};

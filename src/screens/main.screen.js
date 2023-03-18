import { ActivityIndicator, ScrollView, View } from "react-native";
import React, { useContext } from "react";
import { WeatherContext } from "../services/weatherAPI/WeatherContext/WeatherContext";
import { Text } from "../infrastructure/components/typography/Text";
import Header from "./mainScreenComponets/Header";
import { Wrapper } from "../infrastructure/components/wrappper/wrapper";
import TempCard from "./mainScreenComponets/TempCard";
import HourlyTempCard from "./mainScreenComponets/HourlyTempCard";
import moment from "moment/moment";

export default function MainScreen() {
  const { forecastData, isLoading } = useContext(WeatherContext);

  return (
    <Wrapper>
      {!isLoading && forecastData.timezone ? (
        <>
          <Header />
          <TempCard
            temp_c={forecastData.daily.temperature_2m_max[0]}
            feelsLike={forecastData.daily.apparent_temperature_max[0]}
          />
          <ScrollView horizontal={true} style={{marginHorizontal:20}} >
            {forecastData.hourly.temperature_2m.slice(0, 24).map((temp, i) => {
              return (
                <HourlyTempCard temp={temp} time={moment(forecastData.hourly.time[i]).format("HH:00")} key={i} />
              );
            })}
          </ScrollView>
        </>
      ) : (
        <ActivityIndicator size={50} animating={true} />
      )}
    </Wrapper>
  );
}

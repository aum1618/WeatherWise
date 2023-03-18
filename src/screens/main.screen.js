import {
  ActivityIndicator,
  Animated,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useRef, useState } from "react";
import { WeatherContext } from "../services/weatherAPI/WeatherContext/WeatherContext";
import { Text } from "../infrastructure/components/typography/Text";
import Header from "./mainScreenComponets/Header";
import { Wrapper } from "../infrastructure/components/wrappper/wrapper";
import TempCard from "./mainScreenComponets/TempCard";
import HourlyTempCard from "./mainScreenComponets/HourlyTempCard";
import moment from "moment/moment";
import ForecastCard from "./mainScreenComponets/ForecastCard";
import { Button } from "react-native-paper";

export default function MainScreen() {
  const { forecastData, isLoading } = useContext(WeatherContext);
  const [expanded, setExpanded] = useState(false);

  const scrollHeight = useRef(new Animated.Value(0)).current;

  const toggleExpanded = () => {
    if (expanded) {
      Animated.timing(scrollHeight, {
        toValue: 150,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpanded(false));
    } else {
      Animated.timing(scrollHeight, {
        toValue: 300, // set to the desired expanded height
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpanded(true));
    }
  };

  return (
    <Wrapper>
      {!isLoading && forecastData.timezone ? (
        <ScrollView>
          <Header />
          <TempCard
            temp_c={forecastData.daily.temperature_2m_max[0]}
            feelsLike={forecastData.daily.apparent_temperature_max[0]}
          />
          <ScrollView horizontal={true} style={{ marginHorizontal: 20 }}>
            {forecastData.hourly.temperature_2m.slice(0, 24).map((temp, i) => {
              return (
                <HourlyTempCard
                  temp={temp}
                  time={moment(forecastData.hourly.time[i]).format("HH:00")}
                  key={i}
                />
              );
            })}
          </ScrollView>
          <Animated.ScrollView
            style={{
              height: scrollHeight,
              marginHorizontal: 20,
            }}
          >
           {forecastData.daily.time.map((time,i)=>{
            return(
              <ForecastCard date={moment(time).format("DD/MM")} maxTemp={forecastData.daily.temperature_2m_max[i]} minTemp={forecastData.daily.temperature_2m_min[i]} key={i} />
            )
           })}
          </Animated.ScrollView>
          <Button onPress={toggleExpanded}>
            <Text>{expanded ? "Show Less" : "Show More"}</Text>
          </Button>
        </ScrollView>
      ) : (
        <ActivityIndicator
          size={50}
          animating={true}
          style={{ marginTop: 20 }}
        />
      )}
    </Wrapper>
  );
}

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
import DetailsGrid from "./mainScreenComponets/DetailsGrid/DetailsGrid";
import { GeocodingContext } from "../services/geocodingAPI/geocodingContext";

export default function MainScreen({navigation,route}) {
  const {cityName,cityData}=useContext(GeocodingContext)
  const { forecastData, isLoading } = useContext(WeatherContext);
  const [expanded, setExpanded] = useState(false);
  
  const name = route.params?.name; // use optional chaining to safely access route.params.name
  const headerName = name ? name : cityName; // set headerName to name if it exists, otherwise to cityName

  const scrollHeight = useRef(new Animated.Value(200)).current;

  const toggleExpanded = () => {
    if (expanded) {
      Animated.timing(scrollHeight, {
        toValue: 200,
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpanded(false));
    } else {
      Animated.timing(scrollHeight, {
        toValue: 400, // set to the desired expanded height
        duration: 300,
        useNativeDriver: false,
      }).start(() => setExpanded(true));
    }
  };

  return (
    <Wrapper>
      {!isLoading && forecastData.timezone ? (
        <ScrollView>
          <Header name={headerName} navigation={navigation} />
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
            {forecastData.daily.time.map((time, i) => {
              return (
                <ForecastCard
                  date={moment(time).format("DD/MM")}
                  maxTemp={forecastData.daily.temperature_2m_max[i]}
                  minTemp={forecastData.daily.temperature_2m_min[i]}
                  key={i}
                />
              );
            })}
          </Animated.ScrollView>
          <Button onPress={toggleExpanded}>
            <Text>{expanded ? "Show Less" : "Show More"}</Text>
          </Button>
          <DetailsGrid
            feelsLike={forecastData.daily.apparent_temperature_max[0]}
            precipitation={forecastData.hourly.precipitation_probability[0]}
            uv={forecastData.daily.uv_index_max[0]}
            humidity={forecastData.hourly.relativehumidity_2m[0]}
            pressure={forecastData.hourly.surface_pressure[0]}
            visibility={forecastData.hourly.visibility[0]}
          />
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

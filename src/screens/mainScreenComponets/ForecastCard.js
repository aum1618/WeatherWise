import { View } from "react-native";
import React, { useContext } from "react";
import { Text } from "../../infrastructure/components/typography/Text";
import { Spacer } from "../../infrastructure/components/spacer/spacer";
import { ImagesContext } from "../../services/ImagesContext/ImagesContext";

export default function ForecastCard({ date, day, minTemp, maxTemp,code }) {
  const {WeatherIcon}=useContext(ImagesContext)
  return (
    <View style={{ flexDirection: "row", height: 45, alignItems: "center" }}>
      <Text>{date}</Text>
      <Spacer position="left" size="large" />
      <Text>{day}</Text>
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}} ><WeatherIcon cod={code} /></View>
      <Text>{Math.round(minTemp)}</Text>
      <Spacer position="left" size="large" />
      <Text>{Math.round(maxTemp)}</Text>
    </View>
  );
}

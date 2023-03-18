import { View, Text } from "react-native";
import React from "react";
import DetailCard from "./DetailCard";

export default function DetailsGrid({feelsLike,humidity,pressure,visibility,precipitation,uv}) {
  return (
    <View style={{ margin: 10, padding: 10, backgroundColor: "yellow" }}>
      <View style={{ flexDirection: "row" }}>
        <DetailCard name="Feels Like" value={feelsLike} />
        <DetailCard name="humidity" value={humidity} />
        <DetailCard name="pressure" value={pressure} />
      </View>
      <View style={{flexDirection:"row"}} >
      <DetailCard name="visibility" value={visibility} />
      <DetailCard name="Rain" value={precipitation} />
      <DetailCard name="UV Strength " value={uv} />
      </View> 
    </View>
  );
}

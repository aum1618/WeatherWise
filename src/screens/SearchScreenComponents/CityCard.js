import React, { useContext } from "react";
import { View } from "react-native";
import { ImageBackground } from "react-native";
import { Card } from "react-native-paper";
import { Spacer } from "../../infrastructure/components/spacer/spacer";
import { Text } from "../../infrastructure/components/typography/Text";
import { GeocodingContext } from "../../services/geocodingAPI/geocodingContext";
import { ImagesContext } from "../../services/ImagesContext/ImagesContext";
import { WeatherContext } from "../../services/weatherAPI/WeatherContext/WeatherContext";



export default function CityCard({
  name,
  country,
  navigation,
  latitude,
  longitude,
  forecastData,index
}) {
  // const{setCityData}=useContext(GeocodingContext)
  const { weatherResources, WeatherIcon } = useContext(ImagesContext);
  const { getData,setSearchForecastData,setForecastData} = useContext(WeatherContext);
  const {setCityData}=useContext(GeocodingContext)

  const citName=name

  const handlePress = () => {
    getData(latitude, longitude);
    navigation.navigate("Main", { name: citName });
    setForecastData(forecastData)
    setSearchForecastData([])
    setCityData([])
  
  };
  const imageBackground = {
    uri: `https://source.unsplash.com/random/?${forecastData ? weatherResources[forecastData.daily.weathercode[0]]?.background:weatherResources[3].background}/`,
  };

  return (
    <Card
      style={{ margin: 20, height: 130, borderRadius: 20 }}
      onPress={handlePress}
      mode="elevated"
    >
      <ImageBackground
        source={imageBackground}
        style={{ height: "100%", width: "100%", justifyContent: "center" }}
        resizeMode="cover"
      >
        <Card.Content>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text variant="name">{name}</Text>
              <Spacer size="medium" />
              <Text>{country}</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <WeatherIcon cod={forecastData ? forecastData.daily.weathercode[0]:3} />
              <Spacer size="medium" />
              <Text>{forecastData ? weatherResources[forecastData.daily.weathercode[0]]?.name:weatherResources[3].name}</Text>
            </View>
          </View>
        </Card.Content>
      </ImageBackground>
    </Card>
  );
}

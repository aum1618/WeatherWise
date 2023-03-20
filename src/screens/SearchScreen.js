import { View, Text } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Wrapper } from "../infrastructure/components/wrappper/wrapper";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { GeocodingContext } from "../services/geocodingAPI/geocodingContext";
import { Spacer } from "../infrastructure/components/spacer/spacer";
import { ScrollView } from "react-native";
import CityCard from "./SearchScreenComponents/CityCard";
import { WeatherContext } from "../services/weatherAPI/WeatherContext/WeatherContext";

export default function SearchScreen({ navigation }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { getCityData, isLoading, cityData } = useContext(GeocodingContext);
  const { getData, searchForecastData, setSearchForecastData } =
    useContext(WeatherContext);
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);

  const handleSubmit = async () => {
    getCityData(searchTerm);
    console.log(searchTerm);
    setIsLoadingSearch(true);
    if (cityData) {
      const newData = [];
      for (const city of cityData) {
        const data = await getData(city.latitude, city.longitude);
        newData.push(data);
      }
      setSearchForecastData([...newData]);
      setIsLoadingSearch(false);
    }
  };
 
 
  return (
    <Wrapper style={{paddingTop:23}} >
      <Searchbar
        placeholder="Search for a city.."
        onChangeText={(e) => setSearchTerm(e)}
        value={searchTerm}
        style={{ margin: 20 }}
        onSubmitEditing={handleSubmit}
      />
      <Spacer size="large" />
      <ScrollView style={{ margin: 20 }}>
        {!isLoading && !isLoadingSearch ? (
          cityData &&
          cityData.map((city, i) => {
            return (
              <CityCard
                name={city.name}
                country={city.country}
                key={i}
                navigation={navigation}
                latitude={city.latitude}
                longitude={city.longitude}
                forecastData={searchForecastData[i]}
                index={i}
              />
            );
          })
        ) : (
          <ActivityIndicator size="large" animating={true} />
        )}
      </ScrollView>
    </Wrapper>
  );
}

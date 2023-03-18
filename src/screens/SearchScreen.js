import { View, Text } from "react-native";
import React, { useContext, useState } from "react";
import { Wrapper } from "../infrastructure/components/wrappper/wrapper";
import { ActivityIndicator, Searchbar } from "react-native-paper";
import { GeocodingContext } from "../services/geocodingAPI/geocodingContext";
import { Spacer } from "../infrastructure/components/spacer/spacer";
import { ScrollView } from "react-native";
import CityCard from "./SearchScreenComponents/CityCard";

export default function SearchScreen({navigation}) {
  const [searchTerm, setSearchTerm] = useState("");
  const {getCityData,isLoading,cityData}=useContext(GeocodingContext)

  const handleSubmit=()=>{
    getCityData(searchTerm)
    console.log(searchTerm)
  }
  return (
    <Wrapper>
      <Searchbar
        placeholder="Search for a city.."
        onChangeText={(e) => setSearchTerm(e)}
        value={searchTerm}
        style={{ margin: 20 }}
        onSubmitEditing={handleSubmit}
      />
      <Spacer size="large" />
      <ScrollView style={{margin:20}}>
        {!isLoading ?( cityData && cityData.map((city,i)=>{
          return(<CityCard name={city.name} country={city.country} key={i} navigation={navigation} latitude={city.latitude} longitude={city.longitude} /> )
        })):<ActivityIndicator size="large" animating={true} /> }
      </ScrollView>
    </Wrapper>
  );
}

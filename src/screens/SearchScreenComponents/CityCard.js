import React, { useContext } from 'react'
import { Card } from 'react-native-paper'
import { Spacer } from '../../infrastructure/components/spacer/spacer'
import { Text } from '../../infrastructure/components/typography/Text'
import { WeatherContext } from '../../services/weatherAPI/WeatherContext/WeatherContext'

export default function CityCard({name,country,navigation,latitude,longitude}) {
  const{getData}=useContext(WeatherContext)
 
 const handlePress=()=>{
    getData(latitude,longitude)
    navigation.navigate("Main",name)
 }
 
  return (
    <Card style={{margin:10,padding:10,backgroundColor:"black" }} onPress={handlePress} mode='elevated' >
        <Card.Content>
            <Text variant="name" >{name}</Text>
            <Spacer size="medium" />
            <Text>{country}</Text>
        </Card.Content>
    </Card>
  )
}
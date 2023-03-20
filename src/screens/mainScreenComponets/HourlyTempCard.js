import { View} from 'react-native'
import React, { useContext } from 'react'
import { Text } from '../../infrastructure/components/typography/Text'
import { IconButton } from 'react-native-paper'
import { Image } from 'react-native'
import { ImagesContext } from '../../services/ImagesContext/ImagesContext'

export default function HourlyTempCard({code,time}) {
  const {WeatherIcon}=useContext(ImagesContext)


  return (
    <View style={{width:50,height:100,flexDirection:"column",backgroundColor:"rgba(0,0,0,0.1)",alignItems:'center',justifyContent:'space-between',paddingVertical:10,marginHorizontal:5}}>
        <WeatherIcon cod={code} />
        <Text>{time}</Text>
    </View>
  )
}

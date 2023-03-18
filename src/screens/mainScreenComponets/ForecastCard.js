import { View } from 'react-native'
import React from 'react'
import { Text } from '../../infrastructure/components/typography/Text'
import { Spacer } from '../../infrastructure/components/spacer/spacer'

export default function ForecastCard({date,minTemp,maxTemp}) {
  return (
    <View style={{flexDirection:'row',height:45,alignItems:'center'}} >
      <Text style={{flex:1}} >{date}</Text>
      <Text>{Math.round(minTemp)}</Text>
      <Spacer position="left" size="large" />
      <Text>{Math.round(maxTemp)}</Text>
    </View>
  )
}
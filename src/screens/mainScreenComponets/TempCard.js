import { View } from 'react-native'
import React from 'react'
import { Text } from '../../infrastructure/components/typography/Text'

export default function TempCard({temp_c,feelsLike}) {
  return (
    <View style={{justifyContent:'center',alignItems:'center',height:380,backgroundColor:'green',margin:20}}>
      <View style={{flexDirection:'row',height:130}} >
    <View>
      <Text variant="massive">{Math.round(temp_c)}</Text>
      </View>
      <View style={{paddingTop:40}} >
        <Text variant="title" style={{color:"gray"}}>°C</Text>
      </View>
      </View>
      <View style={{marginRight:20,marginTop:10}} >
        <Text>feels like {feelsLike}°C</Text>
      </View>
    </View>
  )
}
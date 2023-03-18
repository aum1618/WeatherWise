import { View} from 'react-native'
import React from 'react'
import { Text } from '../../infrastructure/components/typography/Text'

export default function HourlyTempCard({temp,time}) {
  return (
    <View style={{width:50,height:100,flexDirection:"column",backgroundColor:"blue",alignItems:'center',justifyContent:'space-between',paddingVertical:10,marginHorizontal:5}}>
        <Text>{temp}</Text>
        <Text>{time}</Text>
    </View>
  )
}
import { View} from 'react-native'
import React from 'react'
import { Text } from '../../infrastructure/components/typography/Text'
import styled from 'styled-components'
import { IconButton } from 'react-native-paper'


const HeaderView=styled(View)`
display: flex;
flex-direction: row;
align-items: center;
margin-top: 10px;
margin-left: 20px;
margin-right: 20px;
`
const TextView=styled(View)`
flex: 1;
`

export default function Header({navigation,name="Rawalpindi"}) {
  return (
    <HeaderView>
      <TextView>
      <Text variant="name">{name}</Text>
      </TextView>
      <IconButton icon="adjust" iconColor='white' size={30} onPress={()=>{navigation.navigate("Search");console.log("navigated successfully")}} />
      <IconButton icon="dots-vertical" iconColor='white' size={30} />
    </HeaderView>
  )
}
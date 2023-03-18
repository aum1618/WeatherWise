import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import MainScreen from '../../screens/main.screen'
import SearchScreen from '../../screens/SearchScreen'

export const MainStackNavigator=createStackNavigator()

export default function MainNavigater() {
  return (
   <NavigationContainer>
    <MainStackNavigator.Navigator screenOptions={{headerShown:false}} >
        <MainStackNavigator.Screen name='Main' component={MainScreen} />
        <MainStackNavigator.Screen name='Search' component={SearchScreen} />
    </MainStackNavigator.Navigator>
   </NavigationContainer>
  )
}
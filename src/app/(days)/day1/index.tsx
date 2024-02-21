import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function DayDetailsScreen() {
  return (
    <View>
        <Stack.Screen options={{title:'Day1'}}/>
      <Text>Day Details Screen</Text>
    </View>
  )
}
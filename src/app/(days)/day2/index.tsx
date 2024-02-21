import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack,Link } from 'expo-router'

export default function index() {
  return (
    <View>
        <Stack.Screen options={{title:"Day 2:Onboaridng"}}/>
      <Text>Onboarding Detals screen</Text>
        <Link href={"/day2/onboarding"} asChild>
      <Button title='Go to onBorading'/>
      </Link>
    </View>
  )
}
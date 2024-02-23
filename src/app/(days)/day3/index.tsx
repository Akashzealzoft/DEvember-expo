import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack,Link } from 'expo-router'

export default function index() {
  return (
    <View>
        <Stack.Screen options={{title:"Day 2:Splash screen"}}/>
      <Text>Onboarding Detals screen</Text>
        <Link href={"/day3/animation"} asChild>
          <Button title='Go to splash screen'/>
      </Link>

      <Link href={"/day3/splash"} asChild>
          <Button title='Go to splash screen'/>
      </Link>
    </View>
  )
}
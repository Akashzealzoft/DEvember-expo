import { View, Text, Button } from 'react-native'
import React, { useRef } from 'react'
import { Stack } from 'expo-router'
import LottieView from 'lottie-react-native'

export default function animation() {

    const animation = useRef<LottieView>(null)
  return (
    <View>
        <Stack.Screen options={{title:"Splash screen"}}/>
        <LottieView
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#eee',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('@assets/lottie/netflix.json')}
      />

      <Button title='Play' onPress={()=>{animation.current?.play()}}/>
    </View>
  )
}
import { View, Text, Button } from 'react-native'
import React, { useRef } from 'react'
import { Stack } from 'expo-router'
import LottieView from 'lottie-react-native'

export default function Splash() {

    const animation = useRef<LottieView>(null)
  return (
    <View style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: '#000',
    }}>
        <Stack.Screen options={{title:"Splash screen",headerShown:false}}/>
        <LottieView
        // autoPlay
        ref={animation}
        style={{
            width:300,
            height:300,
          backgroundColor: '#000',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('@assets/lottie/netflix.json')}
      />

    </View>
  )
}
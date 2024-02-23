import { View, Text, Button } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native'
import Animated from 'react-native-reanimated'
import { FadeOut } from 'react-native-reanimated'

export default function Animatesplashscreen({onAnimationFinish = (isCancelled)=>{}}:{onAnimationFinish : (isCancelled:boolean)=>void}) {





const animation = useRef<LottieView>(null)
    console.log("im the animatoon")
  return (
    <Animated.View
    exiting={FadeOut} 
    style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: '#000',
    }}>
        <LottieView
      
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        loop={false}
        autoPlay
        style={{
            width:300,
            height:300,
          backgroundColor: '#000',
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('@assets/lottie/netflix.json')}
      />

    </Animated.View>
  )
}
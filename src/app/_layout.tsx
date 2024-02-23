import { Stack } from "expo-router"
import { useEffect, useState } from "react"
import { useFonts, Inter_900Black,Inter_400Regular } from '@expo-google-fonts/inter';
import { NanumPenScript_400Regular } from '@expo-google-fonts/nanum-pen-script';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Animatesplashscreen from "@/components/coreComponnents/day3/Animatesplashscreen";
import Animated, { FadeIn } from "react-native-reanimated";

export default function RootLayout(){

  const [appReady,setappReady] = useState(false)
  const [splashAnimationFinish,setsplashAnimationFinish] = useState(false)


    const [fontsLoaded, fontError]=useFonts({
        Inter:Inter_900Black,
        regular:Inter_400Regular,
        PenScript:NanumPenScript_400Regular
      })
  
      
  
      useEffect(()=>{
        if (fontsLoaded || fontError) {
          //SplashScreen.hideAsync()
          setappReady(true)
         }
      },[fontsLoaded,fontError])
  
  
      console.log(appReady)
  
      if (!appReady || !splashAnimationFinish) {
          console.log("app Ready")
          return <Animatesplashscreen onAnimationFinish={(isCancelled)=>{
            if(!isCancelled){
              setsplashAnimationFinish(true)
            }
          }}/>
       }
    return (
      <Animated.View style={{flex:1}} entering={FadeIn}>
    <GestureHandlerRootView style={{flex:1}}>
      <Stack/>
    </GestureHandlerRootView>
    </Animated.View>)
}
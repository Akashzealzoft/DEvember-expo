import { Stack } from "expo-router"
import { useEffect } from "react"
import { useFonts, Inter_900Black,Inter_400Regular } from '@expo-google-fonts/inter';
import { NanumPenScript_400Regular } from '@expo-google-fonts/nanum-pen-script';
import * as SplashScreen from 'expo-splash-screen';


export default function RootLayout(){
    const [fontsLoaded, fontError]=useFonts({
        Inter:Inter_900Black,
        regular:Inter_400Regular,
        PenScript:NanumPenScript_400Regular
      })
  
      
  
      useEffect(()=>{
        if (fontsLoaded || fontError) {
          SplashScreen.hideAsync()
         }
      },[fontsLoaded,fontError])
  
  
  
      if (!fontsLoaded && !fontError) {
          return null
       }
    return <Stack/>
}
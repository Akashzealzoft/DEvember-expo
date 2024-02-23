import { View, Text,StyleSheet ,SafeAreaView,Pressable} from 'react-native'
import React, { useState } from 'react'
import { Link, Stack,router } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Gesture } from 'react-native-gesture-handler';
import { Directions } from 'react-native-gesture-handler';
import { GestureDetector } from 'react-native-gesture-handler';
import Animated, { SlideInLeft } from 'react-native-reanimated';
import { FadeIn,FadeOut,BounceInRight,BounceInLeft,BounceOutLeft } from 'react-native-reanimated';



const onboardingSteps = [{
    icon:"people-arrows",
    title:"onboarding",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea quisquam dicta et explicabo autem perspiciatis corporis, repellat laudantium aperiam odio quis recusandae iusto consequuntur iure id exercitationem. Molestias, optio",

},
{
    icon:"icons",
    title:"onboarding-screeen2",
    description:"Learn and grow with expo",

},
{
    icon:"accessible-icon",
    title:"onboarding-screen3",
    description:"May code be with you uuntur iure id exercitationem. Molestias, optio",
}
]

export default function onboarding() {
    const [screenIndex,setscreenIndex] = useState(0)

    const data = onboardingSteps[screenIndex]
  
    const onContinue = ()=>{
        const isLastScreen = screenIndex === onboardingSteps.length-1
        if(isLastScreen){
            onBoarding()
        }else{
        setscreenIndex(screenIndex+1)

        }
    }

    function onHit(){
        setscreenIndex(screenIndex+1)
    }


    const onBack = ()=>{
        const isFirstScreen = screenIndex == 0
        if(isFirstScreen){
            onBoarding()

        }else{
            setscreenIndex(screenIndex-1)
        }
    }

    const onBoarding = ()=>{
        setscreenIndex(0)
        router.back()
    }

    const swipeForward = Gesture.Fling()
    .runOnJS(true)
    .direction(Directions.LEFT)
    .onEnd((event)=>{
        try {
            onContinue()
    
            }   
         catch (error) {
            console.error("error is swiper",error)
        }

 
     })
 
     const swipeBackward = Gesture.Fling()
     .runOnJS(true)
     .direction(Directions.RIGHT)
     .onEnd((event)=>{
        try {
             onBack()
        } catch (error) {
            console.error("error is swiper",error)
        }
       
        
 
     })

    const swipes = Gesture.Simultaneous(swipeForward,swipeBackward)

  return (
    <SafeAreaView style={style.page}>
        <Stack.Screen  options={{headerShown:false}}/>
        <StatusBar style='light'/>
        <GestureDetector gesture={swipes}>
        <View
        key={screenIndex}
        style={style.pageContent}>
            <View style={style.stepIndicatorContainer}>
                {onboardingSteps.map((e,i)=>(

                <View key={i} style={[style.stepIndicator,{backgroundColor:i==screenIndex?"#CEF202":"grey"}]}/>
                ))}


            </View>
        <Animated.View entering={FadeIn} exiting={FadeOut}>
                 <FontAwesome6 style={style.image} name={data.icon} size={100} color="#CEF202" />
        </Animated.View>
      <View style={style.footer}>
      <Animated.Text entering={SlideInLeft}style={style.title}>{data.title}</Animated.Text>
      <Animated.Text  entering={SlideInLeft.delay(200)} style={style.description}>{data.description}</Animated.Text>
      </View>
        <View style={style.buttonsrow}>
        <Text style={style.buttonText} onPress={onBoarding}>Skip</Text>
       
                <Pressable style={style.button} onPress={onContinue}>
                    <Text style={style.buttonText}>Continue</Text>
                </Pressable>
        </View>
        </View>
        </GestureDetector>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    page:{
        //alignItems:'center',
        justifyContent:"center",
        flex:1,
        backgroundColor:"#15141A",
      
    },
    pageContent:{
        padding:20,
        flex:1
    },
    image:{
        alignSelf:"center"
    },
    title:{
        color:'#FDFDFD',
        fontSize:50,
        fontFamily:"Inter",
        letterSpacing:2,
        marginVertical:20
    },
    description:{
        color:'grey',
        fontSize:20,
        fontFamily:"regular",
        lineHeight:25
    },
    stepIndicator:{
       flex:1,height:3,
       backgroundColor:"gray",
        margin:5,
        borderRadius:10

    },
    footer:{
        marginTop:"auto"
    },
    button:{
        backgroundColor:'#302E38',
        padding:15,
        borderRadius:20,
        alignItems:'center',
        flex:1
            
    },
    buttonsrow:{
        padding:15,
        marginTop:20,
        flexDirection:"row",
        alignItems:"center",
        gap:20
    },
    buttonText:{
        color:"#FDFDFD",
        fontFamily:"regular",
        
        paddingHorizontal:25
    },
    stepIndicatorContainer:{
            flexDirection:'row',
            gap:5
    }
})
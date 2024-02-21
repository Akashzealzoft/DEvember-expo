import { View, Text,StyleSheet ,SafeAreaView,Pressable} from 'react-native'
import React, { useState } from 'react'
import { Link, Stack,router } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons';



const onboardingSteps = [{
    icon:"people-arrows",
    title:"onboarding",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ea quisquam dicta et explicabo autem perspiciatis corporis, repellat laudantium aperiam odio quis recusandae iusto consequuntur iure id exercitationem. Molestias, optio",

},
{
    icon:"people-arrows",
    title:"onboarding-screeen2",
    description:"Learn and grow with expo",

},
{
    icon:"people-arrows",
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
            onboarding()
        }else{
        setscreenIndex(screenIndex+1)

        }
    }

    const onboarding = ()=>{
        setscreenIndex(0)
        router.back()
    }


  return (
    <SafeAreaView style={style.page}>
        <Stack.Screen  options={{headerShown:false}}/>
        <View style={style.pageContent}>
        <FontAwesome6 style={style.image} name={data.icon} size={100} color="#CEF202" />

      <View style={style.footer}>
      <Text style={style.title}>{data.title}</Text>
      <Text style={style.description}>{data.description}</Text>
      </View>
        <View style={style.buttonsrow}>
        <Text style={style.buttonText} onPress={onboarding}>Skip</Text>
       
                <Pressable style={style.button} onPress={onContinue}>
                    <Text style={style.buttonText}>Continue</Text>
                </Pressable>
        </View>
      </View>
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
    }
})
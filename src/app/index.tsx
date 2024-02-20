import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList, ActivityIndicator } from 'react-native';
import DayListItem from '../components/coreComponnents/DayListItem';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NanumPenScript_400Regular } from '@expo-google-fonts/nanum-pen-script';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

const days = [...Array(24)].map((val,index)=>index+1)

export default function HomeScreen() {
    const [fontsLoaded, fontError]=useFonts({
      Inter:Inter_900Black,
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

  return (
    <View style={styles.container}>
       
        <FlatList
          data={days}
          contentContainerStyle={styles.content}
          numColumns={2}
          columnWrapperStyle={styles.column}
          renderItem={
            ({item})=><DayListItem day={item}/>
          }
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    
  },
  boxContainer:{
    backgroundColor:'#F9EDE3',
    flex:1,
    aspectRatio:1,
    borderColor:'#9b4521',
    borderRadius:20,
    borderWidth:StyleSheet.hairlineWidth,
    justifyContent:"center",
    alignItems:"center"
  },
  text:{
    color:'#9B4521',
    fontSize:70
  },
  content:{
    gap:10,
    padding:10,
  },
  column:{
    gap:10
  }
});

import { Text,View,StyleSheet } from "react-native"


type DayListItem = {
    day:number
}


function DayListItem({day}:DayListItem){
    return(
    <View style={styles.boxContainer}>
        <Text style={styles.text}>{day}</Text>
    </View>
    )
}

export default DayListItem

const styles = StyleSheet.create({
  
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
   
  });
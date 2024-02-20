import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import DayListItem from './src/components/coreComponnents/DayListItem';
const days = [...Array(24)].map((val,index)=>index+1)

export default function App() {
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

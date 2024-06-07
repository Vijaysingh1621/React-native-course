import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const _layout = () => {
  return (
    
    <View style={styles.container}>
      <Text style={styles.text} >hii vijay ! wanna order a pizza?</Text>
      <button  style={styles.btn}>order me</button>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center",
    
  },
  text:{
    fontSize:"25px",
    color:"white",
  },
  btn:{
    height:"50px",
    width:"90px",
    borderRadius:"5px",
    backgroundColor:"grey",
    marginTop: "20px",
  }
});

export default _layout
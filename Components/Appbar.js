import { AppBar } from '@react-native-material/core'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Image, SocialIcon} from 'react-native-elements'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { SafeAreaView } from 'react-navigation'
function Appbar() {
  return (
    <View style = {styles.all}>
      <SafeAreaView>
          <AppBar
          style = {styles.AppBar}
          titleStyle = {styles.AppBar}
          leading = {<Image style = {{backgroundColor: 'transparent', height: 20, width: 25}} source={require('../assets/Icons/menu.png')}/>}
          trailing = {<Image style = {{backgroundColor: 'transparent', height: 40, width: 40, borderRadius:50}} source={require('../assets/Images/Profile-photo.jpg' )}/>}
          />
 
      </SafeAreaView>
    </View>


  )
}

export default Appbar

const styles = StyleSheet.create({
  all:{
    backgroundColor: 'white',    
    color: 'black'
  },  
  AppBar:{
    // backgroundColor: '#fefefe',
      backgroundColor: 'white',
    color: 'black',
    paddingHorizontal: 30,
    height: 60,
    display:'flex',
    flexDirection:'com',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'blue',
    paddingHorizontal: 30,
  },  

})
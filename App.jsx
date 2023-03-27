import { useDeviceOrientation } from '@react-native-community/hooks';
import { StyleSheet, Text, Dimensions,  TouchableWithoutFeedback, View, Alert, SafeAreaView, Image, TouchableOpacity, StatusBar, TouchableHighlight, Button, Platform } from 'react-native';
import Signin from './Features/Signin';
import * as Font from 'expo-font'
import { useEffect, useState } from 'react';
import SignUp from './Features/Signup';
import MyStack from './MyStack';
import { NavigationContainer } from '@react-navigation/native';
import Appbar from './Components/Appbar';
import Bottombar from './Components/Bottombar';

 export default function App() {

  const {landscape} = useDeviceOrientation()
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    async function loadFonts(){
      await Font.loadAsync({
        poppinsLight: require('./assets/Fonts/Poppins-Light.ttf'),
        poppinsBold: require('./assets/Fonts/Poppins-Bold.ttf'),
        poppinsRegular: require('./assets/Fonts/Poppins-Regular.ttf'),
      });
      setLoaded(true)
    }
    loadFonts();
  },[]);
  if(!loaded){
  return null
  }
  return (
    <>
        <NavigationContainer>
          <MyStack/>
        </NavigationContainer>
        {/* <Bottombar/> */}
    </>
    
      // <Appbar/>
    
    );
  }
  













//bASICS
// <SafeAreaView style={styles.container}>
//   <Text>Hello React World</Text>
//   <TouchableHighlight>
//     <Image blurRadius={0} source = {{
  //       width:200,
  //       height: 300,
//       uri: 'https://images.pexels.com/photos/3938465/pexels-photo-3938465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//       }}/>

//   </TouchableHighlight>
//   <Button title='hello' color={'red'} onPress={() => { Alert.prompt('My Title', 'My Message', text =>{
  //     console.log(text)
// })}}/>
// </SafeAreaView>

//ORIENTATIONS
// <SafeAreaView>
//   <View style = {{backgroundColor: 'green', height: useDeviceOrientation() === 'landscape'? '100%': '50%', width: '10%'}}>

//   </View>
// </SafeAreaView>
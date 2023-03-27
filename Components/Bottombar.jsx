import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react'
import { Image } from 'react-native';
import Community from './Community';
import Home from './Home';
import SelfCare from './SelfCare';
import Profile from './SelfCare';
import Settings from './Settings';
const Tab = createBottomTabNavigator();
function Bottombar() {
  const navigate = useRoute();
  // const currentScreen = navigate.name
  // console.log(currentScreen)
  return (
    <Tab.Navigator
      screenOptions={({ route }) => (        
        {
          tabBarStyle:[
            {
              backgroundColor:'white'
            }
          ],
        tabBarIcon: ({ color, size }) => {
          let iconPath;

          if (route.name === 'Home') {
            iconPath = require('../assets/Icons/home.png');
          } else if (route.name === 'Therapist') {
            iconPath = require('../assets/Icons/chat.png');
          } else if (route.name === 'My pal') {
            iconPath = require('../assets/Icons/settings.png');
          }
          

          return <Image  source ={iconPath} style = {{height: 30, width: 30}}/>;
        },
      })}

    >
        <Tab.Screen name="Home" component={Home} options = {{headerShown:false}}/>
        <Tab.Screen name="Therapist" component={SelfCare} options = {{headerShown:false}}/>
        <Tab.Screen name="My pal" component={Settings}options = {{headerShown:false}} />
    </Tab.Navigator>
      
  )
}

export default Bottombar

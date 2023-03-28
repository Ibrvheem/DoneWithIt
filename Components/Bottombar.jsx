import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import Community from './Community';
import Home from './Home';
import MypalChat from './MypalChat';
import Settings from './Settings';
import SelfCare from './TherapistChat';

const Tab = createBottomTabNavigator();

function Bottombar() {
  const navigation = useNavigation();
  const navigate = useRoute();
  const [showPopup, setShowPopup] = useState(false); // state for controlling the popup visibility

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: [
          {
            backgroundColor: 'white'
          }
        ],
        tabBarButton: ({ onPress, accessibilityLabel }) => {
          let iconPath;

          if (route.name === 'Home') {
            iconPath = require('../assets/Icons/home.png');
          } else if (route.name === 'Settings') {
            iconPath = require('../assets/Icons/settings.png');
          } else if (route.name === 'Therapist') {
            iconPath = require('../assets/Icons/chat.png');

            // Render a custom tab button for the "Therapist" tab
            return (
              <TouchableOpacity
                onPress={() => setShowPopup(!showPopup)}
                accessibilityLabel={accessibilityLabel}
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image source={iconPath} style={{ height: 30, width: 30 }} />
                {showPopup && (
                  <View
                    style={{
                      position: 'absolute',
                      bottom: 80,
                      right: -10,
                      display:'flex',
                      flexDirection: 'row',
                      gap: 20
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        setShowPopup(false);
                        navigation.navigate('therapistchat')
                      }}
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'white',
                        borderColor: 'black',
                        borderWidth: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius:50,
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowRadius: 50,

                      }}
                    >
                      <Image source = {require('../assets/Icons/consultation.png')} style = {{height: 35, width: 35}}/>

                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        setShowPopup(false);
                          navigation.navigate('mypalchat')
  
                        
                        // Do something else when the "Other Option" option is pressed
                      }}
                      style={{
                        height: 70,
                        width: 70,
                        backgroundColor: 'white',
                        borderColor: 'black',
                        borderWidth: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius:50,
                        shadowColor: '#000',
                        shadowOpacity: 0.1,
                        shadowRadius: 50,
                    


                      }}
                    >
                        <Image source = {require('../assets/Icons/bot.png')} style = {{height: 35, width: 35}}/>
                    </TouchableOpacity>
                  </View>
                )}
              </TouchableOpacity>
            );
          } else if (route.name === 'My pal') {
            iconPath = require('../assets/Icons/settings.png');
          }

          return (
            <TouchableOpacity
              onPress={onPress}
              accessibilityLabel={accessibilityLabel}
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image source={iconPath} style={{ height: 30, width: 30 }} />
            </TouchableOpacity>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Therapist" component={SelfCare} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
</Tab.Navigator>
);
}

export default Bottombar;

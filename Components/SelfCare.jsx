import React from 'react'
import { FlatList, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Appbar from './Appbar';
import ChatMessage from './ChatMessage';

const messages = [
  {
    id: '1',
    sender: 'You',
    content: 'Hello',
    timestamp: '10:00 AM',
  },
  {
    id: '2',
    sender: 'My pal',
    content: 'Hi there!. How are you feeling today?',
    timestamp: '10:02 AM',
  },
  {
    id: '1',
    sender: 'You',
    content: 'I dont feel so good.',
    timestamp: '10:00 AM',
  },
  {
    id: '2',
    sender: 'My pal',
    content: 'What is wrong?',
    timestamp: '10:02 AM',
  },
  {
    id: '1',
    sender: 'You',
    content: 'I thought of my dog that died last week and i felt really bad and every cried',
    timestamp: '10:00 AM',
  },
  {
    id: '2',
    sender: 'My pal',
    content: 'So, you cried becase of a dog?! Go and get another one God dammit!',
    timestamp: '10:02 AM',
  },
  {
    id: '1',
    sender: 'You',
    content: 'Nice idea! Thanks. You are very helpful',
    timestamp: '10:02 AM',
  },  
  {
    id: '2',
    sender: 'My pal',
    content: 'You are welcome, happy to help!',
    timestamp: '10:02 AM',
  },

  // ...
];
function SelfCare() {
  
  return (
  <KeyboardAwareScrollView>
    <ScrollView vertical = {true}style = {{ backgroundColor: '#090E16'}}>
      <View style = {styles.all}>
        {/* <Appbar/> */}

        <View style = {styles.body}>
          <SafeAreaView>
            <View style = {{display:'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 30, height: 60}}>
              <View style = {{display: 'flex',flexDirection:'row', alignItems:'center', gap: 8}}>
                  <Image source = {require('../assets/Images/Profile-photo.jpg')} style = {{height: 40, width: 40, borderRadius: 30}}/>
                  <Text style = {[styles.mediumText]}>Dr. Aisha Auwal</Text>
              </View>
              <TouchableOpacity>
                <View>
                <Image source = {require('../assets/Icons/cam-recorder.png')} style = {{height: 35, width: 35, borderRadius: 30}}/>
                </View>

              </TouchableOpacity>
            </View>
              <FlatList                  
                data={messages}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ChatMessage message={item} />}
              />
          </SafeAreaView>
          <SafeAreaView>
              <TextInput style = {styles.input} placeholderTextColor = 'rgba(0,0,0,.6)' placeholder="Your Message ..."/>
          </SafeAreaView>
        </View>

      </View>
    </ScrollView>
  </KeyboardAwareScrollView>
  )
}
const styles = StyleSheet.create({
  all:{
      fontFamily: 'poppinsLight',
      color: '#ffffff',

  },
  body:{
      paddingHorizontal: 30,
      backgroundColor: 'white',
      height: 820,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
  }, 
  mediumText:{
    fontSize: 25,
  },
  input:{
    width: '100%',
    paddingHorizontal: 20,
    // marginBottom: 300,
    height:50,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0, 1)',
    fontFamily: 'poppinsRegular',
  },
  FlatList:{
    backgroundColor: 'red'
  },
  keyboardContainer:{
    padding: 100,
  } 


})


export default SelfCare

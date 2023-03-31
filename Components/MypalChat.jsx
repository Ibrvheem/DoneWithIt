import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FlatList, Image, KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Appbar from './Appbar';
import ChatMessage from './ChatMessage';


function MypalChat({navigation}) {
  
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');
  const [message, seMessage] = useState({role: 'user', content: ''});
  
  const api = "https://api.mypal.itcentral.ng"

  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if(token){
        setToken(token)
        fetch(`${api}/chats?role=assistant`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        .then(response => {
          if(response.status === 200){
            response.json().then(data => {
              setMessages(data.chats)
            })
          }
        })
      }
    })
  }, [])
  
  const onSendPress = () => {
    setMessages([...messages, message])
    fetch(`${api}/chat`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(
        {
          message
        }
      )
    })
    .then(response => {
      if(response.status === 201){
        response.json().then(data => {
          setMessages([...messages, data.chat])
          seMessage('')
        })
      }else{
        // setError(true)
        navigation.navigate('signin')
      }
    })
  }

  
  return (
  <KeyboardAwareScrollView>
    <ScrollView vertical = {true}style = {{ backgroundColor: '#090E16'}}>
      <View style = {styles.all}>
        {/* <Appbar/> */}

        <View style = {styles.body}>
          <SafeAreaView>
          <View style = {{display:'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 30, height: 60}}>
                <TouchableOpacity style = {{display: 'flex',flexDirection:'row', alignItems:'center', gap: 8}} onPress={()=>{
                  navigation.navigate('Bottombar')
                }}>
                  <Image source = {require('../assets/Icons/back.png')} style = {{height: 20, width: 20, borderRadius: 30}}/>
                  <Image source = {require('../assets/Images/Profile-photo.jpg')} style = {{height: 40, width: 40, borderRadius: 30}}/>
                </TouchableOpacity>
              <TouchableOpacity>
                <View>
                <Text style = {[styles.mediumText]}>MyPal</Text>
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
              <TextInput style = {styles.input} placeholderTextColor = 'rgba(0,0,0,.6)' placeholder="Your Message ..." value = {message.content} onChangeText = {(text) => seMessage({role: 'user', content: text, 'created_at': new Date()})} onSubmitEditing={onSendPress}/>
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


export default MypalChat

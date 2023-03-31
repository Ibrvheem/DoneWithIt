import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ChatMessage = ({ message }) => {

  function formatTime(datetimeString) {
    const date = new Date(datetimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    const formattedTime = `${formattedHours}:${formattedMinutes}${ampm}`;
    return formattedTime;
  }
  

  return (
    <View style = {{display: 'flex', flexDirection: message.role == 'user'? 'row-reverse' : 'row', gap: 5, width: '100%'}}>
        <Image style = {{backgroundColor: 'transparent', height: 40, width: 40, borderRadius:50}} source={require('../assets/Images/Profile-photo.jpg' )}/>
    <View style={[styles.container,{backgroundColor: message.role == 'user'? '#ADD8E6': '#D3E8D3', flexDirection: message.role == 'user'? 'row-reverse': 'row', borderBottomRightRadius: message.role == 'user'? 0:null, borderBottomLeftRadius: message.role == 'assistant'? 0:null }]}>
        <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        </View>
      <View style = {{ width: '100%',display: 'flex', justifyContent: 'center', alignItems: message.role == 'user'? 'flex-end' : 'flex-start'}}> 
          <Text style={styles.content}>{message.content}</Text>
          <Text style={styles.timestamp}>{formatTime(message.created_at)}</Text>

      </View>

    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 18,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: 'white',
    display: 'flex',
    flex: '1',
    justifyContent: 'space-between'


  },
  sender: {
    fontWeight: 'bold',
    paddingLeft: 10,
    color: 'white',
  },
  content: {
    color: 'white',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
});

export default ChatMessage;

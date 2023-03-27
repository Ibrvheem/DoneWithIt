import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const ChatMessage = ({ message }) => {
  return (
    <View style = {{display: 'flex', flexDirection: message.sender == 'You'? 'row-reverse' : 'row', gap: 5, width: '100%'}}>
        <Image style = {{backgroundColor: 'transparent', height: 40, width: 40, borderRadius:50}} source={require('../assets/Images/Profile-photo.jpg' )}/>
    <View style={[styles.container,{backgroundColor: message.sender == 'You'? '#ADD8E6': '#D3E8D3', flexDirection: message.sender == 'You'? 'row-reverse': 'row', borderBottomRightRadius: message.sender == 'You'? 0:null, borderBottomLeftRadius: message.sender == 'My pal'? 0:null }]}>
        <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        </View>
      <View style = {{ width: '100%',display: 'flex', justifyContent: 'center', alignItems: message.sender == 'You'? 'flex-end' : 'flex-start'}}> 
          <Text style={styles.content}>{message.content}</Text>
          <Text style={styles.timestamp}>{message.timestamp}</Text>

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

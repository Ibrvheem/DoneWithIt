import AsyncStorage from '@react-native-async-storage/async-storage'
import { Surface } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView, Text, View } from 'react-native'
import Bottombar from './Bottombar'


function Home({navigation}) {
  const [activeSpaces, setActivespaces] = useState([])
  const [speakRequest, setSpeakRequest] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [upcomingSpaces, setUpcomingspaces] = useState([])
  const [user, setUser] = useState({})
  const [token, setToken] = useState("")

  const api = "https://api.mypal.itcentral.ng";

  const  formatDate = (dateString) =>{
    const date = new Date(dateString);
    const day = date.getDate();
    const month = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(date);
    const year = date.getFullYear();
  
    const suffix = (() => {
      if (day === 1 || day === 21 || day === 31) {
        return 'st';
      } else if (day === 2 || day === 22) {
        return 'nd';
      } else if (day === 3 || day === 23) {
        return 'rd';
      } else {
        return 'th';
      }
    })();
  
    const formattedDate = `${day}${suffix} ${month}, ${year}`;
    return formattedDate;
  }

  const formatTime = (datetimeString) =>{
    const date = new Date(datetimeString);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    const formattedTime = `${formattedHours}:${formattedMinutes}${ampm}`;
    return formattedTime;
  }
  
  

  useEffect(()=>{
    AsyncStorage.getItem('user')
      .then(user => setUser(JSON.parse(user)))
  },[])

  useEffect(()=>{
    AsyncStorage.getItem('token')
      .then(token => {
        setToken(token);
        // fetch active spaces
  fetch(`${api}/spaces`, {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${token}`
    },
  })
    .then(response => response.json())
      .then(data => setActivespaces(data.spaces))

  // fetch upcoming spaces
    fetch(`${api}/spaces?filter=upcoming`, {
      method: 'GET',
      headers: {
          'Authorization': `Bearer ${token}`
      },
    }
    
)
      .then(response => response.json())
        .then(data => setUpcomingspaces(data.spaces))
      }
        )
  },[])


  return (
    <>
    
      <View style = {[styles.home, {opacity: modalVisible? 0.2: 1}]}>
        <SafeAreaView style = {styles.homeContainer}>

          
          <View style = {{display:'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 30}}>
            <View>
              <Text style = {styles.extraSmallText}>Hello!</Text>
              <Text style = {[styles.mediumText, {opacity: .5}]}>{user?.name}</Text>
            </View>
            <View>
                <Image source = {require('../assets/Images/Profile-photo.jpg')} style = {{height: 50, width: 50, borderRadius: 30}}/>
            </View>
          </View>
          <View>
            <View>
                <Text style = {styles.smallText}>Happening Now</Text>
            </View>
            <ScrollView horizontal = {true} showsHorizontalScrollIndicator = {false} >
                {
                  !activeSpaces? <Text style = {[styles.mediumText, {opacity: .5}]}>No active spaces</Text>:
                  activeSpaces?.map((space)=>{
                    return(
                      <TouchableOpacity style = {styles.communityCardNow} onPress = { ()=>{
                        setModalVisible(!modalVisible)
                      }}>
                        <Text style = {[styles.mediumText, {opacity: 1}]}>{space.name}</Text>
                        <Text style = {[styles.extraSmallText, {opacity: 1}]}>{space.description}</Text>
                        <Text style = {[styles.extraSmallText, {opacity: .5}]}>Host: {space.host?.name}</Text>
                        <Pressable onPress = { ()=>{
                        setModalVisible(!modalVisible)
                      }} style = {{backgroundColor: '#f5f5f5',height: 'auto', width:90, paddingVertical: 10, paddingHorizontal: 10, display: 'flex', alignItems: 'center', justifyContent:'center', borderRadius: 12}}>
                          <Text style = {[styles.extraSmallText, {color: 'black', paddingLeft: 5}]}><Image source={require('../assets/Icons/play-button.png')} style = {{height:15, width: 15}}/>Join</Text>
                        </Pressable>
                      </TouchableOpacity>
                    )   
                  })
                }
            </ScrollView>
          </View>
        </SafeAreaView>
          <View style = {{paddingRight: 30}}>
            <View>
                <Text style = {styles.smallText}>Coming up</Text>
            </View>
            <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} >
              {
                !upcomingSpaces? <Text style = {[styles.mediumText, {opacity: .5}]}>No upcoming spaces</Text>:
                upcomingSpaces?.map((space)=>
                    <TouchableOpacity style = {styles.communityCardLater}>
                        <Text style = {[styles.mediumText, {opacity: 1}]}>{space.name}</Text>
                        <Text style = {[styles.extraSmallText, {opacity: 1}]}>{space.description}</Text>
                        <View>
                          <Text style = {[styles.extraSmallText, {opacity: .5}]}>Host:{space.host?.name}</Text>
                          <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 30, marginTop:10}}>
                            <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../assets/Icons/time.png')} style = {{height:15, width: 15}}/>
                            <Text style = {[styles.extraSmallText, {fontSize: 15}]}> : {formatTime(space.time)}</Text>
                            </View>
                            <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../assets/Icons/calendar.png')} style = {{height:15, width: 15}}/>
                            <Text style = {[styles.extraSmallText, {fontSize: 15}]}> : {formatDate(space.date)}</Text>
                            </View>

                          </View>


                        </View>
                        <Pressable style = {{backgroundColor: '#f5f5f5',height: 'auto', width:140, paddingVertical: 10, paddingHorizontal: 10, display: 'flex', alignItems: 'center', justifyContent:'center', borderRadius: 12}}>
                          <Text style = {[styles.extraSmallText, {color: 'black', paddingLeft: 0}]}><Image source={require('../assets/Icons/alarm.png')} style = {{height:15, width: 15, objectFit: 'contain'}}/>Remind Me</Text>
                        </Pressable>
                    </TouchableOpacity>
                  )
              }
            </ScrollView>


          </View>
          <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image source={require('../assets/Icons/sound-bars.png')} style = {{height:'50%', width: '50%', objectFit: 'contain'}}/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setSpeakRequest(!speakRequest)}>
              <Text style={styles.textStyle}>{speakRequest? 'Request to speak': 'Requested'}</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Leave Space</Text>
            </Pressable>
          </View>
        </View>
      </Modal>



      </View>

      <TouchableOpacity style = {styles.startHost} onPress = {()=>{
        navigation.navigate('createspace')
      }}>
          <Image source={require('../assets/Icons/add.png')} style = {{height:'50%', width: '50%', objectFit: 'contain'}}/>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
  extraSmallText:{
    fontSize: 20
  },
  smallText:{
    fontSize: 22,
  },
  mediumText:{
    fontSize: 25,
  },
  largeText:{
    fontSize: 30,
  },
  home:{
    paddingLeft: 30,
    height:400,

  },
  homeContainer:{
    height: '100%',
    display:'flex',
    justifyContent: 'space-around',
    
  },
  communityCardNow:{
    marginTop: 20,
    height: 210,
    borderRadius: 10,
    width: 330,
    marginRight: 20,
    backgroundColor: '#fefefe',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent:'space-around',
    padding:10
  },
  communityCardLater:{
    marginTop: 20,
    height: 210,
    borderRadius: 10,
    width: '100%',
    // marginRight: 20,
    backgroundColor: '#fefefe',
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent:'space-between',
    padding:10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom:78
    // marginTop: 22,
  },
  modalView: {
    // margin: 20,
    width: '90%',
    height: '50%',
    backgroundColor: 'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 50,
  },
  button: {
    borderRadius: 25,
    padding: 20,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: 'black',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  startHost:{
    position: 'absolute',
    bottom: 10,
    right:10,
    height: 80,
    width: 80,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 50 ,
    shadowColor: '#000',
    shadowOpacity: .3,
    shadowRadius: 50,

  }
} 
)
  export default Home

import AsyncStorage from '@react-native-async-storage/async-storage'
import { Surface } from '@react-native-material/core'
import React, { useEffect, useState } from 'react'
import { Image, ImageBackground, Modal, Pressable, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView, Text, View } from 'react-native'
import Bottombar from './Bottombar'


function Home({navigation}) {

  const spaces = [
    {
      Title: "Mindful Meditation",
      Description: "A guided meditation session to help you calm your mind and reduce stress.",
      Host: "Jane Doe"
    },
    {
      Title: "Therapy Talk",
      Description: "A safe and supportive space to discuss your mental health concerns with a licensed therapist.",
      Host: "John Smith"
    },
    {
      Title: "Yoga for Mental Health",
      Description: "A gentle yoga practice focused on improving your mental health and wellbeing.",
      Host: "Emily Jones"
    },
    {
      Title: "Art Therapy Workshop",
      Description: "An expressive arts workshop designed to help you process and cope with emotions.",
      Host: "Sarah Lee"
    },
    {
      Title: "Support Group for Anxiety",
      Description: "A weekly support group for individuals struggling with anxiety and related issues.",
      Host: "David Kim"
    }
  ];

  // const upcomingSpaces = [
  //   {
  //     Title: "Stress Management Workshop",
  //     Description: "Learn practical techniques to manage stress and improve your mental wellbeing.",
  //     Host: "Karen Wong",
  //     Date: "2023-04-10",
  //     Time: "3:00 PM EST"
  //   },
  //   {
  //     Title: "Mindfulness for Anxiety",
  //     Description: "Explore mindfulness practices to alleviate anxiety and increase self-awareness.",
  //     Host: "Alex Chen",
  //     Date: "2023-04-12",
  //     Time: "6:00 PM EST"
  //   },
  //   {
  //     Title: "Mental Health Check-In",
  //     Description: "Join a supportive community and share your mental health journey with others.",
  //     Host: "Jessica Lee",
  //     Date: "2023-04-15",
  //     Time: "2:00 PM EST"
  //   },
  //   {
  //     Title: "Coping with Depression",
  //     Description: "Gain insight into depression and learn coping strategies to improve your mood.",
  //     Host: "Michael Kim",
  //     Date: "2023-04-18",
  //     Time: "7:00 PM EST"
  //   },
  //   {
  //     Title: "Building Resilience",
  //     Description: "Develop resilience and improve your ability to bounce back from life's challenges.",
  //     Host: "Samantha Lee",
  //     Date: "2023-04-20",
  //     Time: "4:00 PM EST"
  //   }
  // ];
  
  
  const [speakRequest, setSpeakRequest] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [upcomingSpaces, setUpcomingspaces] = useState([])
  useEffect(()=>{
    fetch('http://192.168.0.162:5551/spaces')
      .then(response => response.json())
        .then(data => setUpcomingspaces(data.spaces))
  },[])
  return (
    <>
    
      <View style = {[styles.home, {opacity: modalVisible? 0.2: 1}]}>
        <SafeAreaView style = {styles.homeContainer}>

          
          <View style = {{display:'flex', flexDirection:'row', justifyContent: 'space-between', alignItems: 'center', paddingRight: 30}}>
            <View>
              <Text style = {styles.extraSmallText}>Good Morning!</Text>
              <Text style = {[styles.mediumText, {opacity: .5}]}>Rasheedat Jamiu</Text>
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
                  spaces.map((space)=>{
                    return(
                      <TouchableOpacity style = {styles.communityCardNow} onPress = { ()=>{
                        setModalVisible(!modalVisible)
                      }}>
                        <Text style = {[styles.mediumText, {opacity: 1}]}>{space.Title}</Text>
                        <Text style = {[styles.extraSmallText, {opacity: 1}]}>{space.Description}</Text>
                        <Text style = {[styles.extraSmallText, {opacity: .5}]}>Host: {space.Host}</Text>
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
                upcomingSpaces.map((upcomingSpace)=>{
                  return(
                    <TouchableOpacity style = {styles.communityCardLater}>
                        <Text style = {[styles.mediumText, {opacity: 1}]}>{upcomingSpace.title}</Text>
                        <Text style = {[styles.extraSmallText, {opacity: 1}]}>{upcomingSpace.description}</Text>
                        <View>
                          <Text style = {[styles.extraSmallText, {opacity: .5}]}>Host:{upcomingSpace.host_id}</Text>
                          <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 30, marginTop:10}}>
                            <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../assets/Icons/time.png')} style = {{height:15, width: 15}}/>
                            <Text style = {[styles.extraSmallText, {fontSize: 15}]}> : {upcomingSpace.time}</Text>
                            </View>
                            <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Image source={require('../assets/Icons/calendar.png')} style = {{height:15, width: 15}}/>
                            <Text style = {[styles.extraSmallText, {fontSize: 15}]}> : {upcomingSpace.date}</Text>
                            </View>

                          </View>


                        </View>
                        <Pressable style = {{backgroundColor: '#f5f5f5',height: 'auto', width:140, paddingVertical: 10, paddingHorizontal: 10, display: 'flex', alignItems: 'center', justifyContent:'center', borderRadius: 12}}>
                          <Text style = {[styles.extraSmallText, {color: 'black', paddingLeft: 0}]}><Image source={require('../assets/Icons/alarm.png')} style = {{height:15, width: 15, objectFit: 'contain'}}/>Remind Me</Text>
                        </Pressable>
                    </TouchableOpacity>
                  )

                })
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

import { Surface } from '@react-native-material/core'
import React from 'react'
import { Image, ImageBackground, Pressable, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView, Text, View } from 'react-native'
import Bottombar from './Bottombar'

function Home() {
  return (
    <>
      <View style = {styles.home}>
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
              <TouchableOpacity style = {styles.communityCardNow}>
                <Text style = {[styles.mediumText, {opacity: 1}]}>DEPRESSION</Text>
                <Text style = {[styles.extraSmallText, {opacity: 1}]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, numquam? Nisi nam consequatur vitae ipsa. </Text>
                <Text style = {[styles.extraSmallText, {opacity: .5}]}>Host: Ibrahim Aliyu</Text>
                <Pressable style = {{backgroundColor: '#f5f5f5',height: 'auto', width:90, paddingVertical: 10, paddingHorizontal: 10, display: 'flex', alignItems: 'center', justifyContent:'center', borderRadius: 12}}>
                  <Text style = {[styles.extraSmallText, {color: 'black', paddingLeft: 5}]}><Image source={require('../assets/Icons/play-button.png')} style = {{height:15, width: 15}}/>Join</Text>
                </Pressable>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.communityCardNow}>
                <Text style = {[styles.mediumText, {opacity: 1}]}>DEPRESSION</Text>
                <Text style = {[styles.extraSmallText, {opacity: 1}]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, numquam? Nisi nam consequatur vitae ipsa. </Text>
                <Text style = {[styles.extraSmallText, {opacity: .5}]}>Host: Ibrahim Aliyu</Text>
                <Pressable style = {{backgroundColor: '#f5f5f5',height: 'auto', width:90, paddingVertical: 10, paddingHorizontal: 10, display: 'flex', alignItems: 'center', justifyContent:'center', borderRadius: 12}}>
                  <Text style = {[styles.extraSmallText, {color: 'black', paddingLeft: 5}]}><Image source={require('../assets/Icons/play-button.png')} style = {{height:15, width: 15}}/>Join</Text>
                </Pressable>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.communityCardNow}>
                <Text style = {[styles.mediumText, {opacity: 1}]}>DEPRESSION</Text>
                <Text style = {[styles.extraSmallText, {opacity: 1}]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, numquam? Nisi nam consequatur vitae ipsa. </Text>
                <Text style = {[styles.extraSmallText, {opacity: .5}]}>Host: Ibrahim Aliyu</Text>
                <Pressable style = {{backgroundColor: '#f5f5f5',height: 'auto', width:90, paddingVertical: 10, paddingHorizontal: 10, display: 'flex', alignItems: 'center', justifyContent:'center', borderRadius: 12}}>
                  <Text style = {[styles.extraSmallText, {color: 'black', paddingLeft: 5}]}><Image source={require('../assets/Icons/play-button.png')} style = {{height:15, width: 15}}/>Join</Text>
                </Pressable>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.communityCardNow}>
                <Text style = {[styles.mediumText, {opacity: 1}]}>DEPRESSION</Text>
                <Text style = {[styles.extraSmallText, {opacity: 1}]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, numquam? Nisi nam consequatur vitae ipsa. </Text>
                <Text style = {[styles.extraSmallText, {opacity: .5}]}>Host: Ibrahim Aliyu</Text>
                <Pressable style = {{backgroundColor: '#f5f5f5',height: 'auto', width:90, paddingVertical: 10, paddingHorizontal: 10, display: 'flex', alignItems: 'center', justifyContent:'center', borderRadius: 12}}>
                  <Text style = {[styles.extraSmallText, {color: 'black', paddingLeft: 5}]}><Image source={require('../assets/Icons/play-button.png')} style = {{height:15, width: 15}}/>Join</Text>
                </Pressable>
              </TouchableOpacity>
            </ScrollView>


          </View>
        </SafeAreaView>
          <View style = {{paddingRight: 30}}>
            <View>
                <Text style = {styles.smallText}>Coming up</Text>
            </View>
            <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} >
            <TouchableOpacity style = {styles.communityCardLater}>
                <Text style = {[styles.mediumText, {opacity: 1}]}>DEPRESSION</Text>
                <Text style = {[styles.extraSmallText, {opacity: 1}]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, numquam? Nisi nam consequatur vitae ipsa. </Text>
                <Text style = {[styles.extraSmallText, {opacity: .5}]}>Host: Ibrahim Aliyu</Text>
                <Pressable style = {{backgroundColor: '#f5f5f5',height: 'auto', width:90, paddingVertical: 10, paddingHorizontal: 10, display: 'flex', alignItems: 'center', justifyContent:'center', borderRadius: 12}}>
                  <Text style = {[styles.extraSmallText, {color: 'black', paddingLeft: 5}]}><Image source={require('../assets/Icons/play-button.png')} style = {{height:15, width: 15}}/>Join</Text>
                </Pressable>
              </TouchableOpacity>
            <TouchableOpacity style = {styles.communityCardLater}>
                <Text style = {[styles.mediumText, {opacity: 1}]}>DEPRESSION</Text>
                <Text style = {[styles.extraSmallText, {opacity: 1}]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, numquam? Nisi nam consequatur vitae ipsa. </Text>
                <Text style = {[styles.extraSmallText, {opacity: .5}]}>Host: Ibrahim Aliyu</Text>
                <Pressable style = {{backgroundColor: '#f5f5f5',height: 'auto', width:90, paddingVertical: 10, paddingHorizontal: 10, display: 'flex', alignItems: 'center', justifyContent:'center', borderRadius: 12}}>
                  <Text style = {[styles.extraSmallText, {color: 'black', paddingLeft: 5}]}><Image source={require('../assets/Icons/play-button.png')} style = {{height:15, width: 15}}/>Join</Text>
                </Pressable>
              </TouchableOpacity>
              <TouchableOpacity style = {styles.communityCardLater}>
                <Text style = {[styles.mediumText, {opacity: 1}]}>DEPRESSION</Text>
                <Text style = {[styles.extraSmallText, {opacity: 1}]}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, numquam? Nisi nam consequatur vitae ipsa. </Text>
                <Text style = {[styles.extraSmallText, {opacity: .5}]}>Host: Ibrahim Aliyu</Text>
                <Pressable style = {{backgroundColor: '#f5f5f5',height: 'auto', width:90, paddingVertical: 10, paddingHorizontal: 10, display: 'flex', alignItems: 'center', justifyContent:'center', borderRadius: 12}}>
                  <Text style = {[styles.extraSmallText, {color: 'black', paddingLeft: 5}]}><Image source={require('../assets/Icons/play-button.png')} style = {{height:15, width: 15}}/>Join</Text>
                </Pressable>
              </TouchableOpacity>
            </ScrollView>


          </View>
        
      </View>
      {/* <Bottombar/> */}
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
    height:400
  },
  homeContainer:{
    height: '100%',
    display:'flex',
    justifyContent: 'space-around'
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
  }
} 
)
  export default Home

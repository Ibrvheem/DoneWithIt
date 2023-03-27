import { faFontAwesome } from "@fortawesome/free-regular-svg-icons"
import { View,StyleSheet, Text, SafeAreaView, TextInput, Button, TouchableOpacity, Image } from "react-native"
import { CheckBox, Divider } from "react-native-elements"
function SignUp({navigation}) {
  return (
    <View style = {styles.all}>
        <SafeAreaView style = {styles.container}>
            <View style = {styles.body}>
                <View style = {styles.signup}>
                    <View style = {{display:'flex', flexDirection: 'row', alignItems: 'center', gap:5}}>
                        <Image source={require('../assets/favicon.png')}/>
                        <Text style = {styles.greetings}>Hey,there, I'm Max. Before we proceed,Fill in your info </Text>
                        {/* <Text style = {[styles.inputnames, {textAlign: 'center', fontWeight:'bold'}]}>Connect with your friends today!</Text>  */}

                    </View>
                <View>
                    <View style = {styles.form}>
                        <TextInput style = {styles.input} placeholderTextColor = 'rgba(255,255,255, .6)' placeholder="Enter Your Username"/>
                    </View>
                    <View style = {styles.form}>
                        <TextInput style = {styles.input} placeholderTextColor = 'rgba(255,255,255, .6)' placeholder="Enter Your Email"/>
                    </View>
                    <View style = {styles.form}>
                        <TextInput style = {styles.input} placeholderTextColor = 'rgba(255,255,255, .6)' placeholder="Enter Your Phone Number"/>
                    </View>
                    <View style = {styles.form}>
                        <TextInput style = {styles.input} secureTextEntry placeholderTextColor = 'rgba(255,255,255, .6)' placeholder="Enter Your Password"/>
                    </View>
                    {/* <View style = {{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}}>
                        <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox containerStyle = {{padding:0, margin:0, marginLeft:0, marginRight: 1}}/>
                            <Text style = {{color: 'black', fontSize: 15, fontWeight: 'bold'}}>Remember Me?</Text>

                        </View>
                        <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Text style = {{color: '#E86969', fontSize: 15, fontWeight: 'medium'}}>Forgot Password?</Text>
                        </View>
                    </View> */}
                    <TouchableOpacity style = {styles.button}>
                        <Text style = {{color: '#fff', fontSize:16, fontWeight: 'bold'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style= {{display:'flex', flexDirection:'row', alignItems: 'center'}}>
                    <Divider style = {{flex: 1}}/>
                        <Text style = {[styles.greetings,{color:'rgba(255,255,255, .8)', marginTop:0, paddingHorizontal: 10, fontFamily: 'poppinsLight'}]}>Or With</Text>
                    <Divider style ={{flex: 1}}/>
                </View>
                <View>
                        {/* <TouchableOpacity style = {[styles.button, {backgroundColor: '#1877F2'}]}>
                            <Image source = {require('../assets/Icons/Facebook.png')} style= {[styles.icon]}/>
                            <Text style = {{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>  Signup With Facebook</Text>
                            <View></View>
                    
                        </TouchableOpacity> */}
                        <TouchableOpacity style = {[styles.button, {backgroundColor: 'transparent',borderWidth: 1, borderColor: 'white'}]}>
                        <Image source = {require('../assets/Icons/Google.png')} style= {[styles.icon]}/>
                            <Text style = {{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Signup with Google</Text>
                            <View></View>
                        </TouchableOpacity>
                        <Text style = {{fontSize: 16, color: 'white', fontWeight: "bold", textAlign:'center', marginTop: 20}}>Already have an account? <Text style = {{color:'#2F89FC', textDecorationLine:"underline"}} onPress = {()=>{
                            navigation.navigate('signin')}}>Login</Text></Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    </View>

  )
}
const styles = StyleSheet.create({
    all:{
        backgroundColor: '#090E16',
        height: '100%',
    }, 
    container: {
        flex: 1,
        fontFamily: 'poppinsLight'
        // paddingTop: Platform.OS ==='android'? StatusBar.currentHeight : 0
    },
      body:{
        paddingHorizontal: 30,
        display: 'flex',
        justifyContent: 'center',
        // backgroundColor: 'white'
    },    
    signup:{
        // backgroundColor: 'red',
         height: '100%',
         display: 'flex',
         justifyContent: 'space-evenly',
        //  alignItems: 'center',
         width: '100%'

    },
    greetings:{
        // marginTop: 30,
        fontSize: 24,
        fontFamily: 'poppinsBold',
        textAlign: 'left',
        color: 'white',
        paddingHorizontal: 60

    },
    inputnames:{
        marginBottom: 10,
        color: 'white',
        fontFamily: 'poppinsRegular'

    },
    input:{
        paddingHorizontal: 20,
        height:50,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 28,
        borderColor: 'rgba(255,255,255,1)',
        fontFamily: 'poppinsRegular'

    },
    button:{
        backgroundColor: '#0E64D2',
        height: 48,
        borderRadius: 5,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 20
    },
    buttonColor:{

    },
    icon:{
        height: 20,
        width: 20,
    },

})
export default SignUp

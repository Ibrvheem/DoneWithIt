import { faFontAwesome } from "@fortawesome/free-regular-svg-icons"
import { View,StyleSheet, Text, SafeAreaView, TextInput, Button, TouchableOpacity, Image } from "react-native"
import { CheckBox, Divider } from "react-native-elements"
function Signin({navigation}) {
  return (
    <View style = {styles.all}>
        <SafeAreaView style = {styles.container}>
        <View style = {styles.body}>
            <View style = {styles.signin}>
                <View>
                    <Text style = {styles.greetings}>Hi, Welcome Back <Image source={require('../assets/Icons/wave.png')} style = {{height:30, width: 30}}/></Text>

                </View>
            <View>
                <View style = {styles.form}>
                    <Text style = {styles.inputnames}>Email</Text> 
                    <TextInput style = {styles.input} placeholderTextColor = 'rgba(255,255,255,.6)' placeholder="Example@gmail.com"/>
                </View>
                <View style = {styles.form}>
                    <Text style = {styles.inputnames}>Password</Text>
                    <TextInput style = {styles.input} secureTextEntry placeholderTextColor = 'rgba(255,255,255,.6)' placeholder="Enter Your Password"/>
                </View>
                <View style = {{display: 'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'space-between'}}>
                    <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <CheckBox containerStyle = {{padding:0, margin:0, marginLeft:0, marginRight: 1}}/>
                        <Text style = {{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Remember Me?</Text>

                    </View>
                    <View style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <Text style = {{color: '#E86969', fontSize: 15, fontWeight: 'medium'}}>Forgot Password?</Text>
                    </View>
                </View>
                <TouchableOpacity style = {styles.button} onPress = {() =>{navigation.navigate('Bottombar')}} >
                    <Text style = {{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style= {{display:'flex', flexDirection:'row', alignItems: 'center'}}>
                <Divider style = {{flex: 1}}/>
                    <Text style = {[styles.greetings,{color:'rgba(255,255,255, .7)', marginTop:0, paddingHorizontal: 10, fontFamily: 'poppinsLight'}]}>Or With</Text>
                <Divider style ={{flex: 1}}/>
            </View>
            <View>
                    <TouchableOpacity style = {[styles.button, {backgroundColor: '#1877F2'}]}>
                        <Image source = {require('../assets/Icons/Facebook.png')} style= {[styles.icon]}/>
                        <Text style = {{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>  Login With Facebook</Text>
                        <View></View>
                
                    </TouchableOpacity>
                    <TouchableOpacity style = {[styles.button, {backgroundColor: 'transparent',borderWidth: 1, borderColor: 'white'}]}>
                    <Image source = {require('../assets/Icons/Google.png')} style= {[styles.icon]}/>
                        <Text style = {{color: 'white',fontSize: 16, fontWeight: 'bold'}}>Login with Google</Text>
                        <View></View>
                    </TouchableOpacity>
                    <Text style = {{fontSize: 16, color: 'white', fontWeight: "bold", textAlign:'center', marginTop: 20}}>Don't Have an account? <Text style = {{color:'#2F89FC', textDecorationLine:"underline"}}onPress = {() =>{navigation.navigate('signup')}} > Sign Up</Text></Text>
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
        
        color: '#ffffff'

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
    },    
    signin:{
         height: '100%',
         display: 'flex',
         justifyContent: 'space-evenly',
        //  alignItems: 'center',
         width: '100%'

    },
    greetings:{
        marginTop: 30,
        fontSize: 24,
        fontFamily: 'poppinsBold',
        textAlign: 'center',
        color: '#ffffff'

    },
    inputnames:{
        marginBottom: 10,
        fontFamily: 'poppinsRegular',
        color: '#ffffff',



    },
    input:{
        paddingHorizontal: 20,
        height:50,
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: 'rgba(255,255,255, 1)',
        fontFamily: 'poppinsRegular',


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
export default Signin

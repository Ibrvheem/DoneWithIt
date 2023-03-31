import { faFontAwesome } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"
import { View,StyleSheet, Text, SafeAreaView, TextInput, Button, TouchableOpacity, Image } from "react-native"
import { CheckBox, Divider } from "react-native-elements"
function SignUp({navigation}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    

    function handleSignUp(){
        fetch ('http://192.168.0.162:5551/register', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    full_name: name,
                    phone: phone,
                    email: email,
                    password:password
                }
            )
        })
        .then(response => response.json())
        .then(data => console.log(data))
        console.log('sent')

    }

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
                        <TextInput style = {styles.input} placeholderTextColor = 'rgba(255,255,255, .6)' placeholder="Full Name" value = {name} onChangeText={(text)=>{
                            setName(text)
                        }}/>
                    </View>
                    <View style = {styles.form}>
                        <TextInput style = {styles.input} placeholderTextColor = 'rgba(255,255,255, .6)' placeholder="Enter Your Email" value = {email} onChangeText={(text)=>{
                            setEmail(text)
                        }}/>
                    </View>
                    <View style = {styles.form}>
                        <TextInput style = {styles.input} placeholderTextColor = 'rgba(255,255,255, .6)' placeholder="Enter Your Phone Number" value = {phone} onChangeText={(text)=>{
                            setPhone(text)
                        }}/>
                    </View>
                    <View style = {styles.form}>
                        <TextInput style = {styles.input} secureTextEntry placeholderTextColor = 'rgba(255,255,255, .6)' placeholder="Enter Your Password" value = {password} onChangeText={(text)=>{
                            setPassword(text)
                        }}/>
                    </View>
                    <TouchableOpacity style = {styles.button} onPress = {handleSignUp}>
                        <Text style = {{color: '#fff', fontSize:16, fontWeight: 'bold'}}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style= {{display:'flex', flexDirection:'row', alignItems: 'center'}}>
                    <Divider style = {{flex: 1}}/>
                        <Text style = {[styles.greetings,{color:'rgba(255,255,255, .8)', marginTop:0, paddingHorizontal: 10, fontFamily: 'poppinsLight'}]}>Or With</Text>
                    <Divider style ={{flex: 1}}/>
                </View>
                <View>
                    <TouchableOpacity style = {[styles.button, {backgroundColor: 'transparent',borderWidth: 1, borderColor: 'white'}]}>
                        <Image source = {require('../assets/Icons/Google.png')} style= {[styles.icon]}/>
                            <Text style = {{color: 'white', fontSize: 16, fontWeight: 'bold'}}>Signup with Google</Text>
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
        fontFamily: 'poppinsRegular',
        color:'white'

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

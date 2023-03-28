import Signin from "./Features/Signin";
import SignUp from "./Features/Signup";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Appbar from "./Components/Appbar";
import Bottombar from "./Components/Bottombar";
import Home from "./Components/Home";
import SelfCare from "./Components/TherapistChat";
import TherapistChat from "./Components/TherapistChat";
import MypalChat from "./Components/MypalChat";
import CreateSpace from "./Components/CreateSpace";
// import { AppBar } from "@react-native-material/core";

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name = 'signin' component={Signin} options={{headerShown: false}} />
        <Stack.Screen name="signup" component={SignUp}options={{headerShown: false}} />
        <Stack.Screen name="therapistchat" component={TherapistChat}options={{headerShown: false}} />
        <Stack.Screen name="mypalchat" component={MypalChat}options={{headerShown: false}} />
        <Stack.Screen name = 'createspace' component={CreateSpace} options={{headerShown: false}} />
        <Stack.Screen name = 'Bottombar' component={Bottombar} options={{headerShown: false}} />
      </Stack.Navigator>


  );
}

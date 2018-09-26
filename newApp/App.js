import React from "react";
import { Platform, StatusBar, Text, StyleSheet, View, ImageBackground, Alert } from "react-native";
import { createStackNavigator } from 'react-navigation';
import loginScreen from './Screens/loginScreen';
import homeScreen from './Screens/homeScreen';
import profileScreen from './Screens/profileScreen';
import resultScreen from './Screens/resultScreen';

export default class App extends React.Component {
  render(){
    return(
     <AppStackNavigator />
    );
  }
}
const AppStackNavigator = createStackNavigator({
  Login: loginScreen,
  Home: homeScreen,
  Profile: profileScreen,
  Result: resultScreen
})

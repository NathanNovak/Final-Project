import React from "react";
import { Platform, StatusBar, Text, StyleSheet, View, ImageBackground, Alert } from "react-native";
import { createStackNavigator } from 'react-navigation';
import loginScreen from './Screens/loginScreen';
import homeScreen from './Screens/HomeScreen';
import profileScreen from './Screens/profileScreen';
import resultScreen from './Screens/resultScreen';
import breweryregScreen from './Screens/breweryregScreen';
import userregScreen from './Screens/userregScreen';
import cameraScreen from "./Screens/cameraScreen";


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
  Result: resultScreen,
  BrewReg: breweryregScreen,
  UserReg: userregScreen,
  Camera: cameraScreen

})

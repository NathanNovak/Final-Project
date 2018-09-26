import React from "react";
import { Platform, StatusBar, Text, StyleSheet, View, ImageBackground, Alert } from "react-native";
import { createStackNavigator } from 'react-navigation';
import loginScreen from './Screens/loginScreen';
import homeScreen from './Screens/homeScreen'


export default class App extends React.Component {
  render(){
    return(
     <AppStackNavigaor />
    );
  }
}
const AppStackNavigaor = createStackNavigator({
  Login: loginScreen,
  Home: homeScreen
})
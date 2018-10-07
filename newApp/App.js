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
import API from "./utils/API";


export default class App extends React.Component {


  static navigationOptions = {
    header: null
  };

  state = {
    currentUser: []
  }
  loginUser = (user, response) => {
    console.log("TEST", user);
    API.authenticate(user)
  .then(res => {console.log("res " + JSON.stringify(res))
    this.setState({currentUser:res})
    console.log(this.state.currentUser.loggedIn)
})

    
  };



  render() {
    return (
      <AppStackNavigator
        screenProps={{
          loginUser: this.loginUser,
          currentUser: this.state.currentUser

        }} />
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

import React from "react";
import {
  Platform,
  StatusBar,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Alert
} from "react-native";
import { createStackNavigator } from "react-navigation";
import loginScreen from "./Screens/loginScreen";
import homeScreen from "./Screens/HomeScreen";
import profileScreen from "./Screens/profileScreen";
import resultScreen from "./Screens/resultScreen";
import breweryregScreen from "./Screens/breweryregScreen";
import userregScreen from "./Screens/userregScreen";
import cameraScreen from "./Screens/cameraScreen";
import API from "./utils/API";

const AppStackNavigator = createStackNavigator({
  Login: loginScreen,
  Home: homeScreen,
  Profile: profileScreen,
  Result: resultScreen,
  BrewReg: breweryregScreen,
  UserReg: userregScreen,
  Camera: cameraScreen
});

export default class App extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    currentUser: []
  };
  
  loginUser = (user, response) => {
    API.authenticate(user).then(res => {
      console.log("res " + JSON.stringify(res));
      this.setState({ currentUser: res });
      console.log(this.state.currentUser.loggedIn);
      if (this.state.currentUser.loggedIn) {
        navigate("home")
        console.log("logged in?" + this.state.currentUser.loggedIn);
      }

      // {() => this.props.navigation.navigate("Home")}
      else Alert.alert("Invalid Username or Password");
    });
  };

  render() {
    return (
      <AppStackNavigator
        screenProps={{
          loginUser: this.loginUser,
          currentUser: this.state.currentUser
        }}
      />
    );
  }
}

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
import brewerProfile from "./Screens/brewerProfile";
import brewerList from "./Screens/brewerList";
import breweryregScreen from "./Screens/breweryregScreen";
import userregScreen from "./Screens/userregScreen";
import cameraScreen from "./Screens/cameraScreen";
import API from "./utils/API";

const AppStackNavigator = createStackNavigator({
  Login: loginScreen,
  Home: homeScreen,
  Profile: profileScreen,
  BrewReg: breweryregScreen,
  UserReg: userregScreen,
  Camera: cameraScreen,
  Brewer: brewerProfile,
  Brewers: brewerList
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
        console.log("logged in?" + this.state.currentUser.loggedIn);
      }

      // {() => this.props.navigation.navigate("Home")}
      else Alert.alert("Invalid Username or Password");
    });
  };

  loginBrewer = (brewer, response) => {
    API.authenticateBrewer(brewer).then(res => {
      console.log("res " + JSON.stringify(res));
      this.setState({ currentBrewer: res });
      console.log(this.state.currentBrewer.loggedIn);
      if (this.state.current.currentBrewer.loggedIn) {
        console.log("logged in?" + this.state.currentBrewer.loggedIn);
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
          currentUser: this.state.currentUser,
          loginBrewer: this.loginBrewer,
          currentBrewer:this.state.currentBrewer
        }}
      />
    );
  }
}

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
import brewereditProfile from "./Screens/brewereditProfile";
import brewerProfile from "./Screens/brewerProfile";
import brewerList from "./Screens/brewerList";
import breweryregScreen from "./Screens/breweryregScreen";
import userregScreen from "./Screens/userregScreen";
import cameraScreen from "./Screens/cameraScreen";
import edit from "./Screens/edit";
import beers from "./Screens/beers";
import API from "./utils/API";

const AppStackNavigator = createStackNavigator({
  Login: loginScreen,
  Home: homeScreen,
  BrewReg: breweryregScreen,
  UserReg: userregScreen,
  Camera: cameraScreen,
  Brewer: brewereditProfile,
  Brewers: brewerList,
  UserBrewer: brewerProfile,
  Edit: edit,
  Beers: beers
});

export default class App extends React.Component {
  static navigationOptions = {
    header: null
  };

  state = {
    currentUser: [],
    currentBrewer: [],
    brewers: []
  };


  loginUser = (user, response) => {
    return new Promise((resolve, reject) => {
      API.authenticate(user).then(res => {
        console.log("res " + JSON.stringify(res));
        this.setState({ currentUser: res });
        console.log(this.state.currentUser.loggedIn);
        if (this.state.currentUser.loggedIn) {
          console.log("logged in?" + this.state.currentUser.loggedIn);
          resolve("IN");
        }

        // {() => this.props.navigation.navigate("Home")}
        else {
          Alert.alert("Invalid Username or Password");
          reject("Err");
        }
      });
    });
  };

  logoutUser = (user, response) => {
    return new Promise((resolve, reject) => {
      API.logoutUser(user).then(res => {
        console.log("res " + JSON.stringify(res));
        this.setState({ currentUser: res });
        console.log(this.state.currentUser.loggedIn);
        if (!this.state.currentUser.loggedIn) {
          console.log("logged in?" + this.state.currentUser.loggedIn);
          resolve("IN");
        }

        // {() => this.props.navigation.navigate("Home")}
        else {
          Alert.alert("Invalid Username or Password");
          reject("Err");
        }
      });
    });
  };

  

  loginBrewer = (brewer, response) => {
    return new Promise ((resolve, reject) => {API.authenticateBrewer(brewer).then(res => {
      console.log("res " + JSON.stringify(res));
      this.setState({ currentBrewer: res });
      console.log(this.state.currentBrewer.loggedIn);
      if (this.state.currentBrewer.loggedIn) {
        console.log("logged in?" + this.state.currentBrewer.loggedIn);
        resolve("IN")
      }

      // {() => this.props.navigation.navigate("Home")}
      else{
         Alert.alert("Invalid Username or Password");
        reject("err");
      }
    })
    })
  };

  render() {
    return (
      <AppStackNavigator
        screenProps={{
          loginUser: this.loginUser,
          logoutUser: this.logoutUser,
          currentUser: this.state.currentUser,
          loginBrewer: this.loginBrewer,
          currentBrewer: this.state.currentBrewer,
          brewers:this.state.brewers
        }}
      />
    );
  }
}

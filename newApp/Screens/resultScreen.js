import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";


class resultScreen extends Component {
    state = {
        isVisible: true,
        user: "",
        password: ""
    };
    render() {
        return (
          <ImageBackground source={require('../assets/beer-background.jpg')}
            style={styles.container}>
    
           
          </ImageBackground>
        );
      }
}

export default resultScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
    }, 
  });
